Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: { p_id: 1, p_id: 1, p_id: 1 }  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var data=[{
        driver:"未分配司机",
        bus_id:"黑E123456",
        repair_fee:"30",
        group_id:"十一车队"

    }]
   this.setData({
     car_list:data
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
carinfo:function(){
  wx.navigateTo({
    url:"CarInfoDetail/CarInfoDetail"
  })
},
search:function(){
  
}
})