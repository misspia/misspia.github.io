import * as THREE from "three";
import fragmentShader from "@webgl/shaders/ground.frag";
import vertexShader from "@webgl/shaders/ground.vert";
import { toRadians } from "@utils";

export class Ground {
  geometry: THREE.CircleGeometry;
  material: THREE.Material;
  group: THREE.Mesh;

  constructor() {
    this.geometry = new THREE.CircleGeometry(5, 50);
    this.material = new THREE.RawShaderMaterial({
      fragmentShader,
      vertexShader,
      transparent: true,
      side: THREE.DoubleSide,
    });
    this.group = new THREE.Mesh(this.geometry, this.material);
    this.group.rotateX(-toRadians(90));
    this.position.set(0, -1.5, 0);
  }

  get position() {
    return this.group.position;
  }

  get rotation() {
    return this.group.rotation;
  }

  update() {}
}
