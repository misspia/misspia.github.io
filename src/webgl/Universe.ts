import { Clock, Vector3 } from "three";
import { layers } from "@constants";
import { SceneManager } from "./SceneManager";
import { Portal } from "./Portal";
import { Stars } from "./Stars";
import { EffectManager } from "./EffectManager";
import { GlitchManager } from "./GlitchManager";
import { LightManager } from "./LightManager";

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_postprocessing_unreal_bloom_selective.html
export class Universe extends SceneManager {
  clock: Clock;
  glitchInterval: number; // ms
  portal: Portal;
  stars: Stars;
  effects: EffectManager;
  glitch: GlitchManager;
  layerCamera: THREE.PerspectiveCamera;
  lights: LightManager;
  constructor(canvas: HTMLCanvasElement) {
    super(canvas, {});
    this.clock = new Clock(true);
    this.glitchInterval = 500;

    this.layerCamera = this.camera.clone();
    this.portal = new Portal();
    this.stars = new Stars();
    this.glitch = new GlitchManager();
    this.effects = new EffectManager(this);
    this.lights = new LightManager();
  }

  init() {
    this.camera.layers.enable(layers.DEFAULT);
    this.camera.layers.enable(layers.GLITCH);

    this.setClearColor(0x111111);
    this.setCameraPos(0, 0, 5);
    this.lookAt(new Vector3(0, 0, 0));

    this.layerCamera.position.set(0, 0, 5);
    this.layerCamera.lookAt(new Vector3(0, 0, 0));

    this.scene.add(this.portal.mesh);
    this.scene.add(this.stars.group);
    this.scene.add(this.lights.group);

    this.portal.layers.set(layers.GLITCH);
    this.stars.layers.set(layers.DEFAULT);
  }

  customResize(_width: number, height: number): void {
    this.stars.onResize(height);
  }

  dispose() {
    this.effects.dispose();
  }

  draw() {
    requestAnimationFrame(() => this.draw());
    this.camera.layers.set(layers.GLITCH);
    // @ts-ignore
    this.effects.glitchPass.enabled = true;
    this.effects.render();

    this.camera.layers.set(layers.DEFAULT);
    // @ts-ignore
    this.effects.glitchPass.enabled = false;
    this.effects.render();
  }

  // draw() {
  //   requestAnimationFrame(() => this.draw());
  //   this.camera.layers.set(layers.DEFAULT);
  //   this.effects.render();

  //   this.camera.layers.set(layers.GLITCH);
  //   this.effects.renderPass.renderToScreen = true;
  //   // @ts-ignore
  //   this.effects.glitchPass.enabled = false;
  //   this.effects.render();

  //   this.effects.renderPass.renderToScreen = false;
  //   // @ts-ignore
  //   this.effects.glitchPass.enabled = true;
  // }
}
