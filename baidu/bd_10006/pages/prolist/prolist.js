var api = require('../../utils/api');
Page({
  data: {
    list_data: [],
    pro_title: [],
    curNav: 1,
    curIndex: 99,
    llst: [],
    showLoading: true,
    showMore: true,
    isData: false,
    ppage: 1,
    PageRows: 0,
    roll_cid: ''
  },

  //获取值，定义成全局然后下个页面接收
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

  //事件处理函数  选项卡
  switchRightTab1: function (e) {
    var index = parseInt(e.target.dataset.index);
    if (e.target.dataset.cid) {
      var switch_cid = e.target.dataset.cid;
    } else {
      var switch_cid = '';
    }
    this.setData({
      PageRows: 0,
      list_data: [],
      ppage: 1,
      roll_cid: switch_cid,
      showMore: true,
      isData: false
    });
    this.loadData(1, switch_cid);

    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: 0,
      curIndex: index
    });
  },

  loadData: function (page, cid) {
    var params = {
      "service": "product_get",
      "page": page,
      "rows": "10",
      "cid": cid
    };
    api.getProList(params).then(res => {
      this.setData({
        PageRows: res.total,
        list_data: this.data.list_data.concat(res.rows)
      });
      if (res.total <= page * 10) {
        this.setData({
          showMore: false,
          isData: true
        });
      }
    });
  },

  scrolltolower: function () {
    if (this.data.PageRows > this.data.ppage * 10) {
      this.setData({
        ppage: this.data.ppage + 1
      });
      this.loadData(this.data.ppage, this.data.roll_cid);
    } else {
      this.setData({
        showMore: false,
        isData: true
      });
    }
  },

  onLoad: function () {
    this.loadData(1, '');
    var params = {
      "service": "productcats_get"
    };
    api.getProCat(params).then(res => {
      this.setData({
        pro_title: res,
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