import { Clock, Vector3 } from "three";
import { SceneManager } from "./SceneManager";
import { Lights } from "@webgl/Lights";
import { Leaves } from "@webgl/Leaves";
import { Petals } from "@webgl/Petals";
import { Blocks } from "@webgl/Blocks";
import { Flowers } from "@webgl/Flowers";

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_postprocessing_unreal_bloom_selective.html
// grass:
// https://codepen.io/al-ro/pen/GRJzYQK?editors=1010
export class Universe extends SceneManager {
  clock: Clock;
  lights: Lights;
  leaves: Leaves;
  petals: Petals;
  blocks: Blocks;
  flowers: Flowers;
  constructor(canvas: HTMLCanvasElement) {
    super(canvas, {});
    this.clock = new Clock(true);

    this.lights = new Lights();
    this.leaves = new Leaves(this);
    this.petals = new Petals(this);
    this.blocks = new Blocks(this);
    this.flowers = new Flowers();
  }

  init() {
    this.setClearColor(0x111111);
    this.setCameraPos(0, 0, 5);
    this.lookAt(new Vector3(0, 0, 0));

    this.scene.add(this.lights.group);
    this.scene.add(this.leaves.group);
    this.scene.add(this.petals.group);
    this.scene.add(this.blocks.group);
    this.scene.add(this.flowers.group);
  }

  customResize(_width: number, height: number): void {}

  dispose() {}

  draw() {
    this.renderer.render(this.scene, this.camera);

    this.leaves.update();
    this.petals.update();
    this.blocks.update();
    this.flowers.update();

    requestAnimationFrame(() => this.draw());
  }
}
