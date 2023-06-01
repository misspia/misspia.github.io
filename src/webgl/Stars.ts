import * as THREE from "three";
import vertexShader from "./shaders/stars.vert?raw";
import fragmentShader from "./shaders/stars.frag?raw";
import { randomFloatBetween } from "@utils";

const getPointMultiplier = (height: number) => {
  return height / (2.0 * Math.tan((0.5 * 60.0 * Math.PI) / 180.0));
};

export class Stars {
  numStars: number;
  group: THREE.Group;
  stars: THREE.Points;
  material: THREE.ShaderMaterial;
  geometry: THREE.BufferGeometry;
  constructor() {
    this.numStars = 3000;
    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(this.getVertices(), 3)
    );
    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      vertexColors: true,
      uniforms: {
        uPointMultiplier: {
          value: getPointMultiplier(window.innerHeight),
        },
      },
      transparent: true,
    });
    this.stars = new THREE.Points(this.geometry, this.material);
    this.group = new THREE.Group();
    this.group.add(this.stars);
  }
  getVertices() {
    const vertices = [];
    for (let i = 0; i < this.numStars; i++) {
      const x = randomFloatBetween(-400, 400);
      const y = randomFloatBetween(-400, 400);
      const z = randomFloatBetween(-800, -100);
      vertices.push(x, y, z);
    }
    return vertices;
  }
  enableLayer(layerNumber: number) {
    this.stars.layers.enable(layerNumber);
  }
  onResize(height: number) {
    this.material.uniforms.uPointMultiplier.value = getPointMultiplier(height);
  }
  update() {}
}
