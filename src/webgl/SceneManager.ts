import * as THREE from "three";

export type TSceneManagerOptions = {
  cameraNear?: number;
  cameraFar?: number;
  fog?: THREE.Fog;
};
export class SceneManager extends THREE.EventDispatcher {
  isInitiated: boolean;
  canvas: HTMLCanvasElement;
  renderer: THREE.WebGLRenderer;
  clock: THREE.Clock;
  mouse: THREE.Vector2;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  // controls: OrbitControls;

  constructor(
    canvas: HTMLCanvasElement,
    { cameraFar = 1000, cameraNear = 0.1, fog }: TSceneManagerOptions,
  ) {
    super();
    this.isInitiated = false;

    this.clock = new THREE.Clock();

    this.canvas = canvas;
    this.mouse = new THREE.Vector2();

    this.scene = new THREE.Scene();
    if (fog) {
      this.scene.fog = fog;
    }
    const aspectRatio = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(
      75,
      aspectRatio,
      cameraNear,
      cameraFar,
    );
    this.camera.position.set(0, 1, -3);
    this.camera.lookAt(new THREE.Vector3());

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: false,
      stencil: false,
    });

    // this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    ////////////////////////////////////////////////////////
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    ////////////////////////////////////////////////////////

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0xffdddd);
    // const dpr = Math.min(1.5, window.devicePixelRatio);
    this.renderer.setPixelRatio(window.devicePixelRatio);
  }

  clear() {}
  init() {}
  draw() {}
  render() {
    this.init();
    this.draw();

    this.isInitiated = true;
  }

  clearScene() {
    while (this.scene.children.length > 0) {
      this.scene.remove(this.scene.children[0]);
    }
  }

  createMouseListener() {
    this.mouse = new THREE.Vector2();
    this.canvas.addEventListener("mousemove", (e) => {
      this.mouse.x = (e.clientX / this.canvas.width) * 2 - 1;
      this.mouse.y = -(e.clientY / this.canvas.height) * 2 + 1;
    });
  }

  resize(width: number, height: number) {
    this.canvas.width = width;
    this.canvas.height = height;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
    this.customResize(width, height);
  }

  /**
   * Sketch specific resize operations
   */
  customResize(_width: number, _height: number) {}

  setCameraPos(x: number, y: number, z: number) {
    this.camera.position.set(x, y, z);
  }
  lookAt(vector: THREE.Vector3) {
    this.camera.lookAt(vector);
  }
  setClearColor(color: THREE.ColorRepresentation) {
    this.renderer.setClearColor(color);
  }
}
