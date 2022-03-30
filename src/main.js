import { World } from './World/World.js';

//Create the main function
function main() {
  //Setting up the world
  //Refrence to the container element
  const container = document.querySelector('#scene-container');
  //Create instance of the world app
  const world = new World(container);
  //Render the scene
  world.start();
}
//call the main function to start the app
main();