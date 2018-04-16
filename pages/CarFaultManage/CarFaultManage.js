const { Tab, extend } = require('../../dist/index');
var app=getApp()
var global_url=app.global_url
Page(extend({}, Tab,{

  data: {
      tab3: {
      list: [{
        id: '1',
        title: '正后视'
      }, {
        id: '2',
        title: '顶视'
      }, {
        id: '3',
        title: '侧视'
      }],
     
      scroll: true,
      height: 45
    },
    imgSrc:"../../images/view3.png",
  
    selectedId: '1',
    pro:""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
   
     wx.request({
     url: global_url+'fault/findFaultBySystemId.do',
     header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      data:{
        system_view:that.data.selectedId
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res){
     var pro=res.data.data
      
       // if(msg.system_id==1){
        // var pro=[{
        //     problem:msg.fault_name,
        //     repair_fee:msg.fee
        // }]
      that.setData({
           pro:pro
      })
      console.log(pro)
        // }
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

  handleZanTabChange(e) {
    var componentId = e.componentId;
    var selectedId = e.selectedId;
    var that=this
   
     wx.request({
     url: global_url+'fault/findFaultBySystemId.do',
     header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      data:{
        system_view:selectedId
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res){
     var pro=res.data.data
      
       // if(msg.system_id==1){
        // var pro=[{
        //     problem:msg.fault_name,
        //     repair_fee:msg.fee
        // }]
      that.setData({
           pro:pro
      })
      console.log(pro)
        // }
      }
     })


   that.setData({
      [`${componentId}.selectedId`]: selectedId
    });
   that.setData({
    selectedId:selectedId
   })

  },
 
  check:function(event){
     var that=this
    console.log(event)
   var system_id=event.target.dataset.systemid
     wx.request({
     url: global_url+'fault/findBySystemId.do',
     header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      data:{
        system_id:system_id
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res){
        console.log(res)
        //获取对象的属性
        var pro=res.data.data
      that.setData({
           pro:pro
      })
     // var msg=res.data
     // console.log(msg)
        // }
      }
     })
  },
  addpro:function(){
    var that=this
    wx.navigateTo({
      url:"./CarFaultInfo/CarFaultInfo"
    })

  },
   checkFault:function(e){
   var fault_id=e.currentTarget.dataset.id
   console.log(fault_id)
   wx.redirectTo({
      url: "./CarFaultInfoConfirm/CarFaultInfoConfirm?fault_id="+fault_id
    })
 }
}))