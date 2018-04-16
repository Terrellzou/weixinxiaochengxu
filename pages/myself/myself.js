
var app=getApp()
var  global_url=app.global_url
Page({

  data: {
      username:"",
      url:"",
      Info:[{}]
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     
    
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
    var that=this
     var type=app.type
     that.setData({
      username:app.name
     })
     console.log(that.data.username)
        wx.setStorage({
        key:"key",
        data:app.type
       })
    console.log(app.type)
    wx.getStorage({
      key:'key',
      success:function(res){
      console.log(res.data)
      wx.request({
      url: global_url+'user/accessByUtype.do',
     header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },

      data:{
          u_type:type
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res){
        var skipInfo= res.data.data
      
        that.setData({
            Info:skipInfo
        })
      }
    })

      }
    })
  
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  personalinfo:function(){
    wx.navigateTo({
      url:"./personalinfo/personalinfo"
    })
  },
  skip:function(event){
    var url1=event.currentTarget.dataset.skipid
    console.log(url1)
     wx.navigateTo({
      url:url1
     })
     
  },
        logoff:function(){
  //   wx.removeStorage({
  //    key: 'key',
  // success: function(res) {
  wx.navigateTo({
      url:"../login/login"
    })
//   } 
// })

    
  },
})