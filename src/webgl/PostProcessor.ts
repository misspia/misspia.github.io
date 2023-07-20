// https://github.com/mrdoob/three.js/blob/master/examples/webgl_postprocessing_unreal_bloom_selective.html#L89
// import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
// import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";

// @ts-ignore
import { EffectComposer } from "three/addons/postprocessing/EffectComposer";
// @ts-ignore
import { RenderPass } from "three/addons/postprocessing/RenderPass";
// @ts-ignore
import { Pass } from "three/addons/postprocessing/Pass";

import { Universe } from "./Universe";

export class PostProcessor {
  context: Universe;
  composer: EffectComposer;
  renderPass: RenderPass;

  constructor(context: Universe) {
    this.context = context;
    this.composer = new EffectComposer(context.renderer);
    this.renderPass = new RenderPass(context.scene, context.camera);
    this.addPass(this.renderPass);
  }

  resize(width: number, height: number) {
    this.composer.setSize(width, height);
  }

  addPass(pass: Pass) {
    this.composer.addPass(pass);
  }

  render() {
    this.composer.render();
  }
}
