import * as THREE from "three";
import fontJson from "../fonts/Hachi Maru Pop_Regular.json";

import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { FontBase } from "./FontBase";
import { textures } from "@theme";

export class ToonFont extends FontBase {
  geometry: TextGeometry;
  material: THREE.Material;
  mesh: THREE.Mesh;
  constructor(text: string) {
    super();
    const fontLoader = new FontLoader();
    const font = fontLoader.parse(fontJson);
    this.geometry = new TextGeometry(text, {
      font,
      size: 1.5,
      height: 0.5,
      curveSegments: 8,
      bevelEnabled: true,
      bevelSegments: 8,
      bevelThickness: 0.2,
      bevelSize: 0.23,
    });
    const textureLoader = new THREE.TextureLoader();
    const gradientMap = textureLoader.load(textures.threeTone);
    this.material = new THREE.MeshToonMaterial({
      color: 0x1ecc92,
      emissive: 0x000000,
      gradientMap,
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.receiveShadow = true;
    this.group.add(this.mesh);
  }
  update() {}
}
