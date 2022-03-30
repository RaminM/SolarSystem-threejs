//Intellisence
/// <reference path='../../vendor/three/build/three.module.js' />
//
import { createCamera } from './components/camera.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';
import { createControls } from './systems/controls.js';
import { createPlanet } from './components/planet.js';
import {createRing} from './components/ring.js';
 
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';
import {createGUI} from './systems/gui.js';

//Making the variables module scpoed
//Warning: wil not work with two instances of the world since variables a shared between instances
let camera;
let renderer;
let scene;
let loop;

//World module: Create the world app and render the scene
class World {

    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        container.append(renderer.domElement);
        loop = new Loop(camera, scene, renderer);
        //
        const controls = createControls(camera, renderer.domElement);
        //add sun
        const sun = createPlanet("sun", 2, 0, 2507, 0);
        loop.updatables.push(sun);
        scene.add(sun);
        //add planets
        //mercury
        const mercury = createPlanet("mercury", 0.4, 3.9, 5883, 20.7);
        const mring = createRing(3.9)
        loop.updatables.push(mercury);
        scene.add(mercury,mring);
        //venus
        const venus = createPlanet("venus", 0.9, 7.2, 24476, 8.11);
        const vring = createRing(7.2)
        loop.updatables.push(venus);
        scene.add(venus,vring);
        //earth
        const earth = createPlanet("earth", 1, 10, 100, 5);
        const ering = createRing(10)
        loop.updatables.push(earth);
        scene.add(earth,ering);
        //mars
        const mars = createPlanet("mars", 0.5, 15.2, 103, 2.66);
        const maring = createRing(15.2)
        loop.updatables.push(mars);
        scene.add(mars,maring);
        //jupiter
        const jupiter = createPlanet("jupiter", 11, 52, 41, 0.42);
        const jring = createRing(52)
        loop.updatables.push(jupiter);
        scene.add(jupiter,jring);
        //saturn
        const saturn = createPlanet("saturn", 9.1, 95.4, 44, 0.17);
        const sring = createRing(95.4)
        loop.updatables.push(saturn);
        scene.add(saturn,sring);
        //uranus
        const uranus = createPlanet("uranus", 4, 191.8, 72, 0.06);
        const uring = createRing(191.8)
        loop.updatables.push(uranus);
        scene.add(uranus,uring);
        //neptune
        const neptune = createPlanet("neptune", 3.9, 300.6, 67, 0.03);
        const nring = createRing(300.6)
        loop.updatables.push(neptune);
        scene.add(neptune,nring);


        //add lights
        const { ambientLight, mainLight } = createLights();
        //add cube to the updatables in loop so it can tick
        loop.updatables.push(controls);
        scene.add(mainLight, ambientLight);

        createGUI();
        const resizer = new Resizer(container, camera, renderer);

    }

    render() {
        //Draw a single frame
        renderer.render(scene, camera);
    }
    start() {
        loop.start();
    }
    stop() {
        loop.stop();
    }


}
export { World };