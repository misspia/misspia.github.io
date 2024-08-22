import * as THREE from "three";
import { isMobile, randomFloatBetween } from "@utils";
import { Universe } from "@webgl/Universe";
import { grassBladeAlpha, grassBladeDiffuse, perlinFbm } from "@assets";
import fragmentShader from "@webgl/shaders/grass.frag";
import vertexShader from "@webgl/shaders/grass.vert";

//Patch side length
const WIDTH = 10;
const RESOLUTION = 64;
const DELTA = WIDTH / RESOLUTION;
const MIN_RADIUS = 0.1;
const MAX_RADIUS = 1.5;

const NUM_BLADE_INSTANCES = isMobile ? 100 : 300;
const AMBIENT_STRENGTH = 0.7;
const TRANSLUCENCY_STRENGTH = 1.5;
const SPECULAR_STRENGTH = 0.5;
const DIFFUSE_STRENGTH = 1.5;
const SHININESS = 256;
const SUN_COLOR = new THREE.Vector3(1.0, 1.0, 0.5);
const SPECULAR_COLOR = new THREE.Vector3(1.0, 1.0, 1.0);

//The global coordinates
//The geometry never leaves a box of width*width around (0, 0)
//But we track where in space the camera would be globally
var POS = new THREE.Vector2(0.01, 0.01);

// blade mesh
const BLADE_JOINTS = 4;
const BLADE_HEIGHT = 0.4;
const BLADE_WIDTH = BLADE_HEIGHT / 8.33;

//Sun
//Height over horizon in range [0, PI/2.0]
var ELEVATION = 0.2;
//Rotation around Y axis in range [0, 2*PI]
var AZIMUTH = 0.4;

// https://codepen.io/al-ro/pen/GRJzYQK?editors=1010
// https://codesandbox.io/s/grass-shader-forked-okub75?file=/src/GrassMaterial.js
export class Grass {
  context: Universe;
  viewDirection: THREE.Vector3;
  geometry: THREE.InstancedBufferGeometry;
  material: THREE.RawShaderMaterial;
  group: THREE.Mesh;
  constructor(context: Universe) {
    this.context = context;
    this.viewDirection = new THREE.Vector3();

    this.geometry = new THREE.InstancedBufferGeometry();
    this.createGrassInstances();

    const loader = new THREE.TextureLoader();
    const grassTexture = loader.load(grassBladeDiffuse);
    const alphaMap = loader.load(grassBladeAlpha);
    const noiseTexture = loader.load(perlinFbm);

    this.material = new THREE.RawShaderMaterial({
      uniforms: {
        time: { value: 0 },
        delta: { value: DELTA },
        posX: { value: POS.x },
        posZ: { value: POS.y },
        radius: { value: 0 },
        width: { value: WIDTH },
        map: { value: grassTexture },
        alphaMap: { value: alphaMap },
        noiseTexture: { value: noiseTexture },
        sunDirection: {
          value: new THREE.Vector3(
            Math.sin(AZIMUTH),
            Math.sin(ELEVATION),
            -Math.cos(AZIMUTH),
          ),
        },
        cameraPosition: { value: this.context.camera.position },
        ambientStrength: { value: AMBIENT_STRENGTH },
        translucencyStrength: { value: TRANSLUCENCY_STRENGTH },
        diffuseStrength: { value: DIFFUSE_STRENGTH },
        specularStrength: { value: SPECULAR_STRENGTH },
        shininess: { value: SHININESS },
        lightColour: { value: SUN_COLOR },
        specularColour: { value: SPECULAR_COLOR },
      },
      vertexShader,
      fragmentShader,
      side: THREE.DoubleSide,
    });
    this.group = new THREE.Mesh(this.geometry, this.material);
  }

  get position() {
    return this.group.position;
  }

  get uniforms() {
    return this.material.uniforms;
  }

