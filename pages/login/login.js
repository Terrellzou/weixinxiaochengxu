Page({
	data:{
    username: "",
    password: "",
	},
	onLoad:function(options){
		
	},
	onReady:function(){
		
	},
	onShow:function(){
		
	},
	onHide:function(){
		
	},
	onUnload:function(){
		
	},
	onPullDownRefresh:function(){
		
	},
	onReachBottom:function(){
		
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
	signin:function(){
		var that=this;
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
    wx.request({
      url: 'test.php', //仅为示例，并非真实的接口地址
      data: {
        username: 'that.data.username',
        password: 'that.data.password'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if (res.name != username) {
          wx.showModal({
            title: "信息提示",
            content: "用户名错误或不存在"
          })
        }else if(res.pwd!=password){
        	wx.showModal({
            title: "信息提示",
            content: "密码错误"
          })
        }
      }
    })
},
	register:function(){
		wx.navigateTo({
			url:"register/register"
		})
	}
})		