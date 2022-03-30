import {
    DirectionalLight,
    AmbientLight,
    HemisphereLight,
    PointLight,
} from '../../../vendor/three/build/three.module.js';

// function createLight() {
//     //Create a directional light with color and intensity. default location 0,0,0 anf shines toward 0,0,0
//     const light = new DirectionalLight('white', 8);

//     //light source location
//     light.position.set(10, 10, 10);
//     return light
// }
function createLights() {
    //The ambient light in all direction intensity better be lower than direct light
    const ambientLight = new AmbientLight('white', 4);
    //Directional light 
    const mainLight = new PointLight('yellow', 6);
    //
    // const ambientLight = new HemisphereLight(
    //     'white', // bright sky color
    //     'darkslategrey', // dim ground color
    //     5, // intensity
    //   );
    return { ambientLight, mainLight };
  }
export { createLights };