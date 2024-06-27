import * as THREE from "three";
import { randomFloatBetween, remap } from "@utils";

const MIN_X_START_POSITION = -3.5;
const MAX_X_START_POSITION = 3.5;

const MIN_Y_START_POSITION = -1.5;
const MAX_Y_START_POSITION = -1;
const MIN_Y_END_POSITION = 5;
const MAX_Y_END_POSITION = 7;

const MIN_Z_START_POSITION = -3;
const MAX_Z_START_POSITION = 3;

const MIN_POSITION_VELOCITY = 0.002;
const MAX_POSITION_VELOCITY = 0.01;

const MIN_ROTATION_VELOCITY = 0.008;
const MAX_ROTATION_VELOCITY = 0.025;

const MIN_SIZE = 5;
const MAX_SIZE = 40;

const LOWER_Y_FADE_THRESHOLD = 0.2; // percent
const UPPER_Y_FADE_THRESHOLD = 0.9;

export class Petal {
  private xStartPosition: number;
  private yStartPosition: number;
  private yEndPosition: number;
  private zStartPosition: number;
  private yVelocity: number;
  private rotationVelocity: number;

  public position: THREE.Vector3;
  public rotation: number;
  public size: number;
  public alpha: number;
  constructor() {
    this.xStartPosition = 0;
    this.yStartPosition = 0;
    this.yEndPosition = 0;
    this.zStartPosition = 0;
    this.yVelocity = 0;
    this.position = new THREE.Vector3();

    this.rotationVelocity = 0;
    this.rotation = 0;

    this.size = 1;
    this.alpha = 1;
    this.reset();
  }

  /**
   * - randomize start and end positions and associated valocities
   * - set position to new start positions
   * - randomize rotation and rotation velocity
   */
  reset() {
    this.xStartPosition = randomFloatBetween(
      MIN_X_START_POSITION,
      MAX_X_START_POSITION,
    );
    this.yStartPosition = randomFloatBetween(
      MIN_Y_START_POSITION,
      MAX_Y_START_POSITION,
    );
    this.yEndPosition = randomFloatBetween(
      MIN_Y_END_POSITION,
      MAX_Y_END_POSITION,
    );
    this.zStartPosition = randomFloatBetween(
      MIN_Z_START_POSITION,
      MAX_Z_START_POSITION,
    );

    this.yVelocity = randomFloatBetween(
      MIN_POSITION_VELOCITY,
      MAX_POSITION_VELOCITY,
    );

    this.position.set(
      this.xStartPosition,
      this.yStartPosition,
      this.zStartPosition,
    );

    this.rotationVelocity = remap(
      MIN_POSITION_VELOCITY,
      MAX_POSITION_VELOCITY,
      MIN_ROTATION_VELOCITY,
      MAX_ROTATION_VELOCITY,
      this.yVelocity,
    );
    this.rotation = randomFloatBetween(0, Math.PI * 2);
    this.size = remap(
      MIN_Z_START_POSITION,
      MAX_Z_START_POSITION,
      MIN_SIZE,
      MAX_SIZE,
      this.zStartPosition,
    );
  }

  update() {
    this.rotation -= this.rotationVelocity;

    if (this.position.y >= this.yEndPosition) {
      this.reset();
    } else {
      this.position.y += this.yVelocity;
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
      this.alpha = 1 - remap(UPPER_Y_FADE_THRESHOLD, 1, 0, 1, yProgress);
    } else if (yProgress < LOWER_Y_FADE_THRESHOLD) {
      this.alpha = remap(0, LOWER_Y_FADE_THRESHOLD, 0, 1, yProgress);
    } else {
      this.alpha = 1;
    }
  }
}
