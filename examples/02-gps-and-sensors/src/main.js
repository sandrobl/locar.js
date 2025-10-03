import * as THREE from 'three';
import * as LocAR from 'locar';
import proj4 from 'proj4';

// === Example configuration ==================================================
// Dedicated point-of-interest used in this scenario. Only this location will
// be visualised so the behaviour is predictable while testing.
const INITIAL_POI_COORDINATES = {
    latitude: 47.410139353884134,
    longitude: 9.332826022676095
};

// Amount of movement (in metres) applied every time a direction button is pressed.
const MOVEMENT_STEP_METERS = 5;

// Colours used for each cube face so orientation changes are easy to spot.
const POI_FACE_COLOURS = [
    0xff3366,
    0xffc53d,
    0x4fd1c5,
    0x38a169,
    0x667eea,
    0xf687b3
];
const POI_FACE_OPACITY = 0.6;

const PROJECTION_WGS84 = 'EPSG:4326';
const PROJECTION_LV95 = 'EPSG:2056';
const PROJECTED_BUFFER_METERS = 50;
const GEO_NS = 'https://www.geoportal.ch';
const WFS_ENDPOINT = 'https://www.geoportal.ch/services/wfs';
const WFS_TYPENAME = 'geoportal:a111_avdm01_amtlverm_fla';
const WFS_RESULT_LIMIT = '1000000';
const PROJECTED_AUTH_STORAGE_KEY = 'locar.projectedAuth';

proj4.defs(PROJECTION_WGS84, '+proj=longlat +datum=WGS84 +no_defs');
proj4.defs(PROJECTION_LV95, '+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=2600000 +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs');

// === Scene and renderer setup ==============================================
const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.001, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('glscene')
});
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();

// The LocationBased helper places meshes using latitude/longitude pairs.
const locar = new LocAR.LocationBased(scene, camera);

// Use the environment camera so the AR content appears over the rear camera feed.
const cam = new LocAR.Webcam({
    video: { facingMode: 'environment' }
}, null);

// When the webcam starts, sample the texture and show the live camera feed.
cam.on('webcamstarted', ev => {
    scene.background = ev.texture;
});

cam.on('webcamerror', error => {
    alert(`Webcam error: code ${error.code} message ${error.message}`);
});

// Keep the renderer responsive to device rotation / resizing.
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// === Device orientation controls ===========================================
let firstLocation = true;
let poiPlaced = false;
let poiMesh = null;

// Mutable copy of the POI coordinates so the user can nudge the marker.
const poiState = {
    latitude: INITIAL_POI_COORDINATES.latitude,
    longitude: INITIAL_POI_COORDINATES.longitude
};

// Store the most recent device coordinates so we can spawn the cube there on demand.
let lastDeviceCoords = null;
let projectedFetchInFlight = false;
let lastProjectedRequestKey = null;
let cachedProjectedAuth = null;
const deviceOrientationControls = new LocAR.DeviceOrientationControls(camera);

deviceOrientationControls.on('deviceorientationgranted', ev => {
    ev.target.connect();
});

deviceOrientationControls.on('deviceorientationerror', error => {
    alert(`Device orientation error: code ${error.code} message ${error.message}`);
});

deviceOrientationControls.init();

// === GPS handling ===========================================================
locar.on('gpserror', error => {
    alert(`GPS error: ${error.code}`);
});

locar.on('gpsupdate', ev => {
    const { latitude, longitude } = ev.position.coords;

    if (firstLocation) {
        firstLocation = false;
    }

    updateDeviceLabel(latitude, longitude);

    if (!poiPlaced) {
        poiState.latitude = latitude;
        poiState.longitude = longitude;
        poiMesh = createPoiMarker();
        locar.add(poiMesh, poiState.longitude, poiState.latitude);
        poiPlaced = true;
        syncPoiInputs();
    } else {
        updatePoiPosition();
    }

    if (projectedPanel?.classList.contains('projected-open')) {
        loadProjectedBuildings().catch(error => console.error('Error refreshing projected buildings', error));
    }
});

// Start retrieving live GPS data immediately.
locar.startGps();

