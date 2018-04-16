Page({
  data: {
    array: ['黑E12345', '粤A12345', '粤L12345', '粤B12345'],
    objectArray: [
      {
        id: 0,
        name: '黑E12345'
      },
      {
        id: 1,
        name: '粤A12345'
      },
      {
        id: 2,
        name: '粤L12345'
      },
      {
        id: 3,
        name: '粤B12345'
      }

    ],
    index: 0,
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //页面也加载的时候就接收到上一级传过来的参数并发送请求导数据苦衷查询对应的信息渲染到页面上
  onLoad: function (options) {
    //接收传过来的u_id
    var u_id = options.u_id
    // console.log(options.u_id)
    var that = this
    //接下来发送ajax请求到后台数据库查找u_id对应的driver的信息
    wx:wx.request({
      url: 'https://qichuang.mynatapp.cc/Weixinapp/driver/findDriverByUid.do',
      data: {
        u_id:u_id  
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        
      },
      fail: function(res) {
        wx:wx.showToast({
          title: '服务器网络错误,请稍后重试',

          icon: 'loading',
          
          duration: 1500,
         
        })
      },
      complete: function(res) {

      },
    })
 
    
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  }
})		