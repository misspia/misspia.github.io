precision highp float;

uniform sampler2D diffuseTexture;

varying vec2 vAngle;
varying float vAlpha;

void main() {
    // https://www.shadertoy.com/view/fdjGRD
    // https://github.com/misspia/sketch-014/blob/ee86301380c8cb9c0a24961ae66cce3079547afb/src/shaders/smoke.frag#L22
    vec2 coords = (gl_PointCoord - 0.5) * mat2(vAngle.x, vAngle.y, -vAngle.y, vAngle.x) + 0.5;
    // vec2 coords = (gl_PointCoord - 0.5) + 0.5;
    vec4 texture = texture2D(diffuseTexture, coords);
    vec3 color = vec3(1.0, 1.0, 1.0);

    gl_FragColor = vec4(color, vAlpha * texture.a);
}
