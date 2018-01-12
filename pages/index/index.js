import bmap from '../../libs/bmap-wx.min.js';
import { BAIDU_MAP_API_APP_KEY } from '../../constants/index.js';


Page({

  /**
   * 页面的初始数据
   */
  data: {
    weatherData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWeather();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  getWeather() {
    const BMap = new bmap.BMapWX({
        ak: BAIDU_MAP_API_APP_KEY
    });

    BMap.weather({
        fail: err => {
          this.setData({ weatherData: { err: true, message: err } });
        },
        success: ({ currentWeather }) => {
          const [weatherData] = currentWeather;

          this.setData({ weatherData });
        }
    });
  }
})
