import * as THREE from "three";
import {
  TextGeometry,
  TextGeometryParameters,
} from "three/addons/geometries/TextGeometry.js";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import fontJson from "three/examples/fonts/droid/droid_sans_regular.typeface.json";

/**
 * https://www.maya-ndljk.com/blog/threejs-basic-toon-shader
 * https://threejs.org/docs/index.html?q=material#api/en/materials/MeshToonMaterial
 * https://discourse.threejs.org/t/how-to-draw-texts-vertically/11589/2
 */

interface ITileConfig {
  width: number;
  height: number;
  text: string;
}
export class Tile {
  baseGeometry: THREE.PlaneGeometry;
  baseMaterial: THREE.Material;
  baseMesh: THREE.Mesh;

  textGeometry: TextGeometry;
  textMaterial: THREE.Material;
  textMesh: THREE.Mesh;
  group: THREE.Group;
  constructor({ width, height, text }: ITileConfig) {
    this.baseGeometry = new THREE.PlaneGeometry(width, height);
    this.baseMaterial = new THREE.MeshToonMaterial({
      color: 0x049ef4,
      depthTest: true,
      depthWrite: true,
      alphaTest: 0,
      visible: true,
      side: THREE.DoubleSide,
      map: undefined,
      gradientMap: undefined,
      alphaMap: undefined,
    });
    this.baseMesh = new THREE.Mesh(this.baseGeometry, this.baseMaterial);

    const loader = new FontLoader();
    const font = loader.parse(fontJson);
    this.textGeometry = new TextGeometry(text, {
      font,
      size: 80,
      height: 5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 10,
      bevelSize: 8,
      bevelOffset: 0,
      bevelSegments: 5,
    });
    this.textMaterial = new THREE.MeshBasicMaterial({});
    this.textMesh = new THREE.Mesh(this.textGeometry, this.textMaterial);

    this.group = new THREE.Group();
    this.group.add(this.baseMesh);
    this.group.add(this.textMesh);
  }

  addText(text: string, font: TextGeometryParameters["font"]) {
    this.textGeometry = new TextGeometry(text, {
      font,
      size: 80,
      height: 5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 10,
      bevelSize: 8,
      bevelOffset: 0,
      bevelSegments: 5,
    });
    this.textMesh = new THREE.Mesh(this.textGeometry, this.textMaterial);
    this.group.add(this.textMesh);
  }

  update() {}
}
