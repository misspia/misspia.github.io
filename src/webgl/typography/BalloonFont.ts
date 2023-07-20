import * as THREE from "three";
// import fontJson from "three/examples/fonts/droid/droid_sans_regular.typeface.json";
import fontJson from "../fonts/Varela Round_Regular.json";
// import fontJson from "../fonts/Hachi Maru Pop_Regular.json";

import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { FontBase } from "./FontBase";

/**
 * https://www.pinterest.ca/pin/516295544796828154/
 * https://www.pinterest.ca/pin/516295544796828150/
 * https://www.pinterest.ca/pin/516295544796828151/
 * https://www.pinterest.ca/pin/516295544796828155/
 * https://www.pinterest.ca/pin/386465211783651893/
 *
 */
export class BalloonFont extends FontBase {
  geometry: TextGeometry;
  material: THREE.Material;
  mesh: THREE.Mesh;
  constructor(text: string) {
    super();
    const loader = new FontLoader();
    const font = loader.parse(fontJson);
    this.geometry = new TextGeometry(text, {
      font,
      size: 1.5,
      height: 0.8,
      curveSegments: 8,
      bevelEnabled: true,
      bevelSegments: 8,
      bevelThickness: 0.2,
      bevelSize: 0.15,
    });
    this.material = new THREE.MeshPhysicalMaterial({
      color: 0xffd500,
      emissive: 0x96571d,
      roughness: 0.593,
      metalness: 0.084,
      reflectivity: 0.74599,
      clearcoat: 0,
      clearcoatRoughness: 0.45,
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.receiveShadow = true;
    this.group.add(this.mesh);
  }
  update() {}
}
