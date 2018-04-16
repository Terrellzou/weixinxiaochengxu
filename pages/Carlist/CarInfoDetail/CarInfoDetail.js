var app=getApp()
var global_url=app.global_url

Page({
  /**
   * 页面的初始数据
   */
  data: {
       
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   var  bus_id=options.bus_id
   
    var that=this
    wx.request({
      url: global_url+'bus/findBusByBusId.do',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      data:{
         bus_id:bus_id
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res){
       var msg=res.data.bus
       var sm=res.data.groups
       var length=sm.length
       console.log(msg)
       console.log(sm)
       console.log(length)
       var teamarray=[];
      for(var i=0;i<length;i++){
           teamarray.push(sm[i].group_name)
      }

       var Info={
        card_no: msg.card_no,
        type:msg.type,
        factory: msg.factory,
        date: msg.order_date,
        fee:msg.repair_fee,
        group:sm,
        recharge: msg.total,
        interval: msg.day,
        next_date:msg.next_date,
        index:"",
        hidden:true,
        hidden1:true,
        hidden2:true,
        nocancel:false,
        cost:"",
        paid:"",
        bus_id:msg.bus_id,
        teamarray:teamarray,
        team:sm[msg.group_id].group_name,
         }
          that.setData(Info)
          app.bus_id=that.data.bus_id
      },
    })
     
        
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  bindPickerChange: function(e) {
     var that=this
     //取index要使用事件关联的作用域
     var index=e.detail.value
    //还有index的作用域问题 如果给了一个确定的值，可能会调用它
     console.log(this.data.group[index].group_id) 
      wx.request({
    url: global_url+"bus/transferGroup.do",
       data: {
           bus_id:that.data.bus_id,
           group_id:that.data.group[index].group_id
      },
      method: 'POST',
       header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
        dataType: 'json',
       responseType: 'text',
       success: function (res){
       
          that.setData({
            index: e.detail.value
        })

          if(res.data.status==0){
           
           that.setData({
          team:that.data.teamarray[that.data.index]
         
        })
           console.log(res.data)
            }else{
            wx.showModal({
            title: "信息提示",
            content: "修改失败!"
      })
            }
       
      }
     })
   //  that.setData(Info)之后用的还是that.data
      
     
    },
  // fixdetail:function(){
  //   wx.navigateTo({
  //     url:"../../index/repairdetail/repairdetail"
  //   })
  // },
  //维修定额调整
  adjust:function(){
    var that=this
   that.setData({
      hidden:false
    })
  },
  feeinput:function(e){
     var that=this
      that.setData({
        cost:e.detail.value
       })
  },
   cancel: function(){
       var that=this
        that.setData({
          fee:that.data.fee
        })
       
       that.setData({
             hidden: true
        })

    },
    confirm: function(options){


    var that=this
     wx.request({
      url: global_url+"bus/transferRepair.do",
      data: {
           bus_id:that.data.bus_id,
           repair_fee:that.data.cost
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
       dataType: 'json',
      responseType: 'text',
      success: function (res){
      
          if(that.data.cost==that.data.fee ||that.data.cost==""){
           
          that.setData({
            fee:that.data.fee
           })
         
         }else if(res.data.status==0){

      that.setData({
              fee:that.data.cost
               })
          }else{
              wx.showModal({
            title: "信息提示",
            content: "修改失败!"
            })
          }
           that.setData({
             hidden: true
        })   
      
      }

       })
     
       
    },


  //工时充值
   charge:function(){
    var that=this

   that.setData({
      hidden1:false
    })
  },
  paidinput:function(e){

    var that=this
      
      that.setData({
         paid:e.detail.value
      })
  },
   cancel1: function(){
       var that=this
         that.setData({
          recharge:that.data.recharge
        })
       
        that.setData({
             hidden1: true
        })
    },
    confirm1: function(){

      var that=this
      wx.request({
      url: global_url+"bus/recharge.do",
      data: {
           bus_id:that.data.bus_id,
           total:that.data.paid
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
       dataType: 'json',
      responseType: 'text',
      success: function (res){
         if(that.data.paid==that.data.recharge||that.data.paid==""){
           
           that.setData({
             recharge:that.data.recharge
           })
          
         }
          else if(res.data.status==0){
          that.setData({
               recharge:that.data.paid
          })
          }else{
              wx.showModal({
            title: "信息提示",
            content: "修改失败!"
            })
          }
            that.setData({
             hidden1: true
        })   
       
       }
     })
    },

    //保养间隔设置
   set:function(){

    var that=this
   that.setData({
      hidden2:false
    })
  },
  
   dayinput:function(e){

    var that=this
      that.setData({
        day:e.detail.value
       })
     
  },
    cancel2: function(){
      var that=this
          that.setData({
         interval:that.data.interval
        })
       
      that.setData({
             hidden2: true
        })
  
    },
    confirm2: function(){
      var that=this
      wx.request({
      url: global_url+"bus/transferHealth.do",
      data: {
           bus_id:that.data.bus_id,
           day:that.data.day
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
       dataType: 'json',
      responseType: 'text',
      success: function (res){
        if(that.data.day==that.data.interval ||that.data.day==""){
           
           that.setData({
            interval:that.data.interval
           })
          
         }else if(res.data.status==0){

          that.setData({
             interval:that.data.day
          })
          }else{
               wx.showModal({
            title: "信息提示",
            content: "修改失败!"
            })
          }
            that.setData({
             hidden2: true
               }) 
        }  
     }) 
    },
   apply: function (e) {
    var bus_id = e.currentTarget.id
    // console.log(bus_id)
    wx.redirectTo({
      url: "../../index/repairdetail/repairdetail?bus_id="+bus_id
    })
  }
})