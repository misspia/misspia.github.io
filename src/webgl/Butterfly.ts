import * as THREE from "three";
import { butterflyWing } from "@assets";
import { toRadians, randomFloatBetween } from "@utils";

const WING_WIDTH = 1;
const MIN_WING_ROTATION_VELOCITY = 0.2;
const MAX_WING_ROTATION_VELOCITY = 0.4;
const MAX_WING_ROTATION_RADIANS = toRadians(80);

// https://www.youtube.com/watch?v=WkbI48OZKV8

// wing samples
// https://png.pngtree.com/png-clipart/20210907/ourmid/pngtree-blue-butterfly-wings-png-image_3877385.jpg
// https://www.shutterstock.com/image-vector/butterfly-wings-hand-painting-this-600nw-1944718960.jpg
// https://thumbs.dreamstime.com/z/butterfly-two-face-silhouette-faces-wings-abstract-design-55821184.jpg
export class Butterfly {
  private wingRotationDirection: number;
  private wingRotationSpeed: number;
  private wingRotation: number;
  private wing1: THREE.Mesh;
  private wing2: THREE.Mesh;
  private material: THREE.Material;
  public group: THREE.Group;
  constructor() {
    this.wingRotationDirection = 1;
    this.wingRotationSpeed = randomFloatBetween(
      MIN_WING_ROTATION_VELOCITY,
      MAX_WING_ROTATION_VELOCITY,
    );
    this.wingRotation = 0;

    this.material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(butterflyWing),
      transparent: true,
      side: THREE.DoubleSide,
    });

    const wing1Geometry = new THREE.PlaneGeometry(WING_WIDTH, WING_WIDTH * 1.3);
    const wing2Geometry = wing1Geometry.clone();

    this.wing1 = new THREE.Mesh(wing1Geometry, this.material);
    this.wing2 = new THREE.Mesh(wing2Geometry, this.material);

    this.wing1.position.set(WING_WIDTH / 2, 0, 0);
    this.wing2.position.set(-WING_WIDTH / 2, 0, 0);
    this.wing2.rotation.set(0, toRadians(180), 0);

    this.group = new THREE.Group();
    this.group.add(this.wing1);
    this.group.add(this.wing2);
  }

  get position() {
    return this.group.position;
  }

  update() {
    if (this.wingRotation >= MAX_WING_ROTATION_RADIANS) {
      this.wingRotationDirection = -this.wingRotationDirection;
    }

    this.wingRotation += this.wingRotationSpeed * this.wingRotationDirection;
    this.wing1.rotation.y = this.wingRotation;
    this.wing2.rotation.y = -this.wingRotation;
  }
}
