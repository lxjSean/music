//app.js
App({
  onLaunch: function() {
    try {
      this.globalData.devicePlatform = wx.getSystemInfoSync()
      console.log(res.platform)
    } catch (e) {
      // Do something when catch error
    }
  },
  
  globalData: {
    devicePlatform: ''
  }
})