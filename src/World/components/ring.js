import {
    RingGeometry,
    Mesh,
    MeshBasicMaterial,
    MathUtils,
    DoubleSide,

} from '../../../vendor/three/build/three.module.js';

function createRing(radius) {
    const geometry = new RingGeometry(radius, radius + 0.1, 64);
    const material = new MeshBasicMaterial({ color: 'white' , side: DoubleSide});
    const ring = new Mesh(geometry, material);
    ring.rotation.x +=MathUtils.degToRad(90);
    return ring;

}

export { createRing }
