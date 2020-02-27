var api = require('../../utils/api');
var WxParse = require('../../wxParse/wxParse.js');
var WxParse2 = require('../../wxParse/html2json.js');
const app = getApp();

function getLocalTime(timestamp) {
  var dateObj = new Date(timestamp * 1000);
  return dateObj.getFullYear() + '-' + (dateObj.getMonth() + 1 > 9 ? dateObj.getMonth() + 1 : '0' + (dateObj.getMonth() + 1)) + '-' + (dateObj.getDate() > 9 ? dateObj.getDate() : '0' + dateObj.getDate()) + ' ' + (dateObj.getHours() > 9 ? dateObj.getHours() : '0' + dateObj.getHours()) + ':' + (dateObj.getMinutes() > 9 ? dateObj.getMinutes() : '0' + dateObj.getMinutes()) + ':' + (dateObj.getSeconds() > 9 ? dateObj.getSeconds() : '0' + dateObj.getSeconds());
}
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: swan.canIUse('button.open-type.getUserInfo'),
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    list: [],
    showLoading: true,
    proList: '',
    newsList: [],
    introData: '',
    newsYear: [],
    newsDay: [],
    htmlAry: [],
    videoData: ""
  },

  bindViewTap: function () {
    swan.navigateTo({
      url: '../logs/logs'
    });
  },

  onLoad: function () {
    var params = {
      "service": "banner_get",
      "group": "首页轮播图"
    };
    api.getBanner(params).then(res => {
      this.setData({
        imgUrls: res,
        showLoading: false
      });
    });
    //产品列表
    this.getTabs();
    //视频
    var params = {
      "service": "video_get",
      "page": "1",
      "rows": "1"
    };
    api.getVideoData(params).then(res => {
      this.setData({
        videoData: res.rows[0]
      });
    });

    var params = {
      "service": "single_get",
      "name": "公司简介"
    };
    api.getIndexData(params).then(res => {
      var aboutt = res.rows[0].content;
      WxParse.wxParse('article', 'html', aboutt, this, 5);
      this.setData({
        introData: res.rows[0],
        showLoading: false
      });
    });

    var params = { "service": "news_get", "page": 1, "rows": 3, "sort_by": "created", "sort_order": "desc" };
    var list = [];
    api.getNewList(params).then(res => {
      res.rows.map((item, index) => {
        item.created = getLocalTime(item.created).substring(0, 10);
        list = list.concat(item.content), this.setData({
          newsYear: this.data.newsYear.concat(item.created.slice(0, 4)),
          newsDay: this.data.newsDay.concat(item.created.slice(5))
        });
      });

      var htmlAry = [];
      for (let i = 0; i < list.length; i++) {
        htmlAry[i] = WxParse2.html2json(list[i], 'returnData'); //重点，就是这里。只要这么干就能直接获取到转化后的node格式数据；
        // console.log(htmlAry[i]);  
      }
      this.setData({
        htmlAry: htmlAry, //记得这里要加入
        newsList: res.rows
      });
    });

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      });
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
      };
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      swan.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo;
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
        }
      });
    }
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  },

  getTabs: function () {
    var params = {
      "service": "product_get",
      "cid": '1',
      "page": "1",
      "rows": "4"
    };
    api.getIndexData(params).then(res => {
      res.rows.map(function (item) {
        item.created = getLocalTime(item.created).substring(0, 10).replace(/-/g, '/');
      });
      this.setData({
        proList: res.rows
      });
    });
  },

  goDetail: function (e) {
    var newsid = e.currentTarget.dataset.id;
    var title = e.currentTarget.dataset.title;
    getApp().titles = title;
    swan.navigateTo({
      url: '../newdetail/newdetail?id=' + newsid
    });
  },
  goProDetail: function (e) {
    var id = e.currentTarget.dataset.id;
    var title = e.currentTarget.dataset.title;
    var img = e.currentTarget.dataset.img;

    var app = getApp();
    app.titles = title;
    app.img = img;

    swan.navigateTo({
      url: '../product/product?id=' + id
    });
  },
  goIntroDetail: function () {
    swan.navigateTo({
      url: '../about/about'
    });
  },

  //右上角分享
  onShareAppMessage: function () {}

});