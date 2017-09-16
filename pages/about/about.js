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
    // polyline: [{
    //   points: [{
    //     longitude: 113.3245211,
    //     latitude: 23.10229
    //   }, {
    //     longitude: 113.324520,
    //     latitude: 23.21229
    //   }],
    //   color: "#FF0000DD",
    //   width: 2,
    //   dottedLine: true
    // }],
    // controls: [{
    //   id: 1,
    //   iconPath: '/images/marker.png',
    //   position: {
    //     left: 0,
    //     top: 300 - 50,
    //     width: 50,
    //     height: 50
    //   },
    //   clickable: true
    // }]
    nodes: [
      {
        name: 'a',
        attrs: {
          class: 'tel',
          href: 'href:13715368599'
        },
        children: [{
          type: 'text',
          text: '手机： 13715368599'
        }]
      }
    ],
    nodeA: [{
      name: 'a',
      attrs: {
        class: 'a_class',
        style: 'color: #ff7f00;',
        href: 'href:13715368599'
      },
      children: [{
        type: 'text',
        text: '手机： 13715368599'
      }]
    }]
  }
})