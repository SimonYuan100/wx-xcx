Page({
  data: {
    cumin: ['cumin_01', 'cumin_02', 'cumin_03'],
    'bamboo-charcoal': ['bc_01', 'bc_02', 'bc_03', 'bc_04'],
    fuel: ['fuel_01', 'fuel_02', 'fuel_03'],
    'fuel-box': ['fb_01', 'fb_02', 'fb_03', 'fb_04'],
    grill: ['grill_01', 'grill_02', 'grill_03', 'grill_04', 'grill_05'],
    detailList: []
  },
  onLoad: function (e) {
    console.log(e.k);
    var curList = this.data[e.k];
    this.setData({
      detailList: curList
    });
    console.log(this.data.detailList);
  }
})