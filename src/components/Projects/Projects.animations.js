import gsap, { Power2 } from 'gsap';

export function fadeIn(wrapper) {
  gsap.set(wrapper,  {
    autoAlpha: 0,
  });
  gsap
    .to(wrapper, 1, {
      delay: 0.2,
      autoAlpha: 1,
      ease: Power2.easeIn,
    });
}
