var api = require('../../utils/api');
var WxParse = require('../../wxParse/html2json.js');
var mount=10;
//时间轴转换方法
function getLocalTime(timestamp) {
	var dateObj = new Date(timestamp * 1000);
	return dateObj.getFullYear() + '-'
	+ (((dateObj.getMonth() + 1) > 9) ? (dateObj.getMonth() + 1) : '0'+ (dateObj.getMonth() + 1)) + '-'
	+ ((dateObj.getDate() > 9) ? dateObj.getDate() : '0'+ dateObj.getDate()) + ' '
	+ ((dateObj.getHours() > 9) ? dateObj.getHours() : '0'+ dateObj.getHours()) + ':'
	+ ((dateObj.getMinutes() > 9) ? dateObj.getMinutes() : '0'+ dateObj.getMinutes()) + ':'
	+ ((dateObj.getSeconds() > 9) ? dateObj.getSeconds() : '0'+ dateObj.getSeconds());
}

Page({
	data:{
		showLoading:true,
		showMore:true,
		allMoment:[],
		moment:[],
		bottomLoading:false,
		isData:false,
		total:'',
		newsYear:[],
		newsDay:[],
		htmlAry:[],
	},
     //获取值，定义成全局然后下个页面接收
     neww:function(e){
     	var newsid = e.currentTarget.dataset.id;
     	var title = e.currentTarget.dataset.title;
     	getApp().titles=title;
		wx.navigateTo({
			url:'../newdetail/newdetail?id='+newsid
		})
	},


	onLoad:function(options){
		var params = {"service":"news_get","page":1,"rows":10000,"sort_by": "created","sort_order": "desc",};
		var list=[];
		api.getNewList(params)
			.then(res=>{
				// console.log(res)
				res.rows.map(item=>{
					item.created = getLocalTime(item.created).substring(0, 10);
					list=list.concat(item.content);
					this.setData({
						newsYear:this.data.newsYear.concat(item.created.slice(0,4)),
						newsDay:this.data.newsDay.concat(item.created.slice(5)),
					  })
				})

				var htmlAry=[];
				for (let i = 0; i < list.length; i++) {
            		htmlAry[i] = WxParse.html2json(list[i], 'returnData');//重点，就是这里。只要这么干就能直接获取到转化后的node格式数据；
            		// console.log(htmlAry[i]);  
        		}
				this.setData({
					htmlAry: htmlAry,//记得这里要加入
					allMoment: res.rows,
					moment: res.rows.slice(0,10),
					showLoading:false,
					total:res.total,
					bottomLoading:false,
					showMore:true,
					isData:false
				})
			})
			wx.pageScrollTo({
				scrollTop: 0,
				duration: 0
			  })
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
	// onReachBottom:function(){
		
	// },
	//右上角分享
	onShareAppMessage: function() {

	},


	onReachBottom: function () {
			mount+=10;
			this.setData({
				// mount: this.data.mount+10,
				bottomLoading:true,                                
				showMore:false,
				isData:false,
			})
			this.setData({
				moment:this.data.allMoment.slice(0,mount)
			})
			if(mount>this.data.total){
					this.setData({
						isData:true,
						bottomLoading:false,                                
						showMore:false
					})
				}  
	},

})	