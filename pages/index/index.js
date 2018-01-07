//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: null,
    motto: 'Hello World',
  },

  onLoad: function () {
    const { globalData } = app;

    if (globalData.userInfo) {
      this.getUserInfoSuccess();
    } else {
      app.getUserInfoCb = this.getUserInfoSuccess.bind(this);
    }
  },

  getUserInfo() {
    wx.getUserInfo({
      success: ({ userInfo }) => {
        app.globalData.userInfo = userInfo;
        this.getUserInfoSuccess();
      }
    });
  },
  
  getUserInfoSuccess() {
    this.setData({ userInfo: app.globalData.userInfo });
  }
})
