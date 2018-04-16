var app=getApp();
var global_url=app. global_url

Page({
  data: {
    username: "",
    password: "",
    passwordconfirm: ""
    
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
  passwordconfirminput: function (e) {
    this.setData({
      passwordconfirm: e.detail.value
    })
  },


  signin: function () {
   var that = this;
   
    wx.request({
      method:"post",
      dataType:"json",

      url:  global_url+'user/regist.do', //仅为示例，并非真实的接口地址
      data: {
        name: that.data.username,
        pwd: that.data.password
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        var data = res.data
        app.name=data.name
         console.log(data)
        // var s=JSON.stringify(data.name)
        if(data.status == 1) {
          wx.showModal({
            title: "信息提示",
            content: "该用户名已被注册"
          })
        }else if(data.status==0) {
          wx.showModal({
            title: "信息提示",
            content: "注册成功，请等待审核通过",
            success:function(res){
              if(res.confirm){
                wx.switchTab({
              url:"../../myself/myself"
             })
               
            }
              }
          })
            
        }
      }
    })

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
    } else if (that.data.passwordconfirm == "") {
      wx.showModal({
        title: "信息提示",
        content: "请确认密码!"
      })
    } else if (that.data.passwordconfirm != that.data.password) {
      wx.showModal({
        title: "信息提示",
        content: "两次密码输入不一致!"
      })
    }
  
  
  }
   
})
    var Info=[
       {
       isshow:true,
       type:"1"
       }
  ]
