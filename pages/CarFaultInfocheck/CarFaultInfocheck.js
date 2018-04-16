var app=getApp();
var global_url=app.global_url

Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var that=this
     var fault_id=options.fault_id

     console.log(fault_id)
     wx.request({
      url:global_url+'fault/findFaultByFaultId.do',
      data: {
        fault_id:fault_id
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res.data.data)
        app.fee=res.data.data.fee
        app.fault_id=res.data.data.fault_id
        console.log(app.fee)
         var faultId=res.data.data.fault_id
          that.setData({
            faultId:faultId
          })
       var  Info=res.data.data
         that.setData({
            Info:Info
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
 confirm:function(e){
   var faultId=e.currentTarget.id
   console.log(faultId)
   wx.redirectTo({
      url:"../index/repairdetail/repairdetail?faultId="+faultId
   })
 }
})