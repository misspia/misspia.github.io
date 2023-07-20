import * as THREE from "three";
import { Universe } from "./Universe";

export class PointerManager {
  context: Universe;
  pointer: THREE.Vector2;
  raycaster: THREE.Raycaster;
  intersections: THREE.Intersection[];
  constructor(context: Universe) {
    this.context = context;
    this.pointer = new THREE.Vector2();
    this.raycaster = new THREE.Raycaster();
    this.intersections = [];
  }

  onPointerMove = (event: MouseEvent) => {
    this.pointer.x = (event.clientX / this.context.canvas.width) * 2 - 1;
    this.pointer.y = -(event.clientY / this.context.canvas.height) * 2 + 1;
  };

  update() {
    this.raycaster.setFromCamera(this.pointer, this.context.camera);
    this.intersections = this.raycaster.intersectObjects(
      this.context.scene.children,
      true
    );
  }
}
