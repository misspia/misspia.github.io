import * as THREE from "three";
import { flowerTexture } from "@assets";
import vertexShader from "@webgl/shaders/flower.vert";
import fragmentShader from "@webgl/shaders/flower.frag";
import { toRadians, randomFloatBetween, remap } from "@utils";

const distanceFromCenter = (
  coordA: [number, number],
  coordB: [number, number],
) => {
  return Math.sqrt(
    Math.pow(coordA[0] - coordB[0], 2) + Math.pow(coordA[1] - coordB[1], 2),
  );
};

const NUM_FLOWERS = 100;

const MIN_X_POS = -4;
const MAX_X_POS = 4;
const MIN_Z_POS = -1;
const MAX_Z_POS = 3.9;
const Y_POS = -0.5;

const MIN_SIZE = 0.5;
const MAX_SIZE = 1;

const CENTER_X = (MAX_X_POS + MIN_X_POS) / 2;
const CENTER_Z = (MAX_Z_POS + MIN_Z_POS) / 2;
const MAX_FADE_RADIUS_THRESHOLD =
  distanceFromCenter([CENTER_X, CENTER_Z], [MAX_X_POS, MAX_Z_POS]) * 0.75;
const MIN_FADE_RADIUS_THRESHOLD = MAX_FADE_RADIUS_THRESHOLD * 0.75;
const MAX_FADE_ALPHA = 0.9;

export class Flowers {
  origin: THREE.Vector3;
  // geometry: THREE.BufferGeometry;
  geometry: THREE.PlaneGeometry;
  material: THREE.Material;
  group: THREE.InstancedMesh;

  constructor() {
    this.origin = new THREE.Vector3();
    this.geometry = new THREE.PlaneGeometry(0.5, 0.5);
    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      depthTest: true,
      depthWrite: false,
      transparent: true,
      side: THREE.DoubleSide,
      uniforms: {
        diffuseTexture: {
          value: new THREE.TextureLoader().load(flowerTexture),
        },
      },
    });

    this.group = new THREE.InstancedMesh(
      this.geometry,
      this.material,
      NUM_FLOWERS,
    );
    this.group.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

    this.createFlowers();
    this.group.rotateX(toRadians(15));
  }

  createFlowers() {
    const tempFlower = new THREE.Object3D();

    for (let i = 0; i < NUM_FLOWERS; i++) {
      tempFlower.position.set(
        randomFloatBetween(MIN_X_POS, MAX_X_POS),
        Y_POS,
        randomFloatBetween(MIN_Z_POS, MAX_Z_POS),
      );

      const size = remap(
        MIN_Z_POS,
        MAX_Z_POS,
        MIN_SIZE,
        MAX_SIZE,
        tempFlower.position.z,
      );
      tempFlower.scale.set(size, size, size);
      // const distance = distanceFromCenter([this.origin.x, this.origin.z], [tempFlower.position.x, tempFlower.position.z]);
      // if(distance >= MIN_FADE_RADIUS_THRESHOLD) {

      //   const alpha = MAX_FADE_ALPHA - remap(MIN_FADE_RADIUS_THRESHOLD, MAX_FADE_RADIUS_THRESHOLD, 0.0, MAX_FADE_ALPHA, distance)
      //   alphas.push(alpha)
      // } else {
      //   alphas.push(1)
      // }

      tempFlower.updateMatrix();
      this.group.setMatrixAt(i, tempFlower.matrix);
    }
  }

  update() {}
}
