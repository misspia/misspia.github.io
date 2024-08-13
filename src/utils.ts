import * as THREE from "three";

export const clamp = (min: number, max: number, value: number): number =>
  Math.min(Math.max(value, min), max);

export const remap = (
  min1: number,
  max1: number,
  min2: number,
  max2: number,
  value: number,
) => min2 + ((max2 - min2) * (value - min1)) / (max1 - min1);

export const reverseRemap = (
  min1: number,
  max1: number,
  min2: number,
  max2: number,
  value: number,
): number => remap(min1, max1, min2, max2, max1 - value);

export const remapFreq = (min: number, max: number, value: number): number =>
  remap(0, 255, min, max, value);

export const reverseRemapFreq = (
  min: number,
  max: number,
  value: number,
): number => remap(0, 255, min, max, 255 - value);

export const toRadians = (degrees: number): number => (degrees * Math.PI) / 180;

export const calcCircumference = (radius: number): number =>
  2 * Math.PI * radius;

export const getCenter = (
  obj3d: THREE.Object3D,
  target: THREE.Vector3,
): void => {
  new THREE.Box3().setFromObject(obj3d).getCenter(target);
};

export const randomFloatBetween = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

export const randomIntBetween = (min: number, max: number): number =>
  Math.round(randomFloatBetween(min, max));

export const randomBool = (): boolean => Math.random() >= 0.5;

export const weightedRandomBool = (trueWeight: number): boolean =>
  Math.random() <= trueWeight;

export const randomSign = (): 1 | -1 => (Math.random() >= 0.5 ? 1 : -1);

export const weightedRandomSign = (positiveWeight: number): 1 | -1 =>
  weightedRandomBool(positiveWeight) ? 1 : -1;

export const lerp = (a: number, b: number, t: number): number =>
  a * (1 - t) + b * t;

export const cross = (a: THREE.Vector3, b: THREE.Vector3) => {
  return {
    x: a.y * b.z - a.z * b.y,
    y: a.z * b.x - a.x * b.z,
    z: a.x * b.y - a.y * b.x,
  };
};

export const isMobile =
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/webOS/i) ||
  navigator.userAgent.match(/iPhone/i) ||
  navigator.userAgent.match(/BlackBerry/i) ||
  navigator.userAgent.match(/Windows Phone/i);
