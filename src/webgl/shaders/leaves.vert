precision highp float;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

attribute vec3 position;
attribute vec3 rotation;
attribute float size;
attribute vec2 uv;

varying vec2 vUv;
varying vec3 vRotation;
varying vec2 vAngle;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = size;

  vUv = uv;
  vRotation = rotation;
  // https://github.com/misspia/sketch-014/blob/ee86301380c8cb9c0a24961ae66cce3079547afb/src/shaders/smoke.vert#L26C3-L26C41
  vAngle = vec2(cos(rotation.x), sin(rotation.y));
}
