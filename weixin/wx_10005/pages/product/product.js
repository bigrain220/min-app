var api = require('../../utils/api');
var WxParse = require('../../wxParse/wxParse.js');   //调用html格式化js
var that = this;
Page({
	data:{
		quanlcg:"",
		product_detail:"",
		products_image:"",
		showLoading:true,
		model:"",//型号
		spec:"",//规格
		retail_price:""	,//市场价
		price:""//优惠价
	},

	onLoad:function(options){       
		var app = getApp();
		var iid = options.id;
		var title = app.titles;
		var img = app.img;
		//更改标题
		// wx.setNavigationBarTitle({
		// 	title: title,
		// })

        var params = {"service": "product_get","id": iid};
		api.getProDetail(params)
		.then(res=>{
			console.log(res)
			 var product_detail = res.content;
			 WxParse.wxParse('article', 'html', product_detail, this, 5);
			this.setData({
				product_detail:product_detail,
				quanlcg:title,
				products_image:img,
				showLoading:false,
			});
			this.setData({
				model:res.model,
				spec:res.spec,
				retail_price:res.retail_price,
				price:res.price	
			})
		});

	},
	onReady:function(){
		
	},
	onShow:function(){
		
	},
	onHide:function(){
		
	},
	onUnload:function(){
		
	},
	onPullDownRefresh:function(){
		
	},
	onReachBottom:function(){
		
	},
	  //右上角分享
	  onShareAppMessage: function() {

	  },
	})		