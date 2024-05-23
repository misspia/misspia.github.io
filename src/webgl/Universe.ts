import { Clock, Vector3 } from "three";
import { SceneManager } from "./SceneManager";
import { Lights } from "@webgl/Lights";
import { Leaves } from "@webgl/Leaves";
import { Petals } from "@webgl/Petals";
import { Blocks } from "@webgl/Blocks";

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_postprocessing_unreal_bloom_selective.html
export class Universe extends SceneManager {
  clock: Clock;
  lights: Lights;
  leaves: Leaves;
  petals: Petals;
  blocks: Blocks;
  constructor(canvas: HTMLCanvasElement) {
    super(canvas, {});
    this.clock = new Clock(true);

    this.lights = new Lights();
    this.leaves = new Leaves(this);
    this.petals = new Petals(this);
    this.blocks = new Blocks(this);
  }

  init() {
    this.setClearColor(0x111111);
    this.setCameraPos(0, 0, 5);
    this.lookAt(new Vector3(0, 0, 0));

    this.scene.add(this.lights.group);
    this.scene.add(this.leaves.group);
    this.scene.add(this.petals.group);
    this.scene.add(this.blocks.group);
  }

  customResize(_width: number, height: number): void {}

  dispose() {}

  draw() {
    this.renderer.render(this.scene, this.camera);

    this.leaves.update();
    this.petals.update();
    this.blocks.update();

    requestAnimationFrame(() => this.draw());
  }
}
