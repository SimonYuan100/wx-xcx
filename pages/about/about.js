Page({
  data: {
    phone: 6105065,
    mobile: 15711271599,
    comName: '强中鑫贸易',
    brief: '机制竹炭 | 新疆孜然',
    address: '深圳市深南大道55号',
    map: '地图',
    markers: [{
      iconPath: "../../images/marker.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/images/marker.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  }
})