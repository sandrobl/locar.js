import * as THREE from 'three';
import * as LocAR from 'locar';

// === Example configuration ==================================================
// Dedicated point-of-interest used in this scenario. Only this location will
// be visualised so the behaviour is predictable while testing.
const POI_COORDINATES = Object.freeze({
    latitude: 47.41047675920058,
    longitude: 9.332869851461123
});

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

    if (!poiPlaced) {
        locar.add(createPoiMarker(), POI_COORDINATES.longitude, POI_COORDINATES.latitude);
        poiPlaced = true;
    }
});

// Start retrieving live GPS data immediately.
locar.startGps();

// === Testing helpers ========================================================
const setFakeButton = document.getElementById('setFakeLoc');
const resumeRealGpsButton = document.getElementById('resumeRealGps');

setFakeButton.addEventListener('click', () => {
    const fakeLat = parseFloat(document.getElementById('fakeLat').value);
    const fakeLon = parseFloat(document.getElementById('fakeLon').value);

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
    locar.startGps();
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
    const material = new THREE.MeshBasicMaterial({ color: POI_COLOUR, opacity: 0.85, transparent: true });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = 'Example POI';
    return mesh;
}

