import {
    Color,
    Scene,
    TextureLoader,
} from '../../../vendor/three/build/three.module.js';

function createScene() {
    const scene = new Scene();

    //create a texture loader
    const textureLoader = new TextureLoader();
    //Load a texture
    const texture = textureLoader.load(
        './assets/textures/sky.jpg'
    );
    scene.background = texture;

    return scene;
}

export { createScene };