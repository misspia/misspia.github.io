import * as THREE from "three";
import fragmentShader from "./shaders/portal.frag?raw";
import vertexShader from "./shaders/portal.vert?raw";
import * as Assets from "@assets";

export class Portal {
  mesh: THREE.Mesh;
  geometry: THREE.PlaneGeometry;
  material: THREE.ShaderMaterial;
  box: THREE.Box3;
  constructor() {
    this.geometry = new THREE.PlaneGeometry(2, 3.5);

    const loader = new THREE.TextureLoader();
    this.material = new THREE.ShaderMaterial({
      fragmentShader,
      vertexShader,
      uniforms: {
        u_time: { value: 0 },
        u_amp: { value: 3.5 },
        u_noise: { value: new THREE.Vector3(1, 2, 2) },
        u_texture_a: { value: loader.load(Assets.PortalTexture1) },
        u_texture_b: { value: loader.load(Assets.PortalTexture2) },
        u_mix_value: { value: 0.5 },
      },
      transparent: true,
      side: THREE.DoubleSide,
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);

    this.mesh.geometry.computeBoundingBox();
    this.box = new THREE.Box3();

    if (this.mesh.geometry.boundingBox) {
      this.box
        .copy(this.mesh.geometry.boundingBox)
        .applyMatrix4(this.mesh.matrixWorld);
    }
  }
  get height() {
    return this.box.max.y - this.box.min.y;
  }
  get width() {
    return this.box.max.x - this.box.min.x;
  }
  enableLayer(layerNumber: number) {
    this.mesh.layers.enable(layerNumber);
  }
  update() {}
}
