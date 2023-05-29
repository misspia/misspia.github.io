import { SceneManager } from "./SceneManager";
import { Portal } from "./Portal";
import { Stars } from "./Stars";

export class Universe extends SceneManager {
  portal: Portal;
  stars: Stars;
  constructor(canvas: HTMLCanvasElement) {
    super(canvas, {});
    this.portal = new Portal();
    this.stars = new Stars();
  }

  init() {
    this.setClearColor(0x111111);
    this.setCameraPos(0, 0, 5);
    this.lookAt(0, 0, 0);
    this.scene.add(this.portal.mesh);
    this.scene.add(this.stars.group);
  }

  customResize(width: number, height: number): void {
    this.stars.onResize();
  }
  draw() {
    this.renderer.render(this.scene, this.camera);

    this.portal.update();
    this.stars.update();

    requestAnimationFrame(() => this.draw());
  }
}
