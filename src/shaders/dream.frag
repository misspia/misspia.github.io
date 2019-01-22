precision highp float;

varying vec3 vColor;
varying vec3 vNormal;

void main() {
    gl_FragColor = vec4(vColor, 1.0);
}