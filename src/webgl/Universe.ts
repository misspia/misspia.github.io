import { Clock, Vector3 } from "three";
import { SceneManager } from "./SceneManager";
import { EffectManager } from "./EffectManager";
import { LightManager } from "./LightManager";
import { PointerManager } from "./PointerManager";
import { Cards } from "./Cards";
import { Title } from "./Title";

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_postprocessing_unreal_bloom_selective.html
export class Universe extends SceneManager {
  clock: Clock;
  effects: EffectManager;
  lights: LightManager;
  pointer: PointerManager;
  cards: Cards;
  title: Title;
  constructor(canvas: HTMLCanvasElement) {
    super(canvas, {});
    this.clock = new Clock(true);

    this.effects = new EffectManager(this);
    this.lights = new LightManager();
    this.pointer = new PointerManager(this);
    this.cards = new Cards(this);
    this.title = new Title();
  }

  init() {
    this.addEventListeners();

    this.setClearColor(0xffffff);
    this.setCameraPos(0, 0, 10);
    this.lookAt(new Vector3(0, 0, 0));

    this.scene.add(this.lights.group);
    // this.scene.add(this.cards.group);
    this.scene.add(this.title.group);
  }

  addEventListeners() {
    this.canvas.addEventListener("pointermove", this.pointer.onPointerMove);
  }

  customResize(_width: number, height: number): void {}

  dispose() {
    this.effects.dispose();
  }

  draw() {
    requestAnimationFrame(() => this.draw());
    this.effects.render();

    this.effects.render();
  }
}