  createGrassInstances() {
    const grassBaseGeometry = new THREE.PlaneGeometry(
      BLADE_WIDTH,
      BLADE_HEIGHT,
      1,
      BLADE_JOINTS,
    );
    grassBaseGeometry.translate(0, BLADE_HEIGHT / 2, 0);

    //Define the bend of the grass blade as the combination of three quaternion rotations
    let vertex = new THREE.Vector3();
    let quaternion0 = new THREE.Quaternion();
    let quaternion1 = new THREE.Quaternion();
    let x, y, z, w, angle, sinAngle, rotationAxis;

    //Rotate around Y
    angle = 0.05;
    sinAngle = Math.sin(angle / 2.0);
    rotationAxis = new THREE.Vector3(0, 1, 0);
    x = rotationAxis.x * sinAngle;
    y = rotationAxis.y * sinAngle;
    z = rotationAxis.z * sinAngle;
    w = Math.cos(angle / 2.0);
    quaternion0.set(x, y, z, w);

    //Rotate around X
    angle = 0.3;
    sinAngle = Math.sin(angle / 2.0);
    rotationAxis.set(1, 0, 0);
    x = rotationAxis.x * sinAngle;
    y = rotationAxis.y * sinAngle;
    z = rotationAxis.z * sinAngle;
    w = Math.cos(angle / 2.0);
    quaternion1.set(x, y, z, w);

    //Combine rotations to a single quaternion
    quaternion0.multiply(quaternion1);

    //Rotate around Z
    angle = 0.1;
    sinAngle = Math.sin(angle / 2.0);
    rotationAxis.set(0, 0, 1);
    x = rotationAxis.x * sinAngle;
    y = rotationAxis.y * sinAngle;
    z = rotationAxis.z * sinAngle;
    w = Math.cos(angle / 2.0);
    quaternion1.set(x, y, z, w);

    //Combine rotations to a single quaternion
    quaternion0.multiply(quaternion1);

    let quaternion2 = new THREE.Quaternion();

    //Bend grass base geometry for more organic look
    for (
      let v = 0;
      v < grassBaseGeometry.attributes.position.array.length;
      v += 3
    ) {
      quaternion2.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);
      vertex.x = grassBaseGeometry.attributes.position.array[v];
      vertex.y = grassBaseGeometry.attributes.position.array[v + 1];
      vertex.z = grassBaseGeometry.attributes.position.array[v + 2];
      let frac = vertex.y / BLADE_HEIGHT;
      quaternion2.slerp(quaternion0, frac);
      vertex.applyQuaternion(quaternion2);
      grassBaseGeometry.attributes.position.array;
      // @ts-ignore
      grassBaseGeometry.attributes.position.array[v] = vertex.x;
      // @ts-ignore
      grassBaseGeometry.attributes.position.array[v + 1] = vertex.y;
      // @ts-ignore
      grassBaseGeometry.attributes.position.array[v + 2] = vertex.z;
    }
    grassBaseGeometry.computeVertexNormals();

    this.geometry.index = grassBaseGeometry.index;
    this.geometry.attributes.position = grassBaseGeometry.attributes.position;
    this.geometry.attributes.uv = grassBaseGeometry.attributes.uv;
    this.geometry.attributes.normal = grassBaseGeometry.attributes.normal;

    // Each instance has its own data for position, orientation and scale
    var indices = [];
    var offsets = [];
    var scales = [];
    var halfRootAngles = [];

    //For each instance of the grass blade
    for (let i = 0; i < NUM_BLADE_INSTANCES; i++) {
      indices.push(i / NUM_BLADE_INSTANCES);

      //Offset of the roots
      // x = Math.random() * WIDTH - WIDTH / 2;
      // z = Math.random() * WIDTH - WIDTH / 2;
      // y = 0;
      // const radius = randomFloatBetween(MIN_RADIUS, MAX_RADIUS)
      const { x, y, z } = this.getRandCirclePos();
      offsets.push(x, y, z);

      //Random orientation
      let angle = Math.PI - Math.random() * (2 * Math.PI);
      halfRootAngles.push(Math.sin(0.5 * angle), Math.cos(0.5 * angle));

      // Vary height
      if (i % 3 != 0) {
        scales.push(2.0 + Math.random() * 1.25);
      } else {
        scales.push(2.0 + Math.random());
      }
    }

    var offsetAttribute = new THREE.InstancedBufferAttribute(
      new Float32Array(offsets),
      3,
    );
    var scaleAttribute = new THREE.InstancedBufferAttribute(
      new Float32Array(scales),
      1,
    );
    var halfRootAngleAttribute = new THREE.InstancedBufferAttribute(
      new Float32Array(halfRootAngles),
      2,
    );
    var indexAttribute = new THREE.InstancedBufferAttribute(
      new Float32Array(indices),
      1,
    );

    this.geometry.setAttribute("offset", offsetAttribute);
    this.geometry.setAttribute("scale", scaleAttribute);
    this.geometry.setAttribute("halfRootAngle", halfRootAngleAttribute);
    this.geometry.setAttribute("index", indexAttribute);
  }

  // https://github.com/misspia/sketch-014/blob/ee86301380c8cb9c0a24961ae66cce3079547afb/src/SpiritParticle.js#L48
  // https://stackoverflow.com/questions/5300938/calculating-the-position-of-points-in-a-circle
  getRandCirclePos() {
    const radius = randomFloatBetween(MIN_RADIUS, MAX_RADIUS);
    const angle = randomFloatBetween(0, Math.PI * 2);
    return {
      x: radius * Math.cos(angle),
      y: 0,
      z: radius * Math.sin(angle),
    };
  }

  update() {
    this.uniforms.time.value = this.context.clock.getElapsedTime();
  }
}
