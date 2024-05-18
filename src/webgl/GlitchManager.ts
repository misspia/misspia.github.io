import * as THREE from "three";

/**
 * Shaders
 * - https://www.shadertoy.com/view/Md2GDw
 * - https://www.shadertoy.com/view/sld3Dn
 * - https://www.shadertoy.com/view/MtXBDs
 * - https://www.shadertoy.com/view/MlVSD3
 * - https://www.shadertoy.com/view/MtXBDs
 * - https://www.shadertoy.com/view/Md3cWN
 * - https://www.shadertoy.com/view/XtyXzW (complex)
 * 
 * 
 * Transitions
 * - https://github.com/akella/webGLImageTransitions/blob/master/js/sketch.js
 *    - https://tympanus.net/Development/webGLImageTransitions/index5.html
 * - https://github.com/mrdoob/three.js/blob/master/examples/webgl_postprocessing_crossfade.html
 * - https://www.shadertoy.com/view/WllfRB
 */
export class GlitchManager {
  scene: THREE.Scene;
  renderTarget: THREE.WebGLRenderTarget;
  constructor() {
    this.scene = new THREE.Scene();
    this.renderTarget = new THREE.WebGLRenderTarget(
      window.innerWidth,
      window.innerHeight
    );
  }
  add(object: THREE.Object3D) {
    this.scene.add(object);
  }
}
