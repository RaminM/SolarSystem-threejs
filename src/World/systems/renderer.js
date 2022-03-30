import { WebGLRenderer } from '../../../vendor/three/build/three.module.js';

function createRenderer() {
    //make a new webgl renderer and activate AA (MSAA)
    const renderer = new WebGLRenderer({ antialias: true });

    // turn on the physically correct lighting model
    renderer.physicallyCorrectLights = true;
    
    return renderer;
}
export { createRenderer };