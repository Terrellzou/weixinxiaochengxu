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
  
    var faultId=options.faultId
     var that=this
     if(faultId!==null){
        wx.request({
     
      url: global_url+'fault/findFaultByFaultId.do',
     header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      data:{
         fault_id:faultId
        },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res){
         var Info1=res.data.data
         that.setData({
          Info1:Info1
         })
     
      }

     })
     }
     
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
  //只能用全局变量带回来 onshow没有接受id的参数 并且在这个页面多次显示
  var that=this
  wx.request({
     url: global_url+'bus/findBusByBusId.do',
     header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      data:{
         bus_id:app.bus_id
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res){
        var msg=res.data.bus
       var sm=res.data.groups
       console.log(msg)
       console.log(sm)
       var Info={
        car_no:msg.card_no,
        team:sm[msg.group_id].group_name
         }
          that.setData(Info)
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
  confirm:function(){
    console.log(app.fee)
    console.log(app.fault_id)
    console.log(app.bus_id)
    console.log(app.u_id)
    var that=this
    wx.redirectTo({
      url:"../../Carlist/Carlist"
    })
      wx.request({
    url: global_url+'fault/insertIntoRepair.do',
     header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      data:{
         fault_id:app.fault_id,
         fee_s:app.fee,
         apply_person:app.u_id,
         bus_id:app.bus_id
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res){
        console.log(111)
      },
      fail:function(){
          wx.showModal({
            title: "信息提示",
            content: "尚未审核,请联系管理员."
          })
      }
    })
  
  },
  faultselect:function(){
    wx.redirectTo({
      url:"../../CardirectView/CardirectView"
    })
  }

})