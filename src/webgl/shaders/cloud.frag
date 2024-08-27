precision highp float;

uniform sampler2D diffuseTexture;

varying float vAlpha;

void main() {
    vec4 texture = texture2D(diffuseTexture, gl_PointCoord);
    vec4 color = vec4(1.0, 1.0, 1.0, vAlpha);

    gl_FragColor = color * texture;
}
