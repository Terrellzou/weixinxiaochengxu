Page({
  data: {
    array: ['第一车队', '第二车队', '第三车队', '第四车队'],
    objectArray: [
      {
        id: 0,
        name: '第一车队'
      },
      {
        id: 1,
        name: '第二车队'
      },
      {
        id: 2,
        name: '第三车队'
      },
      {
        id: 3,
        name: '第四车队'
      }
    ],
    index: 0,
   
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;

    this.setData(data);
  },
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  onLoad: function(options) {
    this.setData({
      title: options.title
    })
  },
   
  carinput:function(e){
    this.setData({
      bus_id:e.detail.value
    })
    
  },
  carnameinput:function(e){
    this.setData({
      card_no:e.detail.value
    })
  },
  factoryinput:function(e){
    this.setData({
      factory:e.detail.value
    })
  },
  dateinput:function(e){
    this.setData({
      order_date:e.detail.value
    })
  },
  teaminput:function(e){
    this.setData({
      group_id:e.detail.value
    })
  },
  paidinput:function(e){
    this.setData({
      repair_fee:e.detail.value
    })
  },
  maintaininput:function(e){
    this.setData({
      repair_time:e.detail.value
    })
  },
  maintain_textinput:function(e){
    this.setData({
      repair_nexttime:e.detail.value
    })
  },
  saveTap:function(e){
    wx.request({
      url: 'http://localhost:8080/Project/project/findByName.do',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
    data:{
    bus_id:this.bus_id,
    card_no:"",
    factory:"",
    order_date:"",
    group_id:"",
    repair_fee:"",
    repair_time:"",
    repair_nexttime:""
  },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        //将得到的数据传到另一个页面
        //传递参数前先将对象转为string
       var car_info = JSON.stringify(res.data)
       if(e.detail.value.carid==car_info.bus_id){
        console.log("该车辆已添加")
       }else{
        wx.navigateTo({
        url:"../Carlist"
     });
      }
        console.log(car_info)
   },
      fail: function(res) {
        console.log("失败")
      },
      complete: function(res) {

      },
    })
    
     
  },
  cancelTap:function(){
    wx.navigateTo({
      url:"../Carlist"
    })
  }

})