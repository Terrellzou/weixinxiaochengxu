var app=getApp()
var  global_url=app.global_url

Page({
  data: {
    page:1,
    hidden:true
  },
  //页面加载的时候出发的事件-发送请求到数据库中查找驾驶员的有关信息渲染到页面上
  onLoad: function (options) {
    this.setData({
      hidden:false
    })
    var that = this
    var page = this.data.page
    //发送请求到数据库中查询相关的驾驶信息-带分页的
    wx:wx.request({
      url: global_url+'driver/findAllDriverByPage.do',
      data: {
        page:page
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',
      dataType: 'json',
     
      success: function(res) {
        //成功后设置相应的参数
        console.log(res.data.lists)
        that.setData({
          driver: res.data.lists
        })
        page++
        that.setData({
          hidden: true
        })
      },
      fail: function(res) {
        //失败的时候给个友好的提示
        wx.showToast({

          title: '服务器网络错误!',

          icon: 'loading',

          duration: 1500

        })
      },
      
      complete: function(res) {

      },
    })
  },
  //滚动到底部/右边，会触发 scrolltolower 事件
  scrolltolower: function () {
    this.setData({
      hidden:false
    })
    // console.log("已经到了底部")
    console.log(this.data.page)
    var that = this
    var page = this.data.page
    var page = this.data.page
    page++
    // console.log(page)

    //发送请求到数据库中查询相关的驾驶信息-带分页的
    wx: wx.request({
      url: 'https://qichuang.mynatapp.cc/Weixinapp/driver/findAllDriverByPage.do',
      data: {
        page: page
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',
      dataType: 'json',

      success: function (res) {
        //成功后设置相应的参数
        console.log(res.data.lists)
        that.setData({
          driver: res.data.lists
        })
        page++
        that.setData({
          hidden:true
        })
      },
      fail: function (res) {
        //失败的时候给个友好的提示
        wx.showToast({

          title: '服务器网络错误!',

          icon: 'loading',

          duration: 1500

        })
      },

      complete: function (res) {

      },
    })

  },

  //滚动到顶部/左边，会触发 scrolltoupper 事件
  scrolltoupper: function () {
    this.setData({
      hidden:false
    })
    // console.log("已经到了顶部")
    var that = this
    var page = 1

    //发送请求到数据库中查询相关的驾驶信息-带分页的
    wx: wx.request({
      url: 'https://qichuang.mynatapp.cc/Weixinapp/driver/findAllDriverByPage.do',
      data: {
        page: page
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',
      dataType: 'json',

      success: function (res) {
        //成功后设置相应的参数
        console.log(res.data.lists)
        that.setData({
          driver: res.data.lists
        })
        page++
        that.setData({
          hidden:true
        })
      },
      fail: function (res) {
        //失败的时候给个友好的提示
        wx.showToast({

          title: '服务器网络错误!',

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
  //点击列表的某一行跳转到下一个页面显示出港行的详细信息
  driverinfo: function (e) {
    // console.log("js中已经收到数据了" + e.currentTarget.id)
    var uId = e.currentTarget.id
    // console.log(uId)
    //注意传过来的参数中u_id后面不能有空格
    wx.navigateTo({
      url: "driverinfo/driverinfo?u_id="+uId
    })
  }
})		