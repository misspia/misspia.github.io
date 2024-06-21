import * as THREE from "three";
import { petalTexture } from "@assets";
import { Flower } from "@webgl/Flower";
import vertexShader from "@webgl/shaders/flower.vert";
import fragmentShader from "@webgl/shaders/flower.frag";
import { toRadians } from '@utils'

const NUM_FLOWERS = 50;

export class Flowers {
  geometry: THREE.BufferGeometry;
  material: THREE.Material;
  flowers: Flower[];
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
          value: new THREE.TextureLoader().load(petalTexture),
        },
      },
    });
    this.flowers = [];

    this.createFlowers();
    this.group = new THREE.Points(this.geometry, this.material);
    this.group.rotateX(toRadians(15))
  }

  createFlowers() {
    const positions: number[] = [];
    const rotations: number[] = [];
    const sizes: number[] = [];

    for (let i = 0; i < NUM_FLOWERS; i++) {
      const flower = new Flower();

      positions.push(...flower.positions);
      rotations.push(...flower.rotations);
      sizes.push(...flower.sizes);
    }
    this.geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3),
    );
    this.geometry.setAttribute(
      "rotation",
      new THREE.Float32BufferAttribute(rotations, 1),
    );
    this.geometry.setAttribute(
      "size",
      new THREE.Float32BufferAttribute(sizes, 1),
    );
  }

  update() {}
}
