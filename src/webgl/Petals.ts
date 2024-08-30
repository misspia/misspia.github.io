import * as THREE from "three";
import { Petal } from "@webgl/Petal";
import { petalTexture } from "@assets";
import vertexShader from "@webgl/shaders/petal.vert";
import fragmentShader from "@webgl/shaders/petal.frag";

const NUM_LEAVES = 20;

// https://x.com/reku_AL/status/1455547674275549190/photo/3

export class Petals {
  private petals: Petal[];
  private geometry: THREE.BufferGeometry;
  private material: THREE.Material;
  public group: THREE.Points;
  constructor() {
    this.petals = [];
    this.geometry = new THREE.BufferGeometry();
    this.createPetals();

    this.material = new THREE.RawShaderMaterial({
      fragmentShader,
      vertexShader,
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
    this.group = new THREE.Points(this.geometry, this.material);
  }

  get position() {
    return this.group.position;
  }

  createPetals() {
    const positions: number[] = [];
    const rotations: number[] = [];
    const sizes: number[] = [];
    const alphas: number[] = [];

    for (let i = 0; i < NUM_LEAVES; i++) {
      const petal = new Petal();
      this.petals.push(petal);

      positions.push(petal.position.x, petal.position.y, petal.position.z);

      rotations.push(petal.rotation);

      sizes.push(petal.size);
      alphas.push(petal.alpha);
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
    this.geometry.setAttribute(
      "alpha",
      new THREE.Float32BufferAttribute(alphas, 1),
    );
  }

  update() {
    const positions: number[] = [];
    const rotations: number[] = [];
    const sizes: number[] = [];
    const alphas: number[] = [];
    this.petals.forEach((petal) => {
      petal.update();

      positions.push(petal.position.x, petal.position.y, petal.position.z);

      rotations.push(petal.rotation);
      sizes.push(petal.size);
      alphas.push(petal.alpha);
    });

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
    this.geometry.setAttribute(
      "alpha",
      new THREE.Float32BufferAttribute(alphas, 1),
    );
  }
}
