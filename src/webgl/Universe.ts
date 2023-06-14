import { Clock, Vector3 } from "three";
import { layers } from "@constants";
import { SceneManager } from "./SceneManager";
import { Portal } from "./Portal";
import { Stars } from "./Stars";
import { EffectManager } from "./EffectManager";
import { GlitchManager } from "./GlitchManager";

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_postprocessing_unreal_bloom_selective.html
export class Universe extends SceneManager {
  clock: Clock;
  glitchInterval: number; // ms
  portal: Portal;
  stars: Stars;
  effects: EffectManager;
  glitch: GlitchManager;
  layerCamera: THREE.PerspectiveCamera;
  constructor(canvas: HTMLCanvasElement) {
    super(canvas, {});
    this.clock = new Clock(true);
    this.glitchInterval = 500;

    this.layerCamera = this.camera.clone();
    this.portal = new Portal();
    this.stars = new Stars();
    this.glitch = new GlitchManager();
    this.effects = new EffectManager(this);
  }

  init() {
    this.setClearColor(0x111111);
    this.setCameraPos(0, 0, 5);
    this.lookAt(new Vector3(0, 0, 0));

    this.layerCamera.position.set(0, 0, 5);
    this.layerCamera.lookAt(new Vector3(0, 0, 0));

    this.scene.add(this.portal.mesh);
    this.scene.add(this.stars.group);

    this.portal.layers.set(layers.GLITCH);
    this.stars.enableLayer(layers.DEFAULT);

    this.camera.layers.enable(layers.DEFAULT);
    this.camera.layers.enable(layers.GLITCH);

    this.layerCamera.layers.set(layers.GLITCH);
    this.glitch.add(this.portal.mesh.clone());
  }

  customResize(_width: number, height: number): void {
    this.stars.onResize(height);
  }

  dispose() {
    this.effects.dispose();
  }

  // https://discourse.threejs.org/t/solved-effectcomposer-layers/3158/4
  draw() {
    // Render the glitch scene to the render target with the glitch effect
    // this.effects.glitchPass.enabled = true;
    this.effects.render();

    // Render the main scene
    // this.glitchPass.enabled = false;
    this.renderer.clearDepth(); // Ensure that the normal scene renders on top of the glitch scene
    this.renderer.render(this.scene, this.camera);

    // Update and render post-processing effects
    this.effects.update();
    this.effects.render();

    requestAnimationFrame(() => this.draw());
  }

  // draw() {
  //   this.clock.getElapsedTime();
  //   this.effects.render();

  //   this.effects.update();
  //   this.portal.update();
  //   this.stars.update();

  //   requestAnimationFrame(() => this.draw());
  // }
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
