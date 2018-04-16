const { Tab, extend } = require('../../dist/index');

Page(extend({}, Tab, {
  data: {
    tab3: {
      list: [{
        id: '1',
        title: '车辆'
      }, {
        id: '2',
        title: '修理工'
      }],
      selectedId: '1',
      scroll: true,
      height: 45
    }
  },

  handleZanTabChange(e) {
    var componentId = e.componentId;
    var selectedId = e.selectedId;

    this.setData({
      [`${componentId}.selectedId`]: selectedId
    });
  }
}));
