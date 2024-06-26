import * as THREE from "three";
import { Leaf } from "@webgl/Leaf";
import { leafTexture } from "@assets";
import { Universe } from "@webgl/Universe";
import vertexShader from "@webgl/shaders/leaves.vert";
import fragmentShader from "@webgl/shaders/leaves.frag";

const NUM_LEAVES = 10;

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_custom_attributes_points.html

export class Leaves {
  private context: Universe;
  private leaves: Leaf[];
  private geometry: THREE.BufferGeometry;
  private material: THREE.Material;
  public group: THREE.Points;
  constructor(context: Universe) {
    this.context = context;
    this.leaves = [];
    this.geometry = new THREE.BufferGeometry();
    this.createLeaves();

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
          value: new THREE.TextureLoader().load(leafTexture),
        },
      },
    });
    this.group = new THREE.Points(this.geometry, this.material);
  }

  get position() {
    return this.group.position;
  }

  createLeaves() {
    const positions: number[] = [];
    const rotations: number[] = [];
    const sizes: number[] = [];

    for (let i = 0; i < NUM_LEAVES; i++) {
      const leaf = new Leaf();
      this.leaves.push(leaf);

      positions.push(leaf.position.x, leaf.position.y, leaf.position.z);

      rotations.push(leaf.rotation);

      sizes.push(leaf.size);
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

  update() {
    const positions: number[] = [];
    const rotations: number[] = [];
    const sizes: number[] = [];
    this.leaves.forEach((leaf) => {
      leaf.update();

      positions.push(leaf.position.x, leaf.position.y, leaf.position.z);

      rotations.push(leaf.rotation);
      sizes.push(leaf.size);
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
  }
}
