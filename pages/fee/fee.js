 var app=getApp()
 var common=require('../login/register/register.js');
Page({
  data:{
    siba:"common.Info.isshow"
  },
   
  onLoad:function(options){
    var data=[{
    CarID:"黑E123456",
    date:"2018-03-13",
    description:" 发动机异常响声",
    fee:"30"
  }]
  this.setData({
    index_key:data
  })
  },
  onReady:function(){
    
  },
  onShow:function(){
     if(!app.power){
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
  onHide:function(){
    
  },
  onUnload:function(){
    
  },
  onPullDownRefresh:function(){
    
  },
  onReachBottom:function(){
    
  },
 
})  

  