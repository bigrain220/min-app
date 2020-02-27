function getNewsData(query) {
    query=query.toString();
    var data = {
        date: "",
        title: "",
        content: ""
    };
    switch (query) {
        case '1':
            data.date = "2020-01-03";
            data.title = "新沂思路打开新格局，2019“环骆马湖”赛即将举行";
            data.content =
                "伴随9月22日2019第八届中国·新沂环骆马湖自行车公路公开赛女子公开组的順悧完赛，新一届“环骆马湖”赛事圆满落幕。本次比赛是由中国自行车运动协会、江苏省体育局、徐州市体育局、新沂市人民政府主办，新沂市文化广电新闻出版与体育局、新沂市体育总会、江苏东陇海文化产业集团承办，北京势至山水文化传播有限公司独家运营。赛事得到了中国人寿、迈森兰、习酒、金牌联盟、天馥酒庄、可口可乐、毛铺苦荞酒及体彩中心的大力赞助和CCTV5、CGTN、中国体育报、中国自行车、野途和骑友网的亲情支持。4月22日进行的是男子年龄A/B组、女子公开组三个组别的比赛，全程48公里，车型为公路车型，车队阵容豪华，三个组别的激烈竞争使山水新沂再掀波浪。环骆马湖”赛事以体育赛事搭台,打造一张以赛事促发展的靓丽城市名片！</br>&nbsp&nbsp&nbsp&nbsp经过两天激烈的角逐，第八届中国•新沂环骆马湖自行车公路公开赛圆满落下帷幕，赛事充分发挥新沂的自然资源与历史人文优势，通过多元融合的体育旅游项目，在“一山一湖一古镇”的城市名片的基础上深入挖掘户外运动的魅力，巩固其作为体育旅游目的地的吸引力，用“新沂思路”取得旅游新突破，让徐州更美好。"
            break;
        case '2':
            data.date = "2020-01-02";
            data.title = "第十四届环海南岛国际公路自行车赛将举行";
            data.content =
                "本届环岛赛历时8天，设置8个赛段，途经海南15个市县，总里程为1190.7公里。由1个平路赛段、3个丘陵赛段及4个山路赛段组成，总体安排呈现出从平路到丘陵再到山地，从易到难的设计思路，全程共设置16个途中冲刺点和14个爬坡点，其中最高难度的HC级爬坡点1个、一级爬坡点2个、二级爬坡点2个、三级爬坡点7个、四级爬坡点2个。本届环岛赛共吸引50多支职业自行车队报名，组委会根据赛队级别和竞技水平高低，目前已确认20支队伍参赛。参赛队伍包含1支UCI（国际自行车联盟）世界车队、7支UCI职业车队、12支UCI洲际车队。</br>&nbsp&nbsp&nbsp&nbsp环岛赛参赛队伍涵盖国际自行车运动联盟UCI职业队、UCI洲际职业队、UCI洲际队和国家队四个层次，每年参赛队伍控制在二十支左右，将经过17个市县及1个经济开发区，路线涵盖高速、省道、县道、乡道等公路赛所有类型，全程约1400公里。竞技水平高、比赛过程精彩激烈、围观群众热情高涨是环岛赛的显著特征。</br>&nbsp&nbsp&nbsp&nbsp环岛赛是海南对外宣传的重要载体，《人民日报》、《中国体育报》、新华社、中新社、中央电视台、海南卫视、《海南日报》等均对赛事保持长期追踪报道和专题性报道，让更多观众可以实时感受环岛赛的盛况。"
            break;
        case '3':
            data.date = "2020-01-01";
            data.title = "天气对自行车赛的影响";
            data.content =
                "比赛时的天气情况和比赛沿途的气象条件对自行车赛运动员成绩的发挥至关重要。与比赛直接相关的气象要素有日照、降水、风向风力、气温、湿度等。降雨天气对自行车赛会造成不同程度影响。</br>&nbsp&nbsp&nbsp&nbsp北京奥运会时，一场阵雨曾使小轮车比赛被迫延迟到第二天，但山地自行车比赛却如期进行。由此可见，降雨对小轮车比赛的影响要高于山地、公路自行车赛。只要不是瓢泼大雨，山地和公路自行车赛就可以进行，但下雨路面比较滑，对高速行驶的自行车而言，拐弯时容易摔倒。另外，下雨会阻碍选手们的视线，迫使他们放慢速度，避免摔车。这样，就会增加比赛难度，影响选手正常发挥。为减小空气阻力等因素对比赛的影响，选手在比赛时身着单薄衣物，如遇降温天气会影响车手成绩。在第二届环青海湖国际公路自行车赛中，连日低温使选手们发挥多不尽如人意。雾和风也会影响自行车赛，如果风将树叶、纸张、杂物刮向赛道，会影响运动员的正常发挥，甚至对运动员的安全造成影响。</br>&nbsp&nbsp&nbsp&nbsp晴朗的天气是自行车爱好者共同向往的，骑上单车，约上三五知己，骑行在路上，心情自然是不错的，但晴朗的天气空中水分子匮乏，紫外线比较强，长时间的骑行很容易被晒伤，人体的水份也相对的流失加快，容易出现脱水现象。所以，晴天骑行要注意防晒及补水。ESP30以下的防晒霜是不能满足干燥夏日的骑行需要的！对于水份的补充，应遵循量少次多的原则～这样你会感觉比较舒适。"
            break;
        case '4':
            data.date = "2020-01-01";
            data.title = "新沂思路打开新格局，2019“环骆马湖”赛即将举行";
            data.content =
                "伴随9月22日2019第八届中国·新沂环骆马湖自行车公路公开赛女子公开组的順悧完赛，新一届“环骆马湖”赛事圆满落幕。本次比赛是由中国自行车运动协会、江苏省体育局、徐州市体育局、新沂市人民政府主办，新沂市文化广电新闻出版与体育局、新沂市体育总会、江苏东陇海文化产业集团承办，北京势至山水文化传播有限公司独家运营。赛事得到了中国人寿、迈森兰、习酒、金牌联盟、天馥酒庄、可口可乐、毛铺苦荞酒及体彩中心的大力赞助和CCTV5、CGTN、中国体育报、中国自行车、野途和骑友网的亲情支持。4月22日进行的是男子年龄A/B组、女子公开组三个组别的比赛，全程48公里，车型为公路车型，车队阵容豪华，三个组别的激烈竞争使山水新沂再掀波浪。环骆马湖”赛事以体育赛事搭台,打造一张以赛事促发展的靓丽城市名片！</br>&nbsp&nbsp&nbsp&nbsp经过两天激烈的角逐，第八届中国•新沂环骆马湖自行车公路公开赛圆满落下帷幕，赛事充分发挥新沂的自然资源与历史人文优势。通过多元融合的体育旅游项目，在“一山一湖一古镇”的城市名片的基础上深入挖掘户外运动的魅力，巩固其作为体育旅游目的地的吸引力，用“新沂思路”取得旅游新突破，让徐州更美好。"
            break;
        case '5':
            data.date = "2020-01-01";
            data.title = "第十四届环海南岛国际公路自行车赛将举行";
            data.content =
                "本届环岛赛历时8天，设置8个赛段，途经海南15个市县，总里程为1190.7公里。由1个平路赛段、3个丘陵赛段及4个山路赛段组成，总体安排呈现出从平路到丘陵再到山地，从易到难的设计思路，全程共设置16个途中冲刺点和14个爬坡点，其中最高难度的HC级爬坡点1个、一级爬坡点2个、二级爬坡点2个、三级爬坡点7个、四级爬坡点2个。本届环岛赛共吸引50多支职业自行车队报名，组委会根据赛队级别和竞技水平高低，目前已确认20支队伍参赛。参赛队伍包含1支UCI（国际自行车联盟）世界车队、7支UCI职业车队、12支UCI洲际车队。</br>&nbsp&nbsp&nbsp&nbsp环岛赛参赛队伍涵盖国际自行车运动联盟UCI职业队、UCI洲际职业队、UCI洲际队和国家队四个层次，每年参赛队伍控制在二十支左右，将经过17个市县及1个经济开发区，路线涵盖高速、省道、县道、乡道等公路赛所有类型，全程约1400公里。竞技水平高、比赛过程精彩激烈、围观群众热情高涨是环岛赛的显著特征。</br>&nbsp&nbsp&nbsp&nbsp环岛赛是海南对外宣传的重要载体，《人民日报》、《中国体育报》、新华社、中新社、中央电视台、海南卫视、《海南日报》等均对赛事保持长期追踪报道和专题性报道，让更多观众可以实时感受环岛赛的盛况。"
            break;
        case '6':
            data.date = "2020-01-01";
            data.title = "天气对自行车赛的影响";
            data.content =
                "比赛时的天气情况和比赛沿途的气象条件对自行车赛运动员成绩的发挥至关重要。与比赛直接相关的气象要素有日照、降水、风向风力、气温、湿度等。降雨天气对自行车赛会造成不同程度影响。</br>&nbsp&nbsp&nbsp&nbsp北京奥运会时，一场阵雨曾使小轮车比赛被迫延迟到第二天，但山地自行车比赛却如期进行。由此可见，降雨对小轮车比赛的影响要高于山地、公路自行车赛。只要不是瓢泼大雨，山地和公路自行车赛就可以进行，但下雨路面比较滑，对高速行驶的自行车而言，拐弯时容易摔倒。另外，下雨会阻碍选手们的视线，迫使他们放慢速度，避免摔车。这样，就会增加比赛难度，影响选手正常发挥。为减小空气阻力等因素对比赛的影响，选手在比赛时身着单薄衣物，如遇降温天气会影响车手成绩。在第二届环青海湖国际公路自行车赛中，连日低温使选手们发挥多不尽如人意。雾和风也会影响自行车赛，如果风将树叶、纸张、杂物刮向赛道，会影响运动员的正常发挥，甚至对运动员的安全造成影响。</br>&nbsp&nbsp&nbsp&nbsp晴朗的天气是自行车爱好者共同向往的，骑上单车，约上三五知己，骑行在路上，心情自然是不错的，但晴朗的天气空中水分子匮乏，紫外线比较强，长时间的骑行很容易被晒伤，人体的水份也相对的流失加快，容易出现脱水现象。所以，晴天骑行要注意防晒及补水。ESP30以下的防晒霜是不能满足干燥夏日的骑行需要的！对于水份的补充，应遵循量少次多的原则～这样你会感觉比较舒适。"
            break;
        default:
            break;
    }
    return data;
}