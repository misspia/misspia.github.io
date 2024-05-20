import { Clock, Vector3 } from "three";
import { SceneManager } from "./SceneManager";
import { Leaves} from "@webgl/Leaves"
import { Petals } from "@webgl/Petals";

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_postprocessing_unreal_bloom_selective.html
export class Universe extends SceneManager {
  clock: Clock;
  leaves: Leaves
  petals: Petals
  constructor(canvas: HTMLCanvasElement) {
    super(canvas, {});
    this.clock = new Clock(true);

    this.leaves = new Leaves(this);
    this.petals = new Petals(this);
  }

  init() {
    this.setClearColor(0x111111);
  // this.setClearColor(0xffffff);
    this.setCameraPos(0, 0, 5);
    this.lookAt(new Vector3(0, 0, 0));

    this.scene.add(this.leaves.group)
    this.scene.add(this.petals.group)
  }

  customResize(_width: number, height: number): void {

  }

  dispose() {

  }

  draw() {
    this.renderer.render(this.scene, this.camera);
    
    this.leaves.update()
    this.petals.update()

    requestAnimationFrame(() => this.draw());
  }
}
