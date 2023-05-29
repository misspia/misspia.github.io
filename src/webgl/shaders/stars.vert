precision highp float;
uniform float uPointMultiplier;

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main () {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  
  // float size = random(vec2(0.01, 0.05));
  // gl_PointSize = size * uPointMultiplier / gl_Position.w;
  gl_PointSize = 700.0 / gl_Position.w;
}
