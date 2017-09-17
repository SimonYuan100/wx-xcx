Page({
  data: {
    phone: 6105065,
    mobile: 13715368599,
    comName: '强中鑫贸易',
    brief: '机制竹炭 | 新疆孜然',
    address: '深圳市南山区茶光路波顿科技园',
    map: '',
    longitude: '113.9390800000',
    latitude: '22.5680200000',
    markers: [{
      iconPath: "../../images/marker.png",
      id: 0,
      latitude: '22.5680200000',
      longitude: '113.9390800000',
      width: 30,
      height: 30
    }],
    callme: function () {
      wx.makePhoneCall({
        phoneNumber: 13715368599
      })
    }
  }
})