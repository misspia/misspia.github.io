import * as THREE from "three";
import { Universe } from "@webgl/Universe";
import { remap, toRadians } from "@utils";
import gsap, { Power3 } from "gsap";

const ROTATION_RADIUS = 4;

export class CameraManager {
  context: Universe;
  mouse: THREE.Vector2;
  center: THREE.Vector3;
  constructor(context: Universe) {
    this.context = context;
    this.center = new THREE.Vector3(0, 0, 0);
    this.mouse = new THREE.Vector2();
  }

  onMouseMove = (e: MouseEvent) => {
    const { height, width } = this.context.canvas;
    this.mouse.set(e.clientX - width / 2, -e.clientY + height / 2);

    const degrees = remap(0, width, 180, 200, this.mouse.x);
    const angle = toRadians(degrees);
    const { x, z } = this.getCircleCoord(angle);
    const posY = remap(0, width, 0.2, 2.0, this.mouse.y);

    gsap.timeline().to(this.context.camera.position, {
      x,
      y: posY,
      z: -z,
      delay: 0.1,
      ease: Power3.easeOut,
      onUpdate: () => {
        this.context.camera.lookAt(0, 0, 0);
      },
    });
  };

  getCircleCoord(angle: number) {
    return {
      x: this.center.x + ROTATION_RADIUS * Math.sin(angle),
      y: 0,
      z: this.center.y + ROTATION_RADIUS * Math.cos(angle),
    };
  }

  update() {}
}
