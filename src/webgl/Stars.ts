import * as THREE from "three";
import vertexShader from "./shaders/stars.vert?raw";
import fragmentShader from "./shaders/stars.frag?raw";

export class Stars {
  group: THREE.Group;
  stars: THREE.Points;
  // material: THREE.PointsMaterial;
  material: THREE.ShaderMaterial;
  geometry: THREE.BufferGeometry;
  constructor() {
    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(this.getVertices(), 3)
    );
    // this.material = new THREE.PointsMaterial({
    //   size: 35,
    //   sizeAttenuation: true,
    //   map: sprite,
    //   alphaTest: 0.5,
    //   transparent: true,
    // });
    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {},
      transparent: true,
    });
    this.stars = new THREE.Points(this.geometry, this.material);
    this.group = new THREE.Group();
    this.group.add(this.stars);
  }
  getVertices() {
    const vertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = 2000 * Math.random() - 1000;
      const y = 2000 * Math.random() - 1000;
      const z = 2000 * Math.random() - 1000;

      vertices.push(x, y, z);
    }
    return vertices;
  }
  update() {}
}
