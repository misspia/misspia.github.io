import * as THREE from 'three'
import { randomFloatBetween } from '@utils';

const MIN_X_START_POSITION = -1;
const MAX_X_START_POSITION = 10;
const MIN_X_END_POSITION = 0;
const MAX_X_END_POSITION = 5;

const MIN_Y_START_POSITION = 10;
const MAX_Y_START_POSITION = 5;
const MIN_Y_END_POSITION = -10;
const MAX_Y_END_POSITION = -15;

const MIN_X_VELOCITY = 0.01
const MAX_X_VELOCITY = 0.1
const MIN_Y_VELOCITY = 0.01
const MAX_Y_VELOCITY = 0.1

const MIN_SIZE = 30;
const MAX_SIZE = 35;


export class Leaf {
  private xRotationVelocity: number;
  private yRotationVelocity: number;
  private zRotationVelocity: number;
  private xStartPosition: number;
  private xEndPosition: number;
  private yStartPosition: number;
  private yEndPosition: number;
  private xVelocity: number;
  private yVelocity: number;

  public rotation: THREE.Vector3;
  public position: THREE.Vector3;
  public size: number;
  constructor() {
    this.xRotationVelocity = randomFloatBetween(0.01, 0.02);
    this.yRotationVelocity = randomFloatBetween(0.01, 0.02);
    this.zRotationVelocity = randomFloatBetween(0.01, 0.02);

    this.rotation = new THREE.Vector3(
      randomFloatBetween(0, Math.PI * 2),
      randomFloatBetween(0, Math.PI * 2),
      randomFloatBetween(0, Math.PI * 2),
    )

    this.xStartPosition = 0;
    this.xEndPosition = 0;
    this.yStartPosition = 0;
    this.yEndPosition = 0;
    this.xVelocity = 0;
    this.yVelocity = 0;
    this.position = new THREE.Vector3()
    this.resetPosition()

    this.size = randomFloatBetween(MIN_SIZE, MAX_SIZE)
  }

  /**
   * - randomize start and end positions
   * - random x and y velocities
   * - set position to new start positions
   */
  resetPosition() {
    this.xStartPosition = randomFloatBetween(MIN_X_START_POSITION, MAX_X_START_POSITION);
    this.xEndPosition = randomFloatBetween(MIN_X_END_POSITION, MAX_X_END_POSITION);
    this.yStartPosition = randomFloatBetween(MIN_Y_START_POSITION, MAX_Y_START_POSITION);
    this.yEndPosition = randomFloatBetween(MIN_Y_END_POSITION, MAX_Y_END_POSITION);

    this.xVelocity = randomFloatBetween(MIN_X_VELOCITY, MAX_X_VELOCITY);
    this.yVelocity = randomFloatBetween(MIN_Y_VELOCITY, MAX_Y_VELOCITY);

    this.position.set(
      this.xStartPosition,
      this.yStartPosition,
      0,
    ) 
  }

  update() {
    this.rotation.x += this.xRotationVelocity
    this.rotation.y += this.yRotationVelocity
    this.rotation.z += this.zRotationVelocity

    if(this.position.x <= this.xEndPosition && this.position.y <= this.yEndPosition) {
      this.resetPosition();
    } else {
      this.position.x -= this.xVelocity;
      this.position.y -= this.yVelocity;
    }
    
  }
}
