import * as THREE from "three";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { FontBase } from "./FontBase";

// https://www.pinterest.ca/pin/516295544796828149/
export class FurryFont extends FontBase {
  geometry: TextGeometry;
  material: THREE.Material;
  mesh: THREE.Mesh;
  constructor(text: string) {
    super();
    this.geometry = new TextGeometry(text, {});
    this.material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.receiveShadow = true;
  }
  update() {}
}
