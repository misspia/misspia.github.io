precision highp float;

uniform sampler2D diffuseTexture;

varying vec2 vAngle;
varying float vAlpha;

void main() {
    vec2 coords = (gl_PointCoord - 0.5) * mat2(vAngle.x, vAngle.y, -vAngle.y, vAngle.x) + 0.5;
    vec4 texture = texture2D(diffuseTexture, coords);
    vec4 color = vec4(5.0, 3.0, 3.0, 1.0);

    gl_FragColor = color * texture;
}
