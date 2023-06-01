import { Universe } from "./Universe";
import { PostProcessor } from "./PostProcessor";

import { GlitchPass } from "./GlitchPass";

export class EffectManager {
  pp: PostProcessor;
  context: Universe;
  glitchPass: GlitchPass;
  constructor(context: Universe) {
    this.pp = new PostProcessor(context);
    this.context = context;

    this.glitchPass = new GlitchPass(this.context.glitchInterval);
    this.pp.addPass(this.glitchPass);
  }
  dispose() {
    this.glitchPass.dispose();
  }

  render() {
    this.pp.render();
  }
}
