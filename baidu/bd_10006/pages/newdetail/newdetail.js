var api = require('../../utils/api');
var WxParse = require('../../wxParse/wxParse.js'); //调用全局html格式化js
Page({
  data: {
    content: "",
    new_title: "",
    showLoading: true,
    temTime: ''
  },
  //时间轴转换方法
  getLocalTime: function (timestamp) {
    var dateObj = new Date(timestamp * 1000);
    return dateObj.getFullYear() + '-' + (dateObj.getMonth() + 1 > 9 ? dateObj.getMonth() + 1 : '0' + (dateObj.getMonth() + 1)) + '-' + (dateObj.getDate() > 9 ? dateObj.getDate() : '0' + dateObj.getDate()) + ' ' + (dateObj.getHours() > 9 ? dateObj.getHours() : '0' + dateObj.getHours()) + ':' + (dateObj.getMinutes() > 9 ? dateObj.getMinutes() : '0' + dateObj.getMinutes()) + ':' + (dateObj.getSeconds() > 9 ? dateObj.getSeconds() : '0' + dateObj.getSeconds());
  },

  onLoad: function (options) {
    var newsid = options.id;
    var title = getApp().titles; //获取列表页传过来的标题
    //更改标题
    // wx.setNavigationBarTitle({
    // 	title: title,
    // })

    var params = {
      "service": "news_get",
      "id": newsid
    };
    api.getNewDetail(params).then(res => {
      var content = res.content;
      WxParse.wxParse('article', 'html', content, this, 5);
      var time = this.getLocalTime(res.created);
      time = time.slice(0, time.length - 3);
      this.setData({
        content: res.content,
        new_title: title,
        temTime: time,
        showLoading: false
      });
    });
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  //右上角分享
  onShareAppMessage: function () {}
});