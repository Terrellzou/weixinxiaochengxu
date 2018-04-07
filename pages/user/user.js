Page({
	data:{
		
	},

	onLoad:function(options){
		var data=[{
		job:"驾驶员",
		user:"张三",
		date:"2018-13-03",
		unit:"十一车队"
	}]
	this.setData({
		user_key:data
	})
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
	userinfo:function(){
		wx.navigateTo({
			url:"userinfo/userinfo"
		})
	}
})		