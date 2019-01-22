precision highp float;

attribute vec3 position;

uniform float time;
uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

varying vec3 vColor;

void main() {
   gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}