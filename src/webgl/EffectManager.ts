//@ts-ignore
import { ShaderPass } from "three/addons/postprocessing/ShaderPass";

import { Universe } from "./Universe";
import { PostProcessor } from "./PostProcessor";

import { GlitchPass } from "./GlitchPass";
import { RGBShiftShader } from "./RGBShiftShader";

const RGB_SHIFT_TIME_MULTIPLIER = 80;
const RGB_SHIFT_DISPLACEMENT_MULTIPLIER = 1 / 450;

/**
 * glitch shader
 * https://www.shadertoy.com/view/wld3WN
 */
export class EffectManager {
  pp: PostProcessor;
  context: Universe;
  glitchPass: GlitchPass;
  rgbShiftShaderPass: ShaderPass;

  constructor(context: Universe) {
    this.pp = new PostProcessor(context);
    this.context = context;

    this.glitchPass = new GlitchPass(this.context.glitchInterval);
    this.glitchPass.goWild = true;
    this.pp.addPass(this.glitchPass);

    this.rgbShiftShaderPass = new ShaderPass(RGBShiftShader);
    this.pp.addPass(this.rgbShiftShaderPass);
  }

  get renderPass() {
    return this.pp.renderPass;
  }

  dispose() {
    this.glitchPass.dispose();
  }

  render() {
    this.pp.render();
    this.update();
  }

  update() {
    this.rgbShiftShaderPass.uniforms.amount.value =
      Math.sin(this.context.clock.elapsedTime * RGB_SHIFT_TIME_MULTIPLIER) *
      RGB_SHIFT_DISPLACEMENT_MULTIPLIER;
    this.rgbShiftShaderPass.uniforms.angle.value =
      Math.sin(this.context.clock.elapsedTime * RGB_SHIFT_TIME_MULTIPLIER) *
      RGB_SHIFT_DISPLACEMENT_MULTIPLIER;
  }
}
