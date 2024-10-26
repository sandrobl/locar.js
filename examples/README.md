# locar.js examples

This directory provides a series of examples for LocAR.js. 

You need to have built LocAR itself first and produced a tarball; please see [the main README](https://github.com/AR-js-org/locar.js).

It is recommended to use [Vite](https://vitejs.dev) in development mode to test them, and access them via the Vite dev server:

```
http://localhost:5173
```

This also works nicely if you are using port forwarding with the Chrome Dev Tools on a real Android device.

The examples are as follows:

1. [Hello World](01-helloworld) : Displays a red box just to the north of a fake GPS location. This can be tested on a desktop or laptop; the default view direction is North so the red box will be visible in front of you.

2. [GPS and Sensors](02-gps-and-sensors) : Requires a real mobile device with GPS and sensors (accelerometer, magnetometer). Obtains your real GPS location and then adds four coloured boxes a short distance in each direction:
    - North: red
    - South: yellow
    - West: blue (cyan)
    - East: green

These boxes will always be close to your *initial* location, so if you move, the boxes will disappear. This example is a good test of whether your accelerometer and magnetometer are calibrated correctly. If they are, this example will work as expected. Unfortunately some Android devices seem to have them miscalibrated resulting in incorrect North (see [this issue](https://github.com/mrdoob/three.js/pull/22654)). We plan to investigate the extent of this problem and to see if it is consistent for certain devices (e.g. does a specific device model always have North wrong by 80 degrees anticlockwise?) 

**IMPORTANT!** Examples 2 onwards may fail with permissions problems on iOS. We are currently lacking developers with iOS devices and would very much welcome input from owners of iDevices !
