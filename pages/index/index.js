//Page Object
import{ request } from "../../request/index.js";
Page({
  data: {
    
    swiperList:[]
  },
  //options(Object)
  onLoad: function(options) {
  //  wx.request({
    //  url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      //data: {},
      //method: 'GET',
      //dataType: 'json',
      //responseType: 'text',
      //success: (result) => {
        
       //this.setData({
        //swiperList:result.data.message
       //})
      //}
    //});
    request({
      url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"})
     .then(result=>{
        this.setData({
          swiperList:result.data.message
        })
      })
    
      
    
  },

  onReady: function() {
    
  },
  onShow: function() {
    
  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  },
  onPageScroll: function() {

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item) {

  }
});
  