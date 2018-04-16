Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: { p_id: 1, p_id: 1, p_id: 1 },
    page:"1",

    //用于显示加载图标的变量
    hidden:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      hidden:false
    })
    console.log("已经返回了这个页面")
    var that = this
    var page = this.data.page
    //发送ajax请求分页显示bus的所有信息
    wx:wx.request({
      url: 'https://qichuang.mynatapp.cc/Weixinapp/bus/findAllBusByPage.do',
      data: {
        page: page
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',
      dataType: 'json',
      
      success: function(res) {
        
        // console.log("成功发送")
        console.log(res.data)
        that.setData({
          car_list: res.data.lists
        })
        page++
        that.setData({
          hidden: true
        })

      },
      fail: function(res) {

      },
      complete: function(res) {

      },
    })
   
  },
  //搜索列表功能
  onBindFocus:function(event){
    var that=this
    that.setData({  
      display: "block"  
    })  
  },
   hideview: function() {  
    var that=this
    that.setData({  
      display: "none"  
    })  
  },

  search:function(){

  },

  //滚动到底部/右边，会触发 scrolltolower 事件
  scrolltolower: function () {
    // console.log("触发了下拉加载事件")

    this.setData({
      hidden:false
    })
    var that = this
    var page = this.data.page
    page++
    //发送ajax请求
    wx: wx.request({
      url: 'https://qichuang.mynatapp.cc/Weixinapp/bus/findAllBusByPage.do',
      data: {
        page: page
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',
      dataType: 'json',

      success: function (res) {

        // console.log("成功发送")
        console.log(res.data)
        that.setData({
          car_list: res.data.lists
        })
        page++
        that.setData({
          hidden:true
        })
      },
      fail: function (res) {

      },
      complete: function (res) {

      },
    })

  },

  //滚动到顶部/左边，会触发 scrolltoupper 事件
  scrolltoupper: function () {
    // console.log("触发了上拉刷新动作")

    this.setData({
      hidden:false
    })

    var that = this
    var page = 1
    //发送ajax请求
    wx: wx.request({
      url: 'https://qichuang.mynatapp.cc/Weixinapp/bus/findAllBusByPage.do',
      data: {
        page: page
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',
      dataType: 'json',

      success: function (res) {

        // console.log("成功发送")
        console.log(res.data)
        that.setData({
          car_list: res.data.lists
        })

        that.setData({
          hidden: true
        })
      },
      fail: function (res) {

      },
      complete: function (res) {

      },
    })

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

 

  

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
 carinfo: function (e) {
    var bus_id = e.currentTarget.id
    // console.log(bus_id)
    wx.navigateTo({
      url: "CarInfoDetail/CarInfoDetail?bus_id="+bus_id
    })
  }
})