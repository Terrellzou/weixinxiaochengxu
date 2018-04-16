Page({
  data: {
    array: ['第一车队', '第二车队', '第三车队', '第四车队'],
    objectArray: [
      {
        id: 2,
        name: '第一车队'
      },
      {
        id: 3,
        name: '第二车队'
      },
      {
        id: 4,
        name: '第三车队'
      },
      {
        id: 5,
        name: '第四车队'
      }
    ],
    index: 0
  },
  //表单提交的时候触发的事件
  reg:function(e){
    //接收表单传过来的数据然后发送ajax请求到服务器
    var card_no = e.detail.value.card_no
    var type = e.detail.value.type
    var factory = e.detail.value.factory
    var order_date = e.detail.value.order_date
    var repair_fee = e.detail.value.repair_fee
    var next_date = e.detail.value.next_date
    var total = e.detail.value.total
    var day = e.detail.value.day
    var group_id = this.data.index
    

    // console.log(card_no+","+type+","+factory+","+order_date+","+repair_fee+","+next_date+","+group_id+","+day+","+total)
    //发送ajax请求将表单中的数据分别插入相应的数据可中
    wx:wx.request({
      url: 'https://qichuang.mynatapp.cc/Weixinapp/bus/insertInToBus.do',
      data: {
        card_no: card_no,
        type: type,
        factory: factory,
        order_date: order_date,
        repair_fee: repair_fee,
        next_date: next_date,
        group_id: group_id,
        total: total,
        day: day
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res.data)
        //成功后跳转到车辆列表的页面
        wx:wx.redirectTo({
          url: '../Carlist',
          
        })
      },
      fail: function(res) {

      },
      complete: function(res) {

      },
    })
  },
  //点击取消时触发的事件
  resert:function(){
    console.log("取消") 
    //跳转到上一级页面 
    wx: wx.redirectTo({
      url: '../Carlist',

    })
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
    console.log(options)
    this.setData({
      title: options.title
    })
  }
})