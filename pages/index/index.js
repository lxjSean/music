//index.js
//获取应用实例
const API = require('../../utils/request.js')
const app = getApp()

Page({
  data: {
    banner: [],
  },

  onLoad: function() {
    let type 
    if (app.globalData.devicePlatform){
      type = app.globalData.devicePlatform == 'android'?'1':'2'
    }
    API.getBanner({
      type: type
    }).then(res => {
      if (res.code === 200) { //更加严谨
        this.setData({
          banner: res.banners
        })
      }
      console.log(this.data.banner)
    })
  }

})