precision highp float;

uniform sampler2D u_texture_a;
uniform sampler2D u_texture_b;
uniform float u_time;
uniform float u_mix_value;

varying vec3 v_normal;
varying vec3 v_position;
varying vec2 v_uv;

float remap(float value, float oldMin, float oldMax, float newMin, float newMax) {
    return newMin + (value - oldMin) * (newMax - newMin) / (oldMax - oldMin);
}

float rand(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

#pragma glslify: noise = require('glsl-noise/classic/2d')

void main() {
    float z_distance = 1.0 - v_position.z;
    vec3 white = vec3(
        remap(z_distance, -1.0, 1.0, 0.7, 0.9),
        remap(z_distance, -1.0, 1.0, 0.7, 0.9),
        remap(z_distance, -1.0, 1.0, 0.7, 0.9)
    );
    vec4 color = vec4(white, 1.0);

    vec4 tA = texture2D(u_texture_a, v_uv);
    vec4 tB = texture2D(u_texture_b, v_uv);
    vec4 texture = mix(tA, tB, u_mix_value);

    bool is_white = texture.r > 0.95 && texture.g > 0.9 && texture.b > 0.9;

    // to account for white spots in the character
    bool is_in_character_zone = v_uv.x < 0.41 || v_uv.x > 0.6 || v_uv.y > 0.7;
    if(is_in_character_zone && is_white) {
        color.a = 0.0;
        texture.a = 0.0;
    }

    gl_FragColor = texture * color;
}