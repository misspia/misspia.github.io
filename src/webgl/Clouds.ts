import * as THREE from "three";
import { cloudTexture } from "@assets";
import fragmentShader from "@webgl/shaders/cloud.frag";
import vertexShader from "@webgl/shaders/cloud.vert";

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

    // this.material = new THREE.RawShaderMaterial({
    //   fragmentShader,
    //   vertexShader,
    //   uniforms: {
    //     diffuseTexture: { value: texture },
    //   },
    //   transparent: true,
    //   depthTest: false,
    //   // depthWrite: false,
    //   // vertexColors: true,
    //   // side: THREE.DoubleSide,
    //   // blending: THREE.NoBlending,
    //   // blending: THREE.NormalBlending,
    //   // blending: THREE.AdditiveBlending,
    //   // blending: THREE.SubtractiveBlending,
    //   // blending: THREE.MultiplyBlending,
    //   blending: THREE.CustomBlending,
    // });
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
    const positions = [-0.2, 2.5, 0.1, -2.0, 0.2, 1.2, 2.2, 0.7, 1.0];
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
