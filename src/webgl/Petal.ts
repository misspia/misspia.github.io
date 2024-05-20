import * as THREE from 'three'
import { randomFloatBetween, remap } from '@utils';

const MIN_X_START_POSITION = -5;
const MAX_X_START_POSITION = 10;

const MIN_Y_START_POSITION = 10;
const MAX_Y_START_POSITION = 0;
const MIN_Y_END_POSITION = -10;
const MAX_Y_END_POSITION = -15;

const MIN_POSITION_VELOCITY = 0.03
const MAX_POSITION_VELOCITY = 0.08

const MIN_ROTATION_VELOCITY = 0.01;
const MAX_ROTATION_VELOCITY = 0.02;

const MIN_SIZE = 30;
const MAX_SIZE = 35;


export class Petal {
  private xStartPosition: number;
  private yStartPosition: number;
  private yEndPosition: number;
  private yVelocity: number;
  private rotationVelocity: number;

  public position: THREE.Vector3;
  public rotation: number;
  public size: number;
  public opacity: number;
  constructor() {
    
    this.xStartPosition = 0;
    this.yStartPosition = 0;
    this.yEndPosition = 0;
    this.yVelocity = 0;
    this.position = new THREE.Vector3()

    
    this.rotationVelocity = 0;
    this.rotation = 0;
    this.reset()


    this.size = randomFloatBetween(MIN_SIZE, MAX_SIZE)
    this.opacity = 1;
  }

  /**
   * - randomize start and end positions and associated valocities
   * - set position to new start positions
   * - randomize rotation and rotation velocity
   */
  reset() {
    this.xStartPosition = randomFloatBetween(MIN_X_START_POSITION, MAX_X_START_POSITION);
    this.yStartPosition = randomFloatBetween(MIN_Y_START_POSITION, MAX_Y_START_POSITION);
    this.yEndPosition = randomFloatBetween(MIN_Y_END_POSITION, MAX_Y_END_POSITION);

    this.yVelocity = randomFloatBetween(MIN_POSITION_VELOCITY, MAX_POSITION_VELOCITY);

    this.position.set(
      this.xStartPosition,
      this.yStartPosition,
      0,
    );

    this.rotationVelocity = remap(this.yVelocity, MIN_POSITION_VELOCITY, MAX_POSITION_VELOCITY, MIN_ROTATION_VELOCITY, MAX_ROTATION_VELOCITY)
    this.rotation = randomFloatBetween(0, Math.PI * 2);
  }

  update() {
    this.rotation -= this.rotationVelocity


    if(this.position.y <= this.yEndPosition) {
      this.reset();
    } else {
      this.position.y -= this.yVelocity;
    }
    
  }
}
