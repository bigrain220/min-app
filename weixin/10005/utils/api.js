const hexMD5 = require('./md5');
/**
 * 配置信息
 */
 var conf = getApp().globalData.api;

/**
 * 把数组所有元素，按照“参数=参数值”的模式用“&”字符拼接成字符串
 * @param $para 需要拼接的数组
 * return 拼接完成以后的字符串
 */
 function createLinkstring(para) {
  var arg = '';
  for (var key in para) {
    var val = para[key];
    arg += key + '=' + val + "&";
  };
  arg = arg.substr(0, arg.length - 1);
  return arg;
}

/**
 * 对数组排序
 * @param $para 排序前的数组
 * return 排序后的数组
 */
 function argSort(para) {
  var para_sort = {};
  var para_keys = Object.keys(para).sort();
  for (var key in para_keys) {
    var val = para_keys[key];
    para_sort[val] = para[val];
  };
  return para_sort;
}

/**
 * 除去数组中的空值和签名参数
 * @param $para 签名参数组
 * return 去掉空值与签名参数后的新签名参数组
 */
 function paraFilter(para) {
  var para_filter = {};
  for (var key in para) {
    var val = para[key];
    if (key == 'key' || key == 'sign' || key == 'sign_type' || val == '') continue;
    else para_filter[key] = val;
  };
  return para_filter;
}

/**
 * 签名字符串
 * @param $prestr 需要签名的字符串
 * @param $key 私钥
 * return 签名结果
 */
 function md5Sign(prestr, key) {
  prestr = prestr + key;
  return hexMD5.hexMD5(prestr);
}

/**
  * 生成签名结果
  * @param $para_sort 已排序要签名的数组
  * return 签名结果字符串
  */
  function buildRequestMysign(para_sort) {
  //把数组所有元素，按照“参数=参数值”的模式用“&”字符拼接成字符串
  var mysign = '';
  var prestr = createLinkstring(para_sort);
  switch (conf.sign_type) {
    case "MD5":
    mysign = md5Sign(prestr, conf.key);
    break;
  }
  return mysign;
}

/**
  * 生成要请求参数数组
  * @param $confing 配置信息
  * @param $para_temp 请求前的参数数组
  * @return 要请求的参数数组
  */
  function buildRequestPara(para_temp) {
    para_temp = Object.assign(para_temp, conf);

  //除去待签名参数数组中的空值和签名参数
  var para_filter = paraFilter(para_temp);

  //对待签名参数数组排序
  var para_sort = argSort(para_filter);

  //生成签名结果
  var mysign = buildRequestMysign(para_sort);

  //签名结果与签名方式加入请求提交参数组中
  para_sort['sign'] = mysign;
  para_sort['sign_type'] = conf.sign_type;

  return para_sort;
}

// module.exports.buildRequestPara = buildRequestPara;
function fetchApi(params){
  // console.log(params,buildRequestPara(params))
  return new Promise((resolve,reject)=>{
    wx.request({
      url: getApp().globalData.url,
      method: "POST",
      data: buildRequestPara(params),
      header: {
        "Content-Type": "application/x-www-form-urlencoded" 
      },
      success: resolve,
      fail:reject
    })
  })
}

module.exports = {
 getBanner:function(params){
  return fetchApi(params)
  .then(res=>res.data)
},
getNewList:function(params){
  return fetchApi(params)
  .then(res=>res.data)
},
getProList:function(params){
  return fetchApi(params)
  .then(res=>res.data)
},
getAbout:function(params){
  return fetchApi(params)
  .then(res=>res.data)
},
getNewDetail:function(params){
  return fetchApi(params)
  .then(res=>res.data)
},
getProDetail:function(params){
  return fetchApi(params)
  .then(res=>res.data)
},
getProCat:function(params){
  return fetchApi(params)
  .then(res=>res.data)
},
getMessage:function(params){
  return fetchApi(params)
  .then(res=>res.data)
},
getNewListPro:function(params){
  return fetchApi(params)
  .then(res=>res.data)
},
getIndexData:function(params){
  return fetchApi(params)
  .then(res=>res.data)
},
getVideoData:function(params){
  return fetchApi(params)
  .then(res=>res.data)
},
}