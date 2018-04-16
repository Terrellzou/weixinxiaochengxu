Page({
  data: {
  
    array:[],
    index: 0,
    index1: 0,
   
    //部门
    dept:0,
    //岗位
    post:0,
    //点击修改的时候要传进去的对象
    uId:0

  },
  //点击所属部门的时候触发的事件
  bindPickerChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    // console.log(e.detail.value),

    console.log(this.data.uId)  
    this.setData({
      index: e.detail.value,
      //同时设置更改后的部门的id
      dept: e.detail.value
    })
    // console.log("收到部门信息")
  },
  
  //点击所属岗位的时候出发的事件
  bindPickerChange1: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)

    this.setData({ 
      index1: e.detail.value,
      //同时设置更改后的岗位的id
      post: e.detail.value
    })
  },
  //点击修改按钮的时候出发的事件
  modify: function (e) {
    //将数据库中user对应的字段的部门id和岗位id进行修改
    // console.log("返回数据库"+this.data.uId+" ,"+this.data.dept+"  ,"+this.data.post)
    //将要修改的参数定义好
    var that = this
    console.log(that.data.post)
    var u_id = that.data.uId
    var group_id = that.data.dept

    var u_type = that.data.post

    console.log("请求的参数"+u_id+","+group_id+","+u_type)
    //发送ajax请求到服务器修改u_id所对应的部门id和岗位id
    wx:wx.request({
      url: 'https://qichuang.mynatapp.cc/Weixinapp/user/updateByUid.do',
      data: {
        u_id:u_id,
        group_id:group_id,
        u_type:u_type
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log("成功")
        wx:wx.redirectTo({
          url: '../user',
          
        })
      },
      fail: function(res) {
        wx.showToast({

          title: '服务器网络错误,请稍后重试',

          icon: 'loading',

          duration: 1500

        })
      },
      complete: function(res) {

      },
    })
  },
  //点击取消的时候触发的事件
  cancel: function () {
   // console.log("取消")
   //点击取消时返回上一级目录
    wx.navigateBack({
      delta:1
    })
  },
  //页面也加载的时候就接收到上一级传过来的参数并发送请求到数据库中查询对应的信息渲染到页面上
  onLoad: function (options) {
    var that = this
    //收到u_id 
    // console.log(options)
    var u_id = options.u_id
    this.uId = options.u_id
    // console.log("收到了详细信息"+u_id)
    //发送ajax请求查询u_id对应的用户的信息
    wx:wx.request({
      url: 'https://qichuang.mynatapp.cc/Weixinapp/user/findUserByUid.do',
      data: {
        u_id:u_id
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res.data)
        
        // console.log(res.data.users)
        // console.log(res.data.groups) 
        // console.log(res.data.users[8])
        that.setData({
          title: res.data.users,
          array: res.data.groups,
          array1: res.data.posts,
          index: res.data.users.group_id,
          index1: res.data.users.u_type-1,
         
          // 设置修改的时候传过去的uId
          uId: res.data.users.u_id
        })
        
        
      },
      fail: function(res) {
        wx.showToast({

          title: '服务器网络错误,请稍后重试',

          icon: 'loading',

          duration: 1500

        })
      },
      complete: function(res) {

      },
    })
    
    
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

  }
  
})    