import * as THREE from "three";
import { cloudTexture } from "@assets";

export class Clouds {
  private geometry: THREE.BufferGeometry;
  // private material: THREE.RawShaderMaterial;
  private material: THREE.PointsMaterial;
  public group: THREE.Points;

  constructor() {
    this.geometry = new THREE.BufferGeometry();
    this.createClouds();
    const texture = new THREE.TextureLoader().load(cloudTexture);
    texture.flipY = false;

    this.material = new THREE.PointsMaterial({
      map: new THREE.TextureLoader().load(cloudTexture),
      transparent: true,
      color: 0xffffff,
      opacity: 0.55,
      size: 4.5,
    });

    this.group = new THREE.Points(this.geometry, this.material);
  }

  createClouds() {
    const positions = [
      -0.2,
      2.5,
      1.0, // cloud 1
      -2.4,
      0.3,
      1.9, // cloud 2
      2.2,
      0.7,
      2.5, // cloud 3
    ];
    const sizes = [5, 7, 6];
    const alphas = [0.45, 1.0, 0.5];

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
      new THREE.Float32BufferAttribute(alphas, 1),
    );
  }

  update() {}
}
