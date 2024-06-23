import * as THREE from "three";
import { flowerTexture } from "@assets";
import vertexShader from "@webgl/shaders/flower.vert";
import fragmentShader from "@webgl/shaders/flower.frag";
import { toRadians, randomFloatBetween, remap } from "@utils";

const distanceFromCenter = (coordA: [number, number], coordB: [number, number]) => {
  return Math.sqrt(Math.pow((coordA[0] - coordB[0]), 2) + Math.pow((coordA[1] - coordB[1]), 2))
}

const NUM_FLOWERS = 2000;

const MIN_X_POS = -5;
const MAX_X_POS = 5;
const MIN_Z_POS = 0;
const MAX_Z_POS = 3.8;

const MIN_SIZE = 1;
const MAX_SIZE = 30;


const MAX_FADE_RADIUS_THRESHOLD = distanceFromCenter([0, 0], [MAX_X_POS, MAX_Z_POS])
const MIN_FADE_RADIUS_THRESHOLD = MAX_FADE_RADIUS_THRESHOLD * 0.5

export class Flowers {
  origin: THREE.Vector3;
  geometry: THREE.BufferGeometry;
  material: THREE.Material;
  group: THREE.Points;

  constructor() {
    this.origin = new THREE.Vector3();
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
    const alphas: number[] = [];

    for (let i = 0; i < NUM_FLOWERS; i++) {
      const position = new THREE.Vector3(
        randomFloatBetween(MIN_X_POS, MAX_X_POS),
        0,
        randomFloatBetween(MIN_Z_POS, MAX_Z_POS),
      );
      const size = remap(MIN_Z_POS, MAX_Z_POS, MIN_SIZE, MAX_SIZE, position.z);

      positions.push(position.x, position.y, position.z);
      sizes.push(size);

      const distance = distanceFromCenter([this.origin.x, this.origin.z], [position.x, position.z]);
      if(distance >= MIN_FADE_RADIUS_THRESHOLD) {
        const alpha = remap(MIN_FADE_RADIUS_THRESHOLD, MAX_FADE_RADIUS_THRESHOLD, 0.0, 0.5, distance)
        console.debug(alpha, distance, position)
        alphas.push()
      } else {
        alphas.push(1)
      }
    }
    this.geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3),
    );
    this.geometry.setAttribute(
      "size",
      new THREE.Float32BufferAttribute(sizes, 1),
    );
    this.geometry.setAttribute(
      "alpha",
      new THREE.Float32BufferAttribute(sizes, 1),
    );
  }


  
  

  update() {}
}
