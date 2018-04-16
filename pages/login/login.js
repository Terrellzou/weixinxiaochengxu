var app=getApp()
var  global_url=app.global_url
Page({
  data: {
    username: "",
    password: "",
   
  },
  onLoad: function (options) {

  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  usernameinput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
  passwordinput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  //点击登陆的时候触发的事件
  signin: function () {
    var that = this;
    //登陆的时候要传过来的参数
    var name = that.data.username
    var pwd = that.data.password
    
    if (that.data.username == "") {
      wx.showModal({
        title: "信息提示",
        content: "用户名不能为空!"
      })
    } else if (that.data.password == "") {
      wx.showModal({
        title: "信息提示",
        content: "请输入密码!"
      })
    }
    console.log("用户名：" + name + "密码：" + pwd)
    //发送ajax请求到服务器-登录
    wx.request({
      url:  global_url+'user/login.do', 
      data: {
        name: name,
        pwd: pwd,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',
      dataType: 'json',
      success: function (res) {
        app.name=res.data.name,
        app.type=res.data.u_type
        app.u_id=res.data.u_id
         if(app.type==null){
          app.power=false
         }
         console.log(app.type)
        
        // console.log("成功")
        // console.log("返回的结果"+JSON.stringify(res.data.msg))
        // console.log("返回的结果" + JSON.stringify(res.data.status))
        var status = JSON.stringify(res.data.status)
        var msg = JSON.stringify(res.data.msg)
        console.log(res.data)
        //弹出提示

        wx.showModal({
          title: "信息提示",
          content: msg
        })
        console.log(1111)
        if (status == 0){
          // console.log(status)
          //跳转到index页面
          
          wx:wx.switchTab({
            url: '../myself/myself'
          })
        }
        console.log(2222)
      },
      fail: function (res) {
        wx.showToast({

          title: '服务器网络错误,请稍后重试',

          icon: 'loading',

          duration: 1500

        })
      },
      complete: function (res) {

      },
    })

  },
  //点击注册的时候触发的事件
  register: function () {
    wx.navigateTo({
      url: "register/register"
    })
  }
})    