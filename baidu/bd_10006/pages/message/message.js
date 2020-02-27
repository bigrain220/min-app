var api = require('../../utils/api');
var WxParse = require('../../wxParse/wxParse.js');
Page({
  data: {
    number: "",
    showLoading: true,
    rreset: "",
    message_img: ''
  },
  // calling: function () {
  //   wx.makePhoneCall({
  //     phoneNumber: tel,
  //     fail: function () {
  //       wx.showToast({
  //         title: '拨打失败',
  //         icon: 'success',
  //         duration: 2000
  //       })
  //     }
  //   })
  // },
  onLoad: function (options) {
    var that = this;
    var params = {
      "service": "single_get",
      "name": "联系我们"
    };
    api.getBanner(params).then(res => {
      var aboutt = res.rows[0].content;
      WxParse.wxParse('article', 'html', aboutt, that, 5);
      this.setData({
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
  formSubmit: function (e) {

    var formData = e.detail.value;

    //留言判断
    var z = require('../../utils/common.js'); //调用判断的js
    var result = z.required(formData);

    if (!z.isUsername(formData.username)) {
      swan.showModal({
        title: '提示',
        content: '请填写中文姓名',
        showCancel: false

      });
    } else {
      if (!z.isPhone(formData.tel)) {
        swan.showModal({
          title: '提示',
          content: '请填写合理的手机号',
          showCancel: false

        });
      } else {
        if (!z.isEmail(formData.email)) {
          swan.showModal({
            title: '提示',
            content: '请填写合理的邮箱号',
            showCancel: false

          });
        } else {
          if (!z.isContent(formData.messneirong)) {
            swan.showModal({
              title: '提示',
              content: '请填写至少十个中文的內容',
              showCancel: false
            });
          } else {
            var params = {
              "service": "message_add",
              "content": formData.messneirong,
              "email": formData.email,
              "nickname": formData.username,
              "phone": formData.tel
            };
            api.getAbout(params).then(res => {
              swan.showModal({
                title: '提示',
                content: '提交成功',
                showCancel: false
              });
              this.setData({
                rreset: ""
              });
            });
          }
        }
      }
    }
  },
  //右上角分享
  onShareAppMessage: function () {}
});