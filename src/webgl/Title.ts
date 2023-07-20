import * as THREE from "three";
import { BalloonFont } from "./typography/BalloonFont";
import { ToonFont } from "./typography/ToonFont";

// https://gero3.github.io/facetype.js/
// https://webflow.com/made-in-webflow/website/Text-Particles-with-ThreeJS

export class Title {
  group: THREE.Group;
  bbox: THREE.Box3;

  constructor() {
    const balloon = new BalloonFont("misspia");
    const toon = new ToonFont("misspia");
    this.group = new THREE.Group();
    this.group.add(toon.group);
    this.bbox = new THREE.Box3().setFromObject(this.group);
    this.group.position.x -= (this.bbox.max.x - this.bbox.min.x) / 2;
  }
  update() {}
}
