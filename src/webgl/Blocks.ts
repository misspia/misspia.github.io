import * as THREE from "three";
import { Block } from "@webgl/Block";
import { Universe } from "@webgl/Universe";

const NUM_BLOCKS = 10;

export class Blocks {
  context: Universe;
  blocks: Block[];
  material: THREE.Material;
  group: THREE.Group;
  constructor(context: Universe) {
    this.context = context;
    this.blocks = [];
    this.material = new THREE.MeshPhongMaterial({
      transparent: true,
      color: 0x011932,
      emissive: 0x000000,
      specular: 0x79a9af,
      shininess: 72.6,
    });
    this.group = new THREE.Group();
    this.createBlocks();
  }

  createBlocks() {
    for (let i = 0; i < NUM_BLOCKS; i++) {
      const block = new Block(this.material);
      this.blocks.push(block);
      this.group.add(block.group);
    }
  }

  update() {
    this.blocks.forEach((block) => {
      block.update();
    });
  }
}