// === Testing helpers ========================================================
const fakeLatInput = document.getElementById('fakeLat');
const fakeLonInput = document.getElementById('fakeLon');
const setFakeButton = document.getElementById('setFakeLoc');
const resumeRealGpsButton = document.getElementById('resumeRealGps');
const moveNorthButton = document.getElementById('moveNorth');
const moveSouthButton = document.getElementById('moveSouth');
const moveWestButton = document.getElementById('moveWest');
const moveEastButton = document.getElementById('moveEast');
const removePoiButton = document.getElementById('removePoi');
const resetPoiButton = document.getElementById('resetPoi');
const deviceCoordsLabel = document.getElementById('deviceCoords');
const poiCoordsLabel = document.getElementById('poiCoords');
const gpsInputContainer = document.getElementById('gpsinput');
const gpsInputToggle = document.getElementById('gpsinputToggle');
const projectedToggle = document.getElementById('projectedToggle');
const projectedPanel = document.getElementById('projectedPanel');
const projectedClose = document.getElementById('projectedClose');
const projectedStatus = document.getElementById('projectedStatus');
const projectedList = document.getElementById('projectedList');
const projectedAuthButton = document.getElementById('projectedAuthButton');
const projectedAuthStatus = document.getElementById('projectedAuthStatus');

restoreProjectedAuthFromStorage();
updateProjectedAuthStatus();

setFakeButton.addEventListener('click', () => {
    const fakeLat = parseFloat(fakeLatInput.value);
    const fakeLon = parseFloat(fakeLonInput.value);

    if (Number.isNaN(fakeLat) || Number.isNaN(fakeLon)) {
        alert('Please enter valid numeric latitude / longitude values.');
        return;
    }

    alert('Using fake input GPS, not real GPS location');
    locar.stopGps();
    locar.fakeGps(fakeLon, fakeLat);
});

resumeRealGpsButton.addEventListener('click', () => {
    alert('Resuming real GPS updates');
    deviceCoordsLabel.textContent = 'waiting for GPS…';
    locar.startGps();
});

moveNorthButton.addEventListener('click', () => adjustPoiByMeters(MOVEMENT_STEP_METERS, 0));
moveSouthButton.addEventListener('click', () => adjustPoiByMeters(-MOVEMENT_STEP_METERS, 0));
moveWestButton.addEventListener('click', () => adjustPoiByMeters(0, -MOVEMENT_STEP_METERS));
moveEastButton.addEventListener('click', () => adjustPoiByMeters(0, MOVEMENT_STEP_METERS));
removePoiButton.addEventListener('click', removePoi);
resetPoiButton.addEventListener('click', resetPoiToDeviceLocation);

if (gpsInputToggle && gpsInputContainer) {
    gpsInputToggle.addEventListener('click', () => {
        const collapsed = gpsInputContainer.classList.toggle('gpsinput-collapsed');
        gpsInputToggle.setAttribute('aria-expanded', (!collapsed).toString());
        gpsInputToggle.textContent = collapsed ? '► Controls' : '▼ Controls';
        gpsInputToggle.title = collapsed ? 'Show testing controls' : 'Hide testing controls';
    });
}

if (projectedToggle && projectedPanel) {
    projectedToggle.addEventListener('click', () => {
        if (projectedPanel.classList.contains('projected-open')) {
            closeProjectedPanel();
        } else {
            openProjectedPanel(true);
        }
    });
}

projectedClose?.addEventListener('click', () => closeProjectedPanel());

projectedAuthButton?.addEventListener('click', handleProjectedAuthButtonClick);

document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && projectedPanel?.classList.contains('projected-open')) {
        closeProjectedPanel();
    }
});

// === Render loop ============================================================
renderer.setAnimationLoop(animate);

function animate() {
    // Update orientation so THREE knows which direction the device is pointing.
    deviceOrientationControls?.update();
    renderer.render(scene, camera);
}

// Helper creates the POI mesh so it is only constructed when needed.
function createPoiMarker() {
    const geometry = new THREE.BoxGeometry(12, 12, 12);
    const faceMaterials = POI_FACE_COLOURS.map(colour => new THREE.MeshBasicMaterial({
        color: colour,
        opacity: POI_FACE_OPACITY,
        transparent: true
    }));

    const mesh = new THREE.Mesh(geometry, faceMaterials);

    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.3, transparent: true });
    const edges = new THREE.EdgesGeometry(geometry);
    mesh.add(new THREE.LineSegments(edges, edgeMaterial));

    mesh.name = 'Example POI';
    return mesh;
}

// Update the POI mesh position after its latitude / longitude changes.
function updatePoiPosition() {
    if (!poiPlaced || !poiMesh) {
        return;
    }

    const [x, z] = locar.lonLatToWorldCoords(poiState.longitude, poiState.latitude);
    poiMesh.position.x = x;
    poiMesh.position.z = z;
}

// Keep the latitude / longitude inputs in sync with the POI state.
function syncPoiInputs() {
    fakeLatInput.value = poiState.latitude.toFixed(8);
    fakeLonInput.value = poiState.longitude.toFixed(8);
    if (poiPlaced) {
        poiCoordsLabel.textContent = `${poiState.latitude.toFixed(6)}°, ${poiState.longitude.toFixed(6)}°`;
    } else {
        poiCoordsLabel.textContent = 'none';
    }
}

// Move the POI north/south (deltaNorthMeters) and east/west (deltaEastMeters).
function adjustPoiByMeters(deltaNorthMeters, deltaEastMeters) {
    if (!poiPlaced || !poiMesh) {
        alert('The AR scene is still initialising. Try again when the red marker is visible.');
        return;
    }

    const METERS_PER_DEGREE_LAT = 111132; // Good approximation for small deltas.
    const metersPerDegreeLon = Math.max(Math.cos(poiState.latitude * Math.PI / 180) * METERS_PER_DEGREE_LAT, 1e-6);

    poiState.latitude += deltaNorthMeters / METERS_PER_DEGREE_LAT;
    poiState.longitude += deltaEastMeters / metersPerDegreeLon;

    updatePoiPosition();
    syncPoiInputs();
}

function updateDeviceLabel(latitude, longitude) {
    if (Number.isFinite(latitude) && Number.isFinite(longitude)) {
        deviceCoordsLabel.textContent = `${latitude.toFixed(6)}°, ${longitude.toFixed(6)}°`;
        lastDeviceCoords = { latitude, longitude };
    }
}

function removePoi() {
    if (!poiPlaced || !poiMesh) {
        alert('No cube to remove right now.');
        return;
    }

    scene.remove(poiMesh);
    poiMesh = null;
    poiPlaced = false;
    syncPoiInputs();
}

function resetPoiToDeviceLocation() {
    if (!lastDeviceCoords) {
        alert('Device location not available yet. Wait for GPS before resetting the cube.');
        return;
    }

    poiState.latitude = lastDeviceCoords.latitude;
    poiState.longitude = lastDeviceCoords.longitude;

    if (!poiPlaced || !poiMesh) {
        poiMesh = createPoiMarker();
        locar.add(poiMesh, poiState.longitude, poiState.latitude);
        poiPlaced = true;
    } else {
        updatePoiPosition();
    }

    syncPoiInputs();
}

function openProjectedPanel(forceRefresh = false) {
    if (!projectedPanel) {
        return;
    }

    projectedPanel.classList.add('projected-open');
    projectedPanel.setAttribute('aria-hidden', 'false');
    projectedToggle?.setAttribute('aria-expanded', 'true');

    if (forceRefresh) {
        lastProjectedRequestKey = null;
    }

    loadProjectedBuildings(forceRefresh).catch(error => {
        console.error('Error loading projected buildings', error);
    });
}

function closeProjectedPanel() {
    if (!projectedPanel) {
        return;
    }

    projectedPanel.classList.remove('projected-open');
    projectedPanel.setAttribute('aria-hidden', 'true');
    projectedToggle?.setAttribute('aria-expanded', 'false');
}

async function loadProjectedBuildings(forceRefresh = false) {
    if (!projectedPanel || !projectedStatus || !projectedList) {
        return;
    }

    if (!lastDeviceCoords) {
        projectedStatus.textContent = 'Waiting for GPS fix before requesting projected buildings.';
        projectedList.replaceChildren();
        return;
    }

    const [x, y] = proj4(PROJECTION_WGS84, PROJECTION_LV95, [lastDeviceCoords.longitude, lastDeviceCoords.latitude]);
    const bbox = {
        xmin: x - PROJECTED_BUFFER_METERS,
        ymin: y - PROJECTED_BUFFER_METERS,
        xmax: x + PROJECTED_BUFFER_METERS,
        ymax: y + PROJECTED_BUFFER_METERS
    };

    const requestKey = `${bbox.xmin.toFixed(2)}|${bbox.ymin.toFixed(2)}|${bbox.xmax.toFixed(2)}|${bbox.ymax.toFixed(2)}`;

    if (!forceRefresh && lastProjectedRequestKey === requestKey && projectedList.childElementCount > 0) {
        projectedStatus.textContent = `${projectedList.childElementCount} projected building${projectedList.childElementCount === 1 ? '' : 's'} listed.`;
        return;
    }

    if (projectedFetchInFlight) {
        return;
    }

    projectedFetchInFlight = true;
    projectedPanel.dataset.loading = 'true';
    projectedStatus.textContent = 'Loading projected buildings…';
    projectedList.replaceChildren();

    try {
        const params = new URLSearchParams({
            SERVICE: 'WFS',
            REQUEST: 'GetFeature',
            VERSION: '2.0.0',
            TYPENAMES: WFS_TYPENAME,
            COUNT: WFS_RESULT_LIMIT,
            SRSNAME: 'urn:ogc:def:crs:EPSG::2056',
            BBOX: `${bbox.xmin},${bbox.ymin},${bbox.xmax},${bbox.ymax},urn:ogc:def:crs:EPSG::2056`
        });

        const url = `${WFS_ENDPOINT}?${params.toString()}`;
        const headers = new Headers({
            Accept: 'application/xml'
        });

        const authHeader = getProjectedAuthHeader();
        if (authHeader) {
            headers.set('Authorization', authHeader);
        }

        const response = await fetch(url, { headers });
        if (!response.ok) {
            throw new Error(`Geoportal request failed (${response.status})`);
        }

        const xmlPayload = await response.text();
        const projectedItems = parseProjectedFeatures(xmlPayload);

        if (projectedItems.length === 0) {
            projectedStatus.textContent = 'No projected buildings found within the current search radius.';
            lastProjectedRequestKey = requestKey;
            return;
        }

        const fragment = document.createDocumentFragment();
        projectedItems.forEach(item => {
            const row = document.createElement('li');
            row.className = 'projected-item';

            const heading = document.createElement('h3');
            heading.textContent = item.usage;
            row.appendChild(heading);

            if (item.status) {
                const statusLine = document.createElement('p');
                statusLine.textContent = `Status: ${item.status}`;
                row.appendChild(statusLine);
            }

            if (item.area) {
                const areaLine = document.createElement('p');
                areaLine.textContent = `Area: ${formatArea(item.area)} m²`;
                row.appendChild(areaLine);
            }

            if (item.identifier || item.nbident) {
                const idLine = document.createElement('p');
                const parts = [];
                if (item.identifier) {
                    parts.push(`ID ${item.identifier}`);
                }
                if (item.nbident) {
                    parts.push(`NB ${item.nbident}`);
                }
                idLine.textContent = parts.join(' · ');
                row.appendChild(idLine);
            }

            if (item.statusDate) {
                const dateLine = document.createElement('p');
                dateLine.textContent = `Valid since: ${item.statusDate}`;
                row.appendChild(dateLine);
            }

            fragment.appendChild(row);
        });

        projectedList.appendChild(fragment);
        projectedStatus.textContent = `${projectedItems.length} projected building${projectedItems.length === 1 ? '' : 's'} found.`;
        lastProjectedRequestKey = requestKey;
    } catch (error) {
        projectedStatus.textContent = `Unable to load projected buildings: ${error.message}`;
        lastProjectedRequestKey = null;
        throw error;
    } finally {
        projectedFetchInFlight = false;
        delete projectedPanel.dataset.loading;
    }
}

function parseProjectedFeatures(xmlPayload) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlPayload, 'application/xml');
    const parserError = xmlDoc.querySelector('parsererror');
    if (parserError) {
        throw new Error('Invalid XML returned by Geoportal service.');
    }

    const features = Array.from(xmlDoc.getElementsByTagNameNS(GEO_NS, 'a111_avdm01_amtlverm_fla'));

    return features.map(feature => {
        const status = getNodeText(feature, 'a111_avdm01_projboden_fla_status');
        if (!status || status.toLowerCase() !== 'projektiert') {
            return null;
        }

        return {
            status,
            usage: getNodeText(feature, 'a111_avdm01_projboden_fla_gebhauptnutzung') || 'Unspecified usage',
            area: getNodeText(feature, 'a111_avdm01_projboden_fla_flaeche'),
            identifier: getNodeText(feature, 'a111_avdm01_projboden_fla_identifikator') || getNodeText(feature, 'id'),
            nbident: getNodeText(feature, 'a111_avdm01_projboden_fla_nbident'),
            statusDate: getNodeText(feature, 'a111_avdm01_projboden_fla_gueltigereintrag')
        };
    }).filter(Boolean);
}

function getNodeText(feature, localName) {
    const nodes = feature.getElementsByTagNameNS(GEO_NS, localName);
    if (!nodes || nodes.length === 0) {
        return null;
    }

    const textContent = nodes[0].textContent;
    return textContent ? textContent.trim() : null;
}

function formatArea(areaValue) {
    const numeric = Number.parseFloat(areaValue);
    if (!Number.isFinite(numeric)) {
        return areaValue;
    }
    return numeric.toLocaleString(undefined, { maximumFractionDigits: 1 });
}

function getProjectedAuthHeader() {
    return currentProjectedAuth();
}

function handleProjectedAuthButtonClick() {
    if (typeof window === 'undefined') {
        return;
    }

    const existing = currentProjectedAuth();
    const existingToken = existing ? existing.replace(/^basic\s+/i, '') : '';

    const message = 'Enter the Base64 credentials for the Geoportal WFS access.\n' +
        'Example: dXNlcjpwYXNz (the part after "Basic "). Leave blank to clear the stored token.';

    const userInput = window.prompt(message, existingToken);
    if (userInput === null) {
        return;
    }

    const trimmed = userInput.trim();
    if (trimmed.length === 0) {
        setProjectedAuth(null);
        if (projectedStatus) {
            projectedStatus.textContent = 'Credentials cleared. Re-open the menu to retry.';
        }
        updateProjectedAuthStatus();
        return;
    }

    let headerValue = trimmed;
    if (!/^basic\s+/i.test(headerValue)) {
        headerValue = `Basic ${headerValue}`;
    }

    setProjectedAuth(headerValue);
    updateProjectedAuthStatus();

    if (projectedPanel?.classList.contains('projected-open')) {
        loadProjectedBuildings(true).catch(error => console.error('Error refreshing projected buildings', error));
    }
}

function updateProjectedAuthStatus() {
    if (!projectedAuthStatus) {
        return;
    }

    const token = currentProjectedAuth();
    if (token) {
        projectedAuthStatus.textContent = 'Credentials stored and will be used for Geoportal requests.';
    } else {
        projectedAuthStatus.textContent = 'No credentials stored.';
    }
}

function setProjectedAuth(headerValue) {
    const trimmed = headerValue ? headerValue.trim() : '';

    if (trimmed.length > 0) {
        cachedProjectedAuth = trimmed;
        writeProjectedAuthToStorage(trimmed);
    } else {
        cachedProjectedAuth = null;
        writeProjectedAuthToStorage(null);
    }
}

function currentProjectedAuth() {
    if (cachedProjectedAuth && cachedProjectedAuth.length > 0) {
        return cachedProjectedAuth;
    }

    const stored = readProjectedAuthFromStorage();
    cachedProjectedAuth = stored && stored.length > 0 ? stored : null;
    return cachedProjectedAuth;
}

function restoreProjectedAuthFromStorage() {
    cachedProjectedAuth = readProjectedAuthFromStorage();
}

function readProjectedAuthFromStorage() {
    if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') {
        return null;
    }

    try {
        const stored = window.localStorage.getItem(PROJECTED_AUTH_STORAGE_KEY);
        if (stored && stored.trim().length > 0) {
            return stored.trim();
        }
    } catch (error) {
        console.warn('Unable to access localStorage for projected auth token.', error);
    }

    return null;
}

function writeProjectedAuthToStorage(value) {
    if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') {
        return;
    }

    try {
        if (value && value.trim().length > 0) {
            window.localStorage.setItem(PROJECTED_AUTH_STORAGE_KEY, value.trim());
        } else {
            window.localStorage.removeItem(PROJECTED_AUTH_STORAGE_KEY);
        }
    } catch (error) {
        console.warn('Unable to persist projected auth token.', error);
    }
}

