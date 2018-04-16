var app=getApp();
var global_url=app. global_url
Page({

  /**
   * 页面的初始数据
   */
  data: {
      index:0,
      systemarray:[],
      system_id:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.request({
      method:"get",
      dataType:"json",
      url:  global_url+'bus/findAllBusSystem.do', //仅为示例，并非真实的接口地址 
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res){
         var msg=res.data.data
         var length=msg.length
         console.log(msg)
        
        var  systemarray=[];
        for(var i=0;i<length;i++){
           systemarray.push(msg[i].system_name)
           }
        that.setData({
          systemarray:systemarray
        })

       }
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
   bindPickerChange: function(e) {
    this.setData({
      index: e.detail.value
    })
    this.setData({
      system_id:e.detail.value
    })
  },
  faultinput:function(e){
    var that=this
    that.setData({
      fault:e.detail.value
    })
  },
    feeinput:function(e){
    var that=this
    that.setData({
      fee:e.detail.value
    })
  },
   timeinput:function(e){
    var that=this
    that.setData({
      time:e.detail.value
    })
  },
  des:function(e){
    description:e.detail.value
  },
  save:function(){
    var that=this
    wx.request({
      method:"post",
      dataType:"json",
      url: global_url+'fault/insertIntoFault.do', //仅为示例，并非真实的接口地址 
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      data:{
        system_id:that.data.system_id,
        fault_name:that.data.fault,
        fee_time:that.data.time,
        fee:that.data.fee
      },
      success: function (res){
          wx.navigateTo({
            url:'../CarFaultManage'
          })
      }
    })
  }
})