import * as THREE from "three";

export interface FontBase {
  group: THREE.Object3D;
  update(): void;
}
