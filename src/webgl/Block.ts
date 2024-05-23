import * as THREE from "three";
import { randomFloatBetween, remap } from "@utils";

const MIN_X_POSITION = -10;
const MAX_X_POSITION = 10;

const MIN_Y_START_POSITION = -5;
const MAX_Y_START_POSITION = 0;
const MIN_Y_END_POSITION = 1;
const MAX_Y_END_POSITION = 5;

const MIN_Z_POSITION = -25;
const MAX_Z_POSITION = 2;

const MIN_Y_VELOCITY = 0.01;
const MAX_Y_VELOCITY = 0.02;
const MIN_Y_ROTATION_VELOCITY = 0.0009;
const MAX_Y_ROTATION_VELOCITY = 0.0018;

const MIN_X_SCALE = 0.2;
const MAX_X_SCALE = 0.8;
const MIN_Y_SCALE = 1;
const MAX_Y_SCALE = 1.5;
const MIN_Z_SCALE = 0.2;
const MAX_Z_SCALE = 0.8;

const MIN_DISTANCE_SCALE = 0.5;
const MAX_DISTANCE_SCALE = 1;

const LOWER_Y_FADE_THRESHOLD = 0.2;
const UPPER_Y_FADE_THRESHOLD = 0.9;

export class Block {
  private xPosition: number;
  private yStartPosition: number;
  private yEndPosition: number;
  private zPosition: number;
  private yVelocity: number;

  private yRotationVelocity: number;

  private distanceScale: number;

  private geometry: THREE.BoxGeometry;
  private material: THREE.Material;
  public group: THREE.Mesh;

  constructor(material: THREE.Material) {
    this.xPosition = 0;
    this.yStartPosition = 0;
    this.yEndPosition = 0;
    this.zPosition = 0;
    this.yVelocity = 0;

    this.yRotationVelocity = 0;

    this.distanceScale = 0;

    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = material;
    this.group = new THREE.Mesh(this.geometry, this.material);
  }

  get position() {
    return this.group.position;
  }

  get rotation() {
    return this.group.rotation;
  }

  get scale() {
    return this.group.scale;
  }

  reset() {
    this.xPosition = randomFloatBetween(MIN_X_POSITION, MAX_X_POSITION);
    this.yStartPosition = randomFloatBetween(
      MIN_Y_START_POSITION,
      MAX_Y_START_POSITION,
    );
    this.yEndPosition = randomFloatBetween(
      MIN_Y_END_POSITION,
      MAX_Y_END_POSITION,
    );
    this.zPosition = randomFloatBetween(MIN_Z_POSITION, MAX_Z_POSITION);

    this.yVelocity = randomFloatBetween(MIN_Y_VELOCITY, MAX_Y_VELOCITY);
    this.yRotationVelocity = randomFloatBetween(
      MIN_Y_ROTATION_VELOCITY,
      MAX_Y_ROTATION_VELOCITY,
    );

    this.position.set(this.xPosition, this.yStartPosition, this.zPosition);
    this.rotation.set(0, randomFloatBetween(0, Math.PI * 2), 0);

    this.distanceScale = remap(
      MIN_Z_POSITION,
      MAX_Z_POSITION,
      MIN_DISTANCE_SCALE,
      MAX_DISTANCE_SCALE,
      this.position.z,
    );
    this.scale.set(
      randomFloatBetween(MIN_X_SCALE, MAX_X_SCALE) * this.distanceScale,
      randomFloatBetween(MIN_Y_SCALE, MAX_Y_SCALE) * this.distanceScale,
      randomFloatBetween(MIN_Z_SCALE, MAX_Z_SCALE) * this.distanceScale,
    );
  }

  update() {
    if (this.position.y >= this.yEndPosition) {
      this.reset();
    } else {
      this.position.y += this.yVelocity;
      this.rotation.y += this.yRotationVelocity;
    }

    // yProgress based updates
    const yProgress = remap(
      this.yStartPosition,
      this.yEndPosition,
      0,
      1,
      this.position.y,
    );
    if (yProgress > UPPER_Y_FADE_THRESHOLD) {
      this.material.opacity =
        1 - remap(UPPER_Y_FADE_THRESHOLD, 1, 0, 1, yProgress);
    } else if (yProgress < LOWER_Y_FADE_THRESHOLD) {
      this.material.opacity = remap(0, LOWER_Y_FADE_THRESHOLD, 0, 1, yProgress);
    } else {
      this.material.opacity = 1;
    }
  }
}
