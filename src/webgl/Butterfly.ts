import * as THREE from "three";
import { butterflyWing } from "@assets";
import { toRadians, randomFloatBetween, remap } from "@utils";
import { Universe } from "@webgl/Universe";

const WING_WIDTH = 0.07;
const MIN_WING_ROTATION_VELOCITY = 0.07;
const MAX_WING_ROTATION_VELOCITY = 0.15;
const MIN_WING_ROTATION_RADIANS = toRadians(-80);
const MAX_WING_ROTATION_RADIANS = toRadians(0);
const MIN_PATH_PROGRESS = 0;
const MAX_PATH_PROGRESS = 1;
const MIN_PATH_PROGRESS_VELOCITY = 0.0005;
const MAX_PATH_PROGRESS_VELOCITY = 0.003;

export class Butterfly {
  context: Universe;

  spherical: THREE.Spherical;
  rotationMatrix: THREE.Matrix4;
  targetQuaternion: THREE.Quaternion;
  target: THREE.Mesh;

  private curve: THREE.CatmullRomCurve3;
  private path: THREE.Line;
  private pathProgess: number;
  private pathProgressVelocity: number;
  private wingRotationDirection: number;

  private wingRotationVelocity: number;
  private wingRotation: number;
  private wing1: THREE.Mesh;
  private wing2: THREE.Mesh;

  private material: THREE.Material;
  public group: THREE.Group;
  public butterfly: THREE.Group;

  constructor(context: Universe) {
    this.context = context;

    this.spherical = new THREE.Spherical();
    this.rotationMatrix = new THREE.Matrix4();
    this.targetQuaternion = new THREE.Quaternion();
    this.target = new THREE.Mesh();

    this.curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, -0.25, 0),
      new THREE.Vector3(-0.6, 0.4, -1),
      new THREE.Vector3(-0.5, 1, -1.5),
      new THREE.Vector3(0, 1, -3.5),
      new THREE.Vector3(1, 1.5, -4),
      new THREE.Vector3(0.5, 2, -4.5),
      new THREE.Vector3(0, 2.5, -5),
    ]);
    const points = this.curve.getPoints(1000);

    this.path = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(points),
      new THREE.LineBasicMaterial({ color: 0xff0000 }),
    );
    this.pathProgess = 0; // 0 - 1

    this.wingRotationDirection = 1;
    this.wingRotationVelocity = randomFloatBetween(
      MIN_WING_ROTATION_VELOCITY,
      MAX_WING_ROTATION_VELOCITY,
    );
    this.wingRotation = toRadians(20);
    this.pathProgressVelocity = remap(
      MIN_WING_ROTATION_RADIANS,
      MAX_WING_ROTATION_RADIANS,
      MIN_PATH_PROGRESS_VELOCITY,
      MAX_PATH_PROGRESS_VELOCITY,
      this.wingRotationVelocity,
    );

    this.material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(butterflyWing),
      transparent: true,
      side: THREE.DoubleSide,
    });

    const wing1Geometry = new THREE.PlaneGeometry(WING_WIDTH, WING_WIDTH * 1.3);
    const wing2Geometry = wing1Geometry.clone();

    // offset transformation origin
    wing1Geometry.translate(WING_WIDTH / 2, 0, 0);
    wing2Geometry.translate(WING_WIDTH / 2, 0, 0); // reversed since flipped later

    this.wing1 = new THREE.Mesh(wing1Geometry, this.material);
    this.wing2 = new THREE.Mesh(wing2Geometry, this.material);

    this.wing2.rotation.set(0, toRadians(180), 0);
    this.butterfly = new THREE.Group();
    this.butterfly.add(this.wing1);
    this.butterfly.add(this.wing2);
    // this.butterfly.up.set(1, 1, -1)

    this.group = new THREE.Group();
    this.group.add(this.butterfly);
    // this.group.add(this.path)
  }

  get position() {
    return this.group.position;
  }

  updateTarget() {
    const pos = this.curve.getPoint(this.pathProgess);
    this.target.position.set(pos.x, pos.y, pos.z);
  }

  update() {
    /**
     * flutter wings
     */
    if (this.wingRotation >= MAX_WING_ROTATION_RADIANS) {
      this.wingRotationDirection = -1;
    } else if (this.wingRotation <= MIN_WING_ROTATION_RADIANS) {
      this.wingRotationDirection = 1;
    }

    this.wingRotation += this.wingRotationVelocity * this.wingRotationDirection;
    this.wing1.rotation.y = this.wingRotation;
    this.wing2.rotation.y = Math.PI - this.wingRotation;

    /**
     * re-position butterfly
     */
    if (this.pathProgess >= MAX_PATH_PROGRESS) {
      this.pathProgess = MIN_PATH_PROGRESS;
    } else {
      this.pathProgess += this.pathProgressVelocity;
    }

    const pos = this.curve.getPoint(this.pathProgess);
    this.butterfly.position.set(pos.x, pos.y, pos.z);

    /**
     * rotate butterfly to face next coord
     */
    const nextPos = this.curve.getPoint(
      Math.min(this.pathProgess + this.pathProgressVelocity, MAX_PATH_PROGRESS),
    );
    this.target.position.set(nextPos.x, nextPos.y, nextPos.z);
    this.rotationMatrix.lookAt(
      this.target.position,
      this.butterfly.position,
      this.butterfly.up,
    );
    this.targetQuaternion.setFromRotationMatrix(this.rotationMatrix);

    const delta = this.context.clock.getElapsedTime();
    if (!this.butterfly.quaternion.equals(this.targetQuaternion)) {
      const step = 0.01 * delta;
      this.butterfly.quaternion.rotateTowards(this.targetQuaternion, step);
    }
  }
}
