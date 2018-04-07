Page({
	data:{
		array: ['黑E12345', '粤A12345', '粤L12345', '粤B12345'],
    objectArray: [
      {
        id: 0,
        name: '黑E12345'
      },
      {
        id: 1,
        name: '粤A12345'
      },
      {
        id: 2,
        name: '粤L12345'
      },
      {
        id: 3,
        name: '粤B12345'
      }
     
    ],
     index:0,	
	},
		 bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
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
		
	}
})		