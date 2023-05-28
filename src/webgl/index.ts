import { Universe } from "./Universe";

export class WebGLApp {
  universe: Universe | undefined;

  constructor() {
    this.universe = undefined;
  }
  setup(canvas: HTMLCanvasElement) {
    this.universe = new Universe(canvas);
  }

  resize(width: number, height: number) {
    this.universe?.resize(width, height);
  }

  unmount() {
    this.universe?.clearScene();
  }
  render() {
    this.universe?.render();
  }
}
