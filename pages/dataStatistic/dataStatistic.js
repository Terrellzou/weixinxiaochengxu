const { Tab, extend } = require('../../dist/index');
Page(extend({}, Tab,{

  /**
   * 页面的初始数据
   */
  data: {
      yearindex:"",
      monthindex:"",
      yeararray:["2017年","2018年","2019年"],
      montharray:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月",],
      tab3: {
      list: [{
        id: '1',
        title: '车辆'
      }, {
        id: '2',
        title: '修理工'
      }],
      selectedId: '1',
      scroll: true,
      height: 45
    },
    Info:""

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
    var that=this
    that.setData({
      yearindex: e.detail.value
    })
},
  bindPickerChange1: function(e) {
    var that=this
    that.setData({
      monthindex:e.detail.value
    })
},
  handleZanTabChange(e) {
    var componentId = e.componentId;
    var selectedId = e.selectedId;
    var Info
    var that=this
    if(selectedId==1){
      Info="粤11234"
    }else if(selectedId==2){
    Info="张三"
    }

     that.setData({
      Info:Info
    })

    this.setData({
      [`${componentId}.selectedId`]: selectedId
    });
  }


}))