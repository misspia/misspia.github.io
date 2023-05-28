import { SceneManager } from "./SceneManager";

export class Universe extends SceneManager {
  constructor(canvas: HTMLCanvasElement) {
    super(canvas, {});
  }

  init() {
    this.setClearColor(0x111111);
  }

  draw() {
    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame(() => this.draw());
  }
}
