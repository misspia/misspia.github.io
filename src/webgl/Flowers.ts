import * as THREE from "three";
import { petalTexture } from "@assets";
import { Flower } from "@webgl/Flower";
import vertexShader from "@webgl/shaders/flower.vert";
import fragmentShader from "@webgl/shaders/flower.frag";

const NUM_FLOWERS = 20;

export class Flowers {
  geometry: THREE.BufferGeometry;
  material: THREE.Material;
  flowers: Flower[];
  group: THREE.Points;

  constructor() {
    this.geometry = new THREE.BufferGeometry();
    this.material = new THREE.ShaderMaterial({
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
  }

  createFlowers() {
    const positions: number[] = [];
    const rotations: number[] = [];

    for (let i = 0; i < NUM_FLOWERS; i++) {
      const flower = new Flower();

      positions.push(...flower.positions);
      rotations.push(...flower.rotations);
    }
    this.geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3),
    );
    this.geometry.setAttribute(
      "rotation",
      new THREE.Float32BufferAttribute(rotations, 1),
    );
  }

  update() {}
}
