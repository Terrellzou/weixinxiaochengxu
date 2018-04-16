 var app=getApp()
 var common=require('../login/register/register.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    siba:"common.Info.isshow" 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        var data=[{
    admin:"管理员",
    date:"2018-03-13",
    description:" 发动机异常响声",
    fee:"50"
  }]
  this.setData({
    index_key:data
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
     if(!app.power){
      wx.showModal({
            title: "信息提示",
            content: "尚未审核,请联系管理员.",
            success:function(res){
              if(res.confirm){
                wx.switchTab({
              url:"../myself/myself"
                })
              }
            }
          })
      
    }
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
  learnmedia:function(){
    wx.navigateTo({
      url:"learnmedia/learnmedia"
    })
  }
})