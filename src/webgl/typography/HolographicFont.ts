import * as THREE from "three";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { FontBase } from "./FontBase";
/**
 * https://www.pinterest.ca/pin/516295544796813154/
 * https://www.pinterest.ca/pin/795166877976170826/
 * https://codepen.io/tr13ze/pen/pbjWwg
 */
export class HolographicFont extends FontBase {
  geometry: TextGeometry;
  material: THREE.Material;
  group: THREE.Mesh;
  constructor(text: string) {
    super();
    this.geometry = new TextGeometry(text, {});
    this.material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    this.group = new THREE.Mesh(this.geometry, this.material);
    this.group.receiveShadow = true;
  }
  update() {}
}
