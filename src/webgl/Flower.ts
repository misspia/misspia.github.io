import * as THREE from "three";

const NUM_PETALS = 5;

// https://x.com/kchplr/status/1624137747039457284
export class Flower {
  positions: number[];
  rotations: number[];

  constructor() {
    this.positions = [];
    this.rotations = [];
    this.createFlowerPetals();
  }

  createFlowerPetals() {
    for (let i = 0; i < NUM_PETALS; i++) {}
  }

  update() {}
}
