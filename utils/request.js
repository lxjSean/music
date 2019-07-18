// api.js
const BASE_URL = 'http://musicapi.leanapp.cn';
const request = (url, data) => {
  let _url = BASE_URL + url;
  wx.showLoading({
    title: '加载中',
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: _url,
      method: "get",
      data: data,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success(request) {
        resolve(request.data)

      },
      fail(error) {
        reject(error)
      },
      complete(){
        wx.hideLoading()
      }
    })
  });
}


module.exports = {
  getBanner: (data) => {
    return request('/banner', data)//个性推荐轮播
  },
}
