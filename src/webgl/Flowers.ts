import * as THREE from "three";
import { flowerTexture } from "@assets";
import vertexShader from "@webgl/shaders/flower.vert";
import fragmentShader from "@webgl/shaders/flower.frag";
import { toRadians, randomFloatBetween, remap } from "@utils";

const NUM_FLOWERS = 500;

const MIN_X_POS = -5;
const MAX_X_POS = 5;
const MIN_Z_POS = 0;
const MAX_Z_POS = 3.8;

const MIN_SIZE = 1;
const MAX_SIZE = 50;

export class Flowers {
  geometry: THREE.BufferGeometry;
  material: THREE.Material;
  group: THREE.Points;

  constructor() {
    this.geometry = new THREE.BufferGeometry();
    this.material = new THREE.RawShaderMaterial({
      vertexShader,
      fragmentShader,
      depthTest: true,
      depthWrite: false,
      transparent: true,
      vertexColors: true,
      side: THREE.DoubleSide,
      uniforms: {
        diffuseTexture: {
          value: new THREE.TextureLoader().load(flowerTexture),
        },
      },
    });

    this.createFlowers();
    this.group = new THREE.Points(this.geometry, this.material);
    this.group.rotateX(toRadians(15));
  }

  createFlowers() {
    const positions: number[] = [];
    const sizes: number[] = [];

    for (let i = 0; i < NUM_FLOWERS; i++) {
      const origin = new THREE.Vector3(
        randomFloatBetween(MIN_X_POS, MAX_X_POS),
        0,
        randomFloatBetween(MIN_Z_POS, MAX_Z_POS),
      );
      const size = remap(MIN_Z_POS, MAX_Z_POS, MIN_SIZE, MAX_SIZE, origin.z);

      positions.push(origin.x, origin.y, origin.z);
      sizes.push(size);
    }
    this.geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3),
    );
    this.geometry.setAttribute(
      "size",
      new THREE.Float32BufferAttribute(sizes, 1),
    );
  }

  update() {}
}
