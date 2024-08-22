precision highp float;

varying vec2 vUv;

float remap(float value, float oldMin, float oldMax, float newMin, float newMax) {
    return newMin + (value - oldMin) * (newMax - newMin) / (oldMax - oldMin);
}

void main() {
    vec3 color = vec3(0.28, 0.69, 0.85);
    vec2 nUv = abs(vUv);
    float dist = length(nUv);
    float alpha = 1.0;

  float threshold = 0.2;
  // if(nUv.x > threshold) {
  //   alpha = 1.0 - remap(nUv.x, threshold, 0.5, 0.0, 1.0);
  // } else if(nUv.y > threshold) {
  //   alpha = 1.0 - remap(nUv.y, threshold, 0.5, 0.0, 1.0);
  // }

  if(dist > threshold) {
    alpha = 1.0 - remap(dist, threshold, 0.5, 0.0, 1.0);
  }
  // if(vUv.y < -0.3) {
  //   alpha = 0.0;
  // }
   alpha *= 0.6;

    gl_FragColor = vec4(color, alpha);
}
