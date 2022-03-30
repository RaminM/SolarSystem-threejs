import { PerspectiveCamera } from '../../../vendor/three/build/three.module.js';

function createCamera() {
    const camera = new PerspectiveCamera(
        35, //FOV
        1, // Asperct ratio
        0.1, // Near clipping plane
        10000, // Far clipping plane
    );

    //Move camera back
    camera.position.set(100, 30, 100);

    return camera;
}
export { createCamera };