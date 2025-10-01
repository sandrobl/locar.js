// Install first in Node: npm install proj4 node-fetch
const proj4 = require("proj4");
const fetch = require("node-fetch");

// Define projections
proj4.defs("EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs");
proj4.defs("EPSG:2056", "+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 " +
  "+k_0=1 +x_0=2600000 +y_0=1200000 +ellps=bessel " +
  "+towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs");

// Example GPS coordinates (WGS84)
let lat = 47.3769;  // latitude
let lon = 8.5417;  // longitude

// Buffer in meters
let buffer = 50;

// Convert from WGS84 to LV95 (EPSG:2056)
let [x, y] = proj4("EPSG:4326", "EPSG:2056", [lon, lat]);

// Build bounding box
let xmin = x - buffer;
let ymin = y - buffer;
let xmax = x + buffer;
let ymax = y + buffer;

// Build WFS request URL
let wfsUrl = `https://www.geoportal.ch/services/wfs?SERVICE=WFS&REQUEST=GetFeature&VERSION=2.0.0` +
             `&TYPENAMES=geoportal:a111_avdm01_amtlverm_fla` +
             `&COUNT=1000000&SRSNAME=urn:ogc:def:crs:EPSG::2056` +
             `&BBOX=${xmin},${ymin},${xmax},${ymax},urn:ogc:def:crs:EPSG::2056`;

// Fetch with headers
(async () => {
  try {
    const response = await fetch(wfsUrl, {
      headers: {
        "Authorization": "Basic [[ADD YOUR BASE64 ENCODED CREDENTIALS HERE]]",
        "User-Agent": "Mozilla/5.0 QGIS/34403/Windows 10 Version 2009"
      }
    });

    if (!response.ok) {
      throw new Error(`Server returned ${response.status}`);
    }

    const data = await response.text(); // can also use .json() if server supports GeoJSON
    console.log("WFS Response:", data);

  } catch (err) {
    console.error("Error fetching WFS:", err);
  }
})();