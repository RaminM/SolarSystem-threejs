import {
    SphereBufferGeometry,
    Mesh,
    MeshStandardMaterial,
    MathUtils,
    TextureLoader,
    Object3D,
} from '../../../vendor/three/build/three.module.js';
function createMaterial(name) {
    //create a texture loader
    const textureLoader = new TextureLoader();
    //Load a texture
    const texture = textureLoader.load(
        './assets/textures/' + name + '.jpg'
    );
    //Create a standard material
    const material = new MeshStandardMaterial({
        map: texture,
    });

    return material;
}
function createPlanet(name, radius, distance, rotSpeed, orbSpeed) {

    //Create geometry
    const geometry = new SphereBufferGeometry(radius, 32, 32);
    //Create default white basic material
    const material = createMaterial(name);
    //create the mesh
    const sphere = new Mesh(geometry, material);
    //set starting location
    sphere.position.set(distance, 0, 0)
    //
    //Simulation speed
    let simSpeed = 10;
    //set orbit rate
    const orbitSpeed = MathUtils.degToRad(orbSpeed);
    //Set a fixed rotation rate 
    const rotationSpeed = MathUtils.degToRad(rotSpeed);
    //Make a pivot
    const pivot = new Object3D();
    pivot.add(sphere);
    //This method will be called once per frame
    pivot.tick = (delta) => {
        //orbit
        pivot.rotation.y += orbitSpeed * delta * simSpeed;

    };
    sphere.tick = (delta) => {
        //rotation
        sphere.rotation.y += rotationSpeed * delta * simSpeed;

    };
    return pivot;
}

export { createPlanet };