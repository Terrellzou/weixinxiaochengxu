// var common=require('../login/register/register.js');
// console.log(common.Info.isshow)
Page({  
  data: {  
    display:''  
  },  
  showview: function() {   
    this.setData({  
      display: "block"  
    })  
  },  
  hideview: function() {  
    this.setData({  
      display: "none"  
    })  
  }  
})   