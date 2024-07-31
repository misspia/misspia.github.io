precision highp float;

// uniform mat4 projectionMatrix;
// uniform mat4 modelViewMatrix;

// attribute vec2 uv;
// attribute vec3 position;
// attribute float size;
// attribute float alpha;

// varying vec2 vUv;
varying vec2 vAngle;
// varying float vAlpha;

// void main() {
//   vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
//   gl_Position = projectionMatrix * mvPosition;
//   gl_PointSize = size;

//   vUv = uv;
//   // https://github.com/misspia/sketch-014/blob/ee86301380c8cb9c0a24961ae66cce3079547afb/src/shaders/smoke.vert#L26C3-L26C41
//   // vAngle = vec2(cos(rotation), sin(rotation));
//   vAngle = vec2(cos(3.14), sin(3.14));
//   vAlpha = alpha;
// }

varying vec2 vUv;
uniform float time;

void main() {
    // VERTEX POSITION
  vec4 mvPosition = vec4(position, 1.0);
    #ifdef USE_INSTANCING
  mvPosition = instanceMatrix * mvPosition;
    #endif

    // DISPLACEMENT
    // here the displacement is made stronger on the blades tips.
  float dispPower = 1.0 - cos(uv.y * 3.1416 / 2.0);

  float displacement = sin(mvPosition.z + time * 10.0) * (0.1 * dispPower);
  mvPosition.z += displacement;

    //

  vec4 modelViewPosition = modelViewMatrix * mvPosition;
  gl_Position = projectionMatrix * modelViewPosition;

  vAngle = vec2(cos(3.14), sin(3.14));
  vUv = uv;

}
