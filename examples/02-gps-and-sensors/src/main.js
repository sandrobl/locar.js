import * as THREE from 'three';
import * as LocAR from 'locar';

// === Example configuration ==================================================
// Dedicated point-of-interest used in this scenario. Only this location will
// be visualised so the behaviour is predictable while testing.
const INITIAL_POI_COORDINATES = {
    latitude: 47.41047675920058,
    longitude: 9.332869851461123
};

// Amount of movement (in metres) applied every time a direction button is pressed.
const MOVEMENT_STEP_METERS = 5;

// Friendly colour to make the POI stand out against the camera feed.
const POI_COLOUR = 0xff3366;

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
    if (firstLocation) {
        alert(`Got the initial location: longitude ${ev.position.coords.longitude}, latitude ${ev.position.coords.latitude}`);
        firstLocation = false;
    }

    updateDeviceLabel(ev.position.coords.latitude, ev.position.coords.longitude);

    if (!poiPlaced) {
        poiMesh = createPoiMarker();
        locar.add(poiMesh, poiState.longitude, poiState.latitude);
        poiPlaced = true;
        syncPoiInputs();
    } else {
        updatePoiPosition();
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
const deviceCoordsLabel = document.getElementById('deviceCoords');
const poiCoordsLabel = document.getElementById('poiCoords');

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
    const material = new THREE.MeshBasicMaterial({ color: POI_COLOUR, opacity: 0.85, transparent: true });
    const mesh = new THREE.Mesh(geometry, material);
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
    poiCoordsLabel.textContent = `${poiState.latitude.toFixed(6)}°, ${poiState.longitude.toFixed(6)}°`;
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
    }
}

