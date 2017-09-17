//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '',
    userInfo: {},
    comName: '强中鑫贸易',
    brief: '机制竹炭 | 新疆孜然',
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    imgUrls: [
      // 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      // 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      // 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      'cumin',
      'fuel',
      'grill',
      'bamboo-charcoal'
    ],
    srcArr: [
      'bamboo-charcoal',
      'cumin',
      'fuel',
      'fuel-box',
      'grill'
    ],
    textArr: ['竹炭', '孜然', '燃料油', '燃料盒', '烧烤架'],
    proArr: [
      {
        src: "bamboo-charcoal",
        title: '机制竹炭',
        dis: '优质天然烧烤机制竹炭'
      },
      {
        src: "cumin",
        title: '新疆孜然',
        dis: '优质新疆孜然。。。'
      },
      {
        src: "fuel",
        title: '燃料油',
        dis: '火锅烤鱼炉酒精炉煮茶干锅环保燃料油'
      },
      {
        src: "fuel-box",
        title: '燃料盒',
        dis: '环保油燃料盒植物油燃料小火锅干锅烤鱼炉专用燃料盒'
      },
      {
        src: "grill",
        title: '烧烤架',
        dis: '轻巧便捷、室内保温架、烧烤架'
      }
    ]
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  goNext: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goDetail: function (e) {
    var value = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../detail/detail?k=' + value,
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
