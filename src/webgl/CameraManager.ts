import * as THREE from "three";
import { Universe } from "@webgl/Universe";
import { clamp, toRadians } from "@utils";
import gsap, { Power3 } from "gsap";

const ROTATION_RADIUS = 4;

export class CameraManager {
  context: Universe;
  mouse: THREE.Vector2;
  center: THREE.Vector3;
  constructor(context: Universe) {
    this.context = context;
    this.center = new THREE.Vector3();
    this.mouse = new THREE.Vector2();
  }

  onMouseMove = (e: MouseEvent) => {
    const { height, width } = this.context.canvas;
    this.mouse.set(e.clientX - width / 2, -e.clientY + height / 2);

    const degrees = clamp(-40, 40, this.mouse.x * 0.1);
    const angle = toRadians(degrees);
    const { x, z } = this.getCircleCoord(angle);
    const posY = clamp(1, 5.0, this.mouse.y * 0.01);

    gsap.timeline().to(this.context.camera.position, {
      x,
      y: posY,
      z: -z,
      delay: 0.2,
      ease: Power3.easeOut,
      onUpdate: () => {
        this.context.lookAt(this.center);
      },
    });
  };

  getCircleCoord(angle: number) {
    return {
      x: this.center.x + ROTATION_RADIUS * Math.sin(angle),
      y: 0.5,
      z: this.center.y + ROTATION_RADIUS * Math.cos(angle),
    };
  }

  update() {}
}
