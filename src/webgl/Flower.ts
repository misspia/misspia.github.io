import * as THREE from "three";
import { randomFloatBetween, remap } from "@utils";

const MIN_X_POS = -3;
const MAX_X_POS = 3;
const MIN_Z_POS = 0;
const MAX_Z_POS = 5;

const PETAL_DIST_FROM_ORIGIN = 0.5;

const MIN_SIZE = 1;
const MAX_SIZE = 10;

// https://x.com/kchplr/status/1624137747039457284
export class Flower {
  origin: THREE.Vector3;
  positions: number[];
  rotations: number[];
  sizes: number[];


  constructor() {
    this.origin = new THREE.Vector3(
      randomFloatBetween(MIN_X_POS, MAX_X_POS),
      0,
      randomFloatBetween(MIN_Z_POS, MAX_Z_POS),
    );
    this.positions = [];
    this.rotations = [];
    this.sizes = [];
    this.createFlowerPetals();
  }

  createFlowerPetals() {
    this.positions.push(
      this.origin.x + PETAL_DIST_FROM_ORIGIN,
      this.origin.y,
      this.origin.z,
      this.origin.x + PETAL_DIST_FROM_ORIGIN,
      this.origin.y,
      this.origin.z + PETAL_DIST_FROM_ORIGIN,
      this.origin.x - PETAL_DIST_FROM_ORIGIN,
      this.origin.y,
      this.origin.z + PETAL_DIST_FROM_ORIGIN,
      this.origin.x - PETAL_DIST_FROM_ORIGIN,
      this.origin.y,
      this.origin.z - PETAL_DIST_FROM_ORIGIN,
      this.origin.x - PETAL_DIST_FROM_ORIGIN,
      this.origin.y,
      this.origin.z,
      this.origin.x,
      this.origin.y,
      this.origin.z + PETAL_DIST_FROM_ORIGIN,
      this.origin.x,
      this.origin.y,
      this.origin.z - PETAL_DIST_FROM_ORIGIN,
    );
    const numPetals = this.positions.length / 3;
    const angleIncrement = Math.PI / numPetals;
    this.rotations = Array.from(Array(numPetals)).map(
      (_, i) => i * angleIncrement,
    );

    const size = remap(MIN_Z_POS, MAX_Z_POS, MIN_SIZE, MAX_SIZE, this.origin.z);
    for(let i = 0; i < numPetals; i ++) {
      this.sizes.push(size)
    }
  }

  update() {}
}
