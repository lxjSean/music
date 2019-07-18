//app.js
App({
  onLaunch: function () {
    try {
      this.globalData.devicePlatform = wx.getSystemInfoSync()
    } catch (e) {
      // Do something when catch error
    }
  },
  globalData: {
    devicePlatform: ''
  }
})