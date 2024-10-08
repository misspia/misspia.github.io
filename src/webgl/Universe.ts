import { Clock, Vector3 } from "three";
import { SceneManager } from "./SceneManager";
import { Petals } from "@webgl/Petals";
import { Flowers } from "@webgl/Flowers";
import { Grass } from "@webgl/Grass";
import { Sky } from "@webgl/Sky";
import { Ground } from "@webgl/Ground";
import { Butterfly } from "@webgl/Butterfly";
import { CameraManager } from "@webgl/CameraManager";

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_postprocessing_unreal_bloom_selective.html
export class Universe extends SceneManager {
  clock: Clock;
  petals: Petals;
  flowers: Flowers;
  sky: Sky;
  grass: Grass;
  ground: Ground;
  butterfly: Butterfly;
  cameraManager: CameraManager;
  constructor(canvas: HTMLCanvasElement) {
    super(canvas, {});
    this.clock = new Clock(true);

    this.flowers = new Flowers();
    this.ground = new Ground();
    this.sky = new Sky();
    this.petals = new Petals();
    this.butterfly = new Butterfly(this);
    this.grass = new Grass(this);
    this.cameraManager = new CameraManager(this);
  }

  init() {
    this.setClearColor(0xeeeea1);
    this.setCameraPos(0, 0, 4);
    this.lookAt(new Vector3(0, 0, 0));

    // this.scene.add(this.flowers.group);
    this.scene.add(this.butterfly.group);
    this.scene.add(this.petals.group);
    this.scene.add(this.sky.group);
    this.scene.add(this.grass.group);
    this.scene.add(this.ground.group);

    this.sky.position.set(0, 0, -3.5);
    this.grass.position.set(0, -1.2, 0);
    this.ground.position.set(0, -1.2, 0);

    // Events
    document.addEventListener(
      "mousemove",
      this.cameraManager.onMouseMove,
      false,
    );
  }

  dispose() {}

  draw() {
    this.renderer.render(this.scene, this.camera);

    this.petals.update();
    this.butterfly.update();
    this.flowers.update();
    this.sky.update();
    this.grass.update();
    this.ground.update();
    this.cameraManager.update();

    requestAnimationFrame(() => this.draw());
  }
}
