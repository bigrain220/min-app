var api = require('../../utils/api');
var WxParse = require('../../wxParse/wxParse.js');

Page({
  data: {
    aboutt: "",
    showLoading: true,
    about_img: '',
    about_node: ''
  },
  onLoad: function (options) {
    var that = this;
    var params = { "service": "single_get", "name": "公司简介" };
    api.getBanner(params).then(res => {
      var aboutt = res.rows[0].content;
      WxParse.wxParse('article', 'html', aboutt, that, 5);
      this.setData({
        about_img: res.rows[0].image,
        about_node: res.aboutt,
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