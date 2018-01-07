import { login } from './service/common/index.js';

//app.js
App({
  onLaunch: function () {

    // 登录态处理
    if (wx.getStorageSync('session')) {
      wx.checkSession({
        success: this.getUserInfo.bind(this),
        fail: this.login.bind(this)
      });
    } else {
      this.login();
    }

  },

  login() {
    wx.login({
      success: ({ code }) => {
        wx.showLoading({ title: '正在登录', mask: true });
        login(code)
          .then(session => {
            wx.setStorageSync('session', session);
            wx.hideLoading();
            this.getUserInfo();
          });
      }
    });
  },
  
  getUserInfo() {
    wx.getUserInfo({
      success: ({ userInfo }) => {
        this.globalData.userInfo = userInfo;

        if (typeof this.getUserInfoCb === 'function') {
          this.getUserInfoCb(userInfo);
        }
      },
    });
  },

  globalData: {
    userInfo: null
  }
});
