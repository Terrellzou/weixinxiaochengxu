 var common=require('../login/register/register.js');
 

Page({
  data: {
    siba:"common.Info.isshow"
    // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
    // message:{},
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // info:{},
    // //输入的信息
    // input:"",
    // p_name:null,
    // imgUrls: [
    //   '../../images/0.jpg',
    //   '../../images/2.jpg',
    //   '../../images/3.jpg'
    // ],
    // //轮播条中的设置-是否显示面板指示点
    // indicatorDots: true,
    // //轮播条中的设置-是否自动切换
    // autoplay: true,
    // //轮播条中的设置-自动切换时间间隔
    // interval: 3000,
    // //轮播条中的设置-滑动动画时长
    // duration: 1000,
    // //设置初始页
    // page : "1",
    // hidden: true
    
  },


  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  //与轮播条有关的js
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  
 
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //页面加载的时候触发的事件 发送请求进行分页查询所有的信息 为了与上拉刷新 下拉加载配合
  onLoad: function () {
  
    /*this.setData({
      hidden: false
    })
    var that = this
    var page = this.data.page
    
    console.log(page)
    wx.request({
      url: "http://localhost:8080/Project/project/findByPage.do",
      data: {
        page: page 
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          message: res.data.lists
        })
        page++
        that.setData({
          hidden: true
        })
        
      },
      fail: function (res) {
        console.log(".....fail.....");
      }
    }),*/

    //数据绑定
    
 var data=[{
    CarID:"黑E123456",
    status:"待审批",
    date:"2018-03-13",
    description:" 发动机异常响声",
    color:"zan-c-red"
  },
   { CarID:"黑E123456",
    status:"维修中",
    date:"2018-03-13",
    description:" 发动机异常响声",
    color:"zan-c-orange"
  },
  {
     CarID:"黑E123456",
    status:"维修完成",
    date:"2018-03-13",
    description:" 发动机异常响声",
    color:"zan-c-green"
  },
  {
    CarID:"黑E123456",
    status:"支付",
    date:"2018-03-13",
    description:" 发动机异常响声",
    color:"zan-c-green"
  },
  {
     CarID:"黑E123456",
    status:"支付",
    date:"2018-03-13",
    description:" 发动机异常响声",
    color:"zan-c-green"
  },
  {
     CarID:"黑E123456",
    status:"支付",
    date:"2018-03-13",
    description:" 发动机异常响声",
     color:"zan-c-green"
  }]
  this.setData({
    index_key:data
  })

  },
  //滚动到底部/右边，会触发 scrolltolower 事件
  scrolltolower: function(){
    console.log("触发了下拉加载的事件")
    
    
    var that = this
    var page = this.data.page
    page++
    wx.request({
      url: "http://localhost:8080/Project/project/findByPage.do",
      data: {
        page: page
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          message: res.data.lists
        })
        page++
        

      },
      fail: function (res) {
        console.log(".....fail.....");
      }
    })

    
  },
  //滚动到顶部/左边，会触发 scrolltoupper 事件
  scrolltoupper: function(){
    //  该方法绑定了页面滑动到顶部的事件，然后做上拉刷新
    console.log("触发了上拉刷新的事件")
    this.setData({
      hidden: false
    })
    var that = this
    var page = this.data.page
    page=1
    wx.request({
      url: "http://localhost:8080/Project/project/findByPage.do",
      data: {
        page: page
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          message: res.data.lists
        })
        page++
        // that.setData({
        //   hidden: true
        // })

      },
      fail: function (res) {
        console.log(".....fail.....");
      }
    })
  },
  
  onShow(){
      if(this.data.siba){
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


  
  //获取用户的信息
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //点击搜索触发的事件
  //获取搜索的名字
  inputKey: function(e){
    
    this.setData({
      input: e.detail.value
    });
    // console.log(e.detail.value);
  },
  //点击搜索的时候向后台发送请求-根据输入的内容到数据库中查找对应的商品的信息并跳转到另一个页面显示
  sousuo: function(){
    // console.log(this.data.input)
    var name = this.data.input
    //发送请求-根据输入的内功发送请求到数据库中查找
    wx:wx.request({
      url: 'http://localhost:8080/Project/project/findByName.do',
      data: {
        p_name:name
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        //将得到的数据传到另一个页面
        //传递参数前先将对象转为string
        var message = JSON.stringify(res.data)
        //console.log(message)
        wx.navigateTo({
          url: '../info/info?mess='+message
        })
        // console.log(message)
      },
      fail: function(res) {
        console.log("失败")
      },
      complete: function(res) {

      },
    })
    
  },
  //新增预订触发的事件
  insert: function(){
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  yuding: function(e){
    console.log(e.detail)
    wx.navigateTo({
      url: '../order/order'
    })
  },
  repairdetailinfo:function(){
      wx.navigateTo({
        url:"repairdetailinfo/repairdetailinfo"
      })
  },

})
