import { fade } from '../../modules/pageTransitionAnimation.js';
import { PAGE_TRANSITION_ANIMATION_DURATION } from '../../constants/config.js';

// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageTransitionData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 注册跳转定时器
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
      console.log('redirect');
      // this.redirectTo('/pages/index/index');
    }, PAGE_TRANSITION_ANIMATION_DURATION);
  }
});
