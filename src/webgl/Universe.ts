import { Clock, Vector3 } from "three";
import { LAYERS } from "@constants";
import { SceneManager } from "./SceneManager";
import { Portal } from "./Portal";
import { Stars } from "./Stars";
import { EffectManager } from "@webgl/EffectManager";
import { GlitchManager } from "./GlitchManager";
import { Leaves} from "@webgl/Leaves"

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_postprocessing_unreal_bloom_selective.html
export class Universe extends SceneManager {
  clock: Clock;
  glitchInterval: number; // ms
  portal: Portal;
  stars: Stars;
  effects: EffectManager;
  glitch: GlitchManager;
  leaves: Leaves
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
    this.leaves = new Leaves(this);
  }

  init() {
    // this.setClearColor(0x111111);
  this.setClearColor(0xffffff);
    this.setCameraPos(0, 0, 5);
    this.lookAt(new Vector3(0, 0, 0));

    this.scene.add(this.leaves.group)
    // this.layerCamera.position.set(0, 0, 5);
    // this.layerCamera.lookAt(new Vector3(0, 0, 0));

    
    // this.scene.add(this.portal.mesh);
    // this.scene.add(this.stars.group);

    // this.portal.layers.set(LAYERS.glitch);
    // this.stars.enableLayer(LAYERS.default);

    // this.camera.layers.enable(LAYERS.default);
    // this.camera.layers.enable(LAYERS.glitch);

    // this.layerCamera.layers.set(LAYERS.glitch);
    // this.glitch.add(this.portal.mesh.clone());
  }

  customResize(_width: number, height: number): void {
    this.stars.onResize(height);
  }

  dispose() {
    this.effects.dispose();
  }

  // https://discourse.threejs.org/t/solved-effectcomposer-layers/3158/4
  draw() {
    this.renderer.render(this.scene, this.camera);
    
    this.leaves.update()

    requestAnimationFrame(() => this.draw());
  }
}
