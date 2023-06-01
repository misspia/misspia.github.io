import { Clock } from "three";
import { SceneManager } from "./SceneManager";
import { Portal } from "./Portal";
import { Stars } from "./Stars";
import { EffectManager } from "./EffectManager";
import { layers } from "@constants";

export class Universe extends SceneManager {
  portal: Portal;
  stars: Stars;
  effects: EffectManager;
  clock: Clock;
  glitchInterval: number; // ms
  constructor(canvas: HTMLCanvasElement) {
    super(canvas, {});
    this.portal = new Portal();
    this.stars = new Stars();
    this.effects = new EffectManager(this);
    this.clock = new Clock(true);
    this.glitchInterval = 500;
  }

  init() {
    this.setClearColor(0x111111);
    this.setCameraPos(0, 0, 5);
    this.lookAt(0, 0, 0);
    this.scene.add(this.portal.mesh);
    this.scene.add(this.stars.group);

    this.portal.enableLayer(layers.GLITCH);
    this.stars.enableLayer(layers.DEFAULT);

    this.scene.layers.enable(layers.GLITCH);
  }

  customResize(_width: number, height: number): void {
    this.stars.onResize(height);
  }

  dispose() {
    this.effects.dispose();
  }

  draw() {
    this.effects.render();

    this.portal.update();
    this.stars.update();

    requestAnimationFrame(() => this.draw());
  }
  // draw() {
  //   this.renderer.autoClear = true;
  //   this.renderer.clear();

  //   this.camera.layers.set(layers.GLITCH);
  //   this.effects.render();

  //   this.renderer.clearDepth();
  //   this.camera.layers.set(layers.DEFAULT);
  //   this.renderer.render(this.scene, this.camera);

  //   this.portal.update();
  //   this.stars.update();

  //   requestAnimationFrame(() => this.draw());
  // }
}
