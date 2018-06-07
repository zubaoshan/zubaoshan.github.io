//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '西合营镇供销旅馆',
    des: '停车住宿，干净卫生',
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  call: function(){
    wx.makePhoneCall({
      phoneNumber: '13231369855' //仅为示例，并非真实的电话号码
    })
  },
  getAtreebute: function(){
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度  
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: 39.95078,
          longitude: 114.76545,
          name:"西合营镇供销旅馆",
         scale: 28
        })  
      }  
    })  
  }
})
