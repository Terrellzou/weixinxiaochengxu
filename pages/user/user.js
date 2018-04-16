Page({
  data: {
    page:"1"
  },

  //页面加载的时候发送请求来查询用户的相关信息,显示到页面上
  onLoad: function (options) {
    
    var that = this
    var page = this.data.page

    wx:wx.request({
      url: 'https://qichuang.mynatapp.cc/Weixinapp/user/findAllUserByPage.do',
      data: ({
        page:page,
      }),
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',
      dataType: 'json',
      
      success: function(res) {
//        console.log("成功")
        console.log(res.data.lists)
        that.setData({
          user_key: res.data.lists
          
        })
        page++
      },
      fail: function(res) {
        wx.showToast({

          title: '服务器网络错误,请稍后重试',

          icon: 'loading',

          duration: 1500

        })
      },
      complete: function(res) {

      },
    })

    
  },
  //滚动到底部/右边，会触发 scrolltolower 事件
  scrolltolower:function(){
//    console.log("下拉刷新")

    var that = this
    var page = this.data.page
    page++
    wx: wx.request({
      url: 'https://qichuang.mynatapp.cc/Weixinapp/user/findAllUserByPage.do',
      data: ({
        page: page
      }),
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',
      dataType: 'json',

      success: function (res) {
//        console.log("成功")
//        console.log(res.data)
        that.setData({
          user_key: res.data.lists
        })
        page++
      },
      fail: function (res) {
        wx.showToast({

          title: '服务器网络错误,请稍后重试',

          icon: 'loading',

          duration: 1500

        })
      },
      complete: function (res) {

      },
    })


  },
  //滚动到顶部/左边，会触发 scrolltoupper 事件
  scrolltoupper:function(){
//    console.log("上拉加载")

    var that = this
    var page = 1

    wx: wx.request({
      url: 'https://qichuang.mynatapp.cc/Weixinapp/user/findAllUserByPage.do',
      data: ({
        page: page
      }),
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',
      dataType: 'json',

      success: function (res) {
//        console.log("成功")
//        console.log(res.data)
        that.setData({
          user_key: res.data.lists
        })
      
      },
      fail: function (res) {
        wx.showToast({

          title: '服务器网络错误,请稍后重试',

          icon: 'loading',

          duration: 1500

        })
      },
      complete: function (res) {

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

  },
  //当点击用户详情的时候,直接把当前的u_id传到下个页面
  userinfo: function (e) {
    // console.log(e.currentTarget.id)
    var uId = e.currentTarget.id
    // console.log(uId)
    wx.navigateTo({
      url: "userinfo/userinfo?u_id="+uId,
    })
  
    
  }
})		