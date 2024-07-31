precision highp float;
uniform sampler2D diffuseTexture;

varying vec2 vAngle;
varying float vAlpha;

varying vec2 vUv;
  
  void main() {
    vec2 coords = (gl_PointCoord - 0.5) * mat2(vAngle.x, vAngle.y, -vAngle.y, vAngle.x) + 0.5;
    vec4 flowerTexture = texture2D(diffuseTexture, vUv);
    float alphaMultiplier = flowerTexture.r * flowerTexture.g * flowerTexture.b;
    vec4 color = vec4(1.0, 2.0, 2.0, 0.7 * alphaMultiplier);
    // vec4 color = vec4(1.0, 2.0, 2.0, 0.05 * alphaMultiplier);

    gl_FragColor = texture2D(diffuseTexture, vUv) * color;
  }
