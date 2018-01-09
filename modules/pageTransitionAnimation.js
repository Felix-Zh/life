import { PAGE_TRANSITION_ANIMATION_DURATION } from '../constants/config.js';

export const fade = {
  in() {
    const animation = wx.createAnimation({
      duration: PAGE_TRANSITION_ANIMATION_DURATION,
      timingFunction: 'ease'
    });
    
    animation.opacity(0).step({ duration: 20 }).opacity(1).step();

    return animation;
  },
  out() {
    const animation = wx.createAnimation({
      duration: PAGE_TRANSITION_ANIMATION_DURATION,
      timingFunction: 'ease'
    });
    
    animation.opacity(0).step();

    return animation;
  }
};
