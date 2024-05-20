import * as THREE from "three";
import { randomFloatBetween, remap } from "@utils";

const MIN_X_START_POSITION = -5;
const MAX_X_START_POSITION = 10;
const MIN_X_END_POSITION = -15;
const MAX_X_END_POSITION = -5;

const MIN_Y_START_POSITION = 10;
const MAX_Y_START_POSITION = 0;
const MIN_Y_END_POSITION = -10;
const MAX_Y_END_POSITION = -15;

const MIN_POSITION_VELOCITY = 0.02;
const MAX_POSITION_VELOCITY = 0.07;

const MIN_ROTATION_VELOCITY = 0.02;
const MAX_ROTATION_VELOCITY = 0.03;

const MIN_SIZE = 30;
const MAX_SIZE = 35;

export class Leaf {
  private xStartPosition: number;
  private xEndPosition: number;
  private yStartPosition: number;
  private yEndPosition: number;
  private xVelocity: number;
  private yVelocity: number;
  private rotationVelocity: number;

  public position: THREE.Vector3;
  public rotation: number;
  public size: number;
  constructor() {
    this.xStartPosition = 0;
    this.xEndPosition = 0;
    this.yStartPosition = 0;
    this.yEndPosition = 0;
    this.xVelocity = 0;
    this.yVelocity = 0;
    this.position = new THREE.Vector3();

    this.rotationVelocity = 0;
    this.rotation = 0;
    this.reset();

    this.size = randomFloatBetween(MIN_SIZE, MAX_SIZE);
  }

  /**
   * - randomize start and end positions and associated valocities
   * - set position to new start positions
   * - randomize rotation and rotation velocity
   */
  reset() {
    // this.xStartPosition = randomFloatBetween(MIN_X_START_POSITION, MAX_X_START_POSITION);
    // this.xEndPosition = randomFloatBetween(MIN_X_END_POSITION, MAX_X_END_POSITION);
    this.xStartPosition = 0;
    this.xEndPosition = 0;

    // this.yStartPosition = randomFloatBetween(MIN_Y_START_POSITION, MAX_Y_START_POSITION);
    // this.yEndPosition = randomFloatBetween(MIN_Y_END_POSITION, MAX_Y_END_POSITION);
    this.yStartPosition = -5;
    this.yEndPosition = 0;

    this.xVelocity = randomFloatBetween(
      MIN_POSITION_VELOCITY,
      MAX_POSITION_VELOCITY,
    );
    this.xVelocity = 0.05;
    // this.yVelocity = randomFloatBetween(MIN_POSITION_VELOCITY, MAX_POSITION_VELOCITY);
    // this.yVelocity = remap(this.xVelocity, MIN_X_START_POSITION, MIN_X_END_POSITION, MIN_Y_START_POSITION, MIN_Y_END_POSITION);
    this.yVelocity = this.xVelocity;

    this.position.set(this.xStartPosition, this.yStartPosition, 0);

    const averagePositionVelocity = (this.xVelocity + this.yVelocity) / 2;
    this.rotationVelocity = remap(
      MIN_POSITION_VELOCITY,
      MAX_POSITION_VELOCITY,
      MIN_ROTATION_VELOCITY,
      MAX_ROTATION_VELOCITY,
      averagePositionVelocity,
    );
    this.rotationVelocity = 0.1;
    this.rotation = randomFloatBetween(0, Math.PI * 2);
  }

  update() {
    this.rotation -= this.rotationVelocity;

    // if(this.position.x <= this.xEndPosition && this.position.y <= this.yEndPosition) {
    //   this.reset();
    // } else {
    //   this.position.x -= this.xVelocity;
    //   this.position.y -= this.yVelocity;
    // }
  }
}
