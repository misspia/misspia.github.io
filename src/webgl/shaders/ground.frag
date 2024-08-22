precision highp float;

varying vec2 vUv;
varying float vDistance;

float remap(float value, float oldMin, float oldMax, float newMin, float newMax) {
    return newMin + (value - oldMin) * (newMax - newMin) / (oldMax - oldMin);
}

void main() {
    vec3 color = vec3(0.1, 0.25, 0.02);
    float normalizedDistance = remap(vDistance, 0.0, 1.7, 0.0, 1.0);
    float alpha = 1.0;

    float threshold = 0.8;
    if(normalizedDistance > threshold) {
      alpha = 1.0 - remap(normalizedDistance, threshold, 1.0, 0.0, 1.0);
    }

    alpha *= 0.4;

    gl_FragColor = vec4(color, alpha);
}
