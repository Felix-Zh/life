import { getWeather } from '../../service/weather/index.js';
import { promisify } from '../../utils/utils.js';
import { WEATHER_BG_CLASS_NAME } from './constants.js';


Page({

  /**
   * 页面的初始数据
   */
  data: {
    weather: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLocationAndWeather();
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

  getLocationAndWeather() {
    promisify(wx.getLocation)()
      .then(location => {
        return getWeather(`${location.latitude},${location.longitude}`);
      })
      .then(({ basic, now }) => {
        this.setData({ weather: {
          ...now,
          location: basic,
          weatherClassName: getWeatherClassName(+now.cond_code)
        }});
      });
  }
});

const getWeatherClassName = condCode =>
  Object.keys(WEATHER_BG_CLASS_NAME).find(key => WEATHER_BG_CLASS_NAME[key].includes(condCode)) ||
  'default';
