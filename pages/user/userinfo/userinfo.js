Page({
	data:{
	array: ['分公司', '第二车队', '第三车队', '第四车队'],
   
    array1: ['管理人员', '员工', '会计', '后勤'],
    objectArray: [
      {
        id: 0,
        name: '管理人员'
      },
      {
        id: 1,
        name: '员工'
      },
      {
        id: 2,
        name: '会计'
      },
      {
        id: 3,
        name: '后勤'
      }
      
    ],
    index:0,
    index1:0,
	},
	 bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChange1: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
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
  cancel:function(){
    wx.navigateTo({
      url:"../user"
    })
  }
})		