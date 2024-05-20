import { Clock, Vector3 } from "three";
import { SceneManager } from "./SceneManager";
import { Leaves} from "@webgl/Leaves"

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_postprocessing_unreal_bloom_selective.html
export class Universe extends SceneManager {
  clock: Clock;
  leaves: Leaves
  constructor(canvas: HTMLCanvasElement) {
    super(canvas, {});
    this.clock = new Clock(true);

    this.leaves = new Leaves(this);
  }

  init() {
    this.setClearColor(0x111111);
  // this.setClearColor(0xffffff);
    this.setCameraPos(0, 0, 5);
    this.lookAt(new Vector3(0, 0, 0));

    this.scene.add(this.leaves.group)
  }

  customResize(_width: number, height: number): void {

  }

  dispose() {

  }

  draw() {
    this.renderer.render(this.scene, this.camera);
    
    this.leaves.update()

    requestAnimationFrame(() => this.draw());
  }
}
