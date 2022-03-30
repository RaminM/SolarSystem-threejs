import { Clock } from '../../../vendor/three/build/three.module.js';

const clock = new Clock();

class Loop {
    constructor(camera, scene, renderer) {
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;
        this.updatables = [];
    }
    start() { 
        this.renderer.setAnimationLoop(()=>{
            this.tick();
            //render a frame
            this.renderer.render(this.scene,this.camera);
        });
    }

    stop() { 
        this.renderer.setAnimationLoop(null);
    }
    tick(){
        //call getDelta once per frame. to measure the time between frames
        const delta = clock.getDelta();
        //Update animation
        for(const object of this.updatables){
            object.tick(delta);
        }
    }
}

export { Loop }