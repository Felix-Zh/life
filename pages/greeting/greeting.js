import { fade } from '../../modules/pageTransitionAnimation.js';
import { PAGE_TRANSITION_ANIMATION_DURATION } from '../../constants/config.js';


Page({

  data: {
    pageTransitionData: {}
  },

  onLoad: function (options) {
    this.timer = setTimeout(() => {
      this.redirectToIndex();
    }, 8000);
  },

  handleSightTap() {
    clearTimeout(this.timer);
    this.redirectToIndex();
  },

  redirectToIndex() {
    this.setData({ pageTransitionData: fade.out().export() });
    setTimeout(() => {
      wx.redirectTo({ url: '/pages/index/index' });
    }, PAGE_TRANSITION_ANIMATION_DURATION);
  }
});
