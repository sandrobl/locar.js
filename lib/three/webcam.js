import * as THREE from "three";
import EventEmitter from './event-emitter.js';

/** Class to setup the webcam. */
class Webcam extends EventEmitter {
  /**
   * Create a Webcam.
   * @param options {Object} - options to use for initialising the camera. 
   * Currently idealWidth and idealHeight properties are understood as well as 
   * This takes a THREE.VideoTexture as an argument which can be used to set 
   * the background of your three.js scene within a callback.
   * @param {string} videoElementSelector - selector to obtain the HTML video 
   * element to render the webcam feed. If a falsy value (e.g. null or 
   * undefined), a video element will be created.
   */
 constructor(options={}, videoElementSelector) {
    super();
    this.sceneWebcam = new THREE.Scene();
    let video;
    if (!videoElementSelector) {
      video = document.createElement("video");
      video.setAttribute("autoplay", true);
      video.setAttribute("playsinline", true);
      video.style.display = "none";
      document.body.appendChild(video);
    } else {
      video = document.querySelector(videoElementSelector);
    }
    this.texture = new THREE.VideoTexture(video);
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const constraints = {
        video: {
          width: { ideal: options.idealWidth || 1280 },
          height: { ideal: options.idealHeight || 720 },
          facingMode: "environment",
        },
      };
      navigator.mediaDevices.getUserMedia(constraints).then ( stream => {
        video.addEventListener('loadedmetadata', () => {
          video.setAttribute('width', video.videoWidth);
          video.setAttribute('height', video.videoHeight);
          video.play();
          /**
           * Webcam started event. 
           * @event Webcam#webcamstarted
           * @param {Object} event object containing 'texture' - the texture the webcam will stream to.
           */
          this.emit("webcamstarted", { texture: this.texture });
        });
        video.srcObject = stream;
      })
      .catch(e => {
       /**
        * Webcam error event. 
        * @event Webcam#webcamerror
        * @param {Object} event object with 'code' and 'message' fields. 
        */
        this.emit("webcamerror", {
            code: e.name, 
            message: e.message
        });
      })
    } else {
       /**
        * Webcam error event. 
        * @event Webcam#webcamerror
        * @param {Object} event object with 'code' and 'message' fields. 
        */
      this.emit("webcamerror", {
        code: "LOCAR_NO_MEDIA_DEVICES_API",
        message: "Media devices API not supported"
      });
    }
  }

  /**
   * Free up the memory associated with the webcam.
   * Should be called when your application closes.
   */
  dispose() {
    this.texture.dispose();
  }
}

export default Webcam;
