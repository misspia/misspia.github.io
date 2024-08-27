precision highp float;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

attribute vec2 uv;
attribute vec3 position;
attribute float size;
attribute float alpha;

varying vec2 vUv;
varying float vAlpha;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * (300.0 / -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;

  vUv = uv;
  vAlpha = alpha;
}
