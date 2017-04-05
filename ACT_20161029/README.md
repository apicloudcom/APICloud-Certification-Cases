### [20161029广州考试题](https://github.com/apicloudcom/APICloud-Certification-Cases/tree/master/ACT_20161029)：
本次考试程序页面由注册登录页、列表页、详情页、播放页组成，用到的模块有[tencentPlayer](http://docs.apicloud.com/Client-API/Open-SDK/tencentPlayer)腾讯视频直播播放器模块、[videoPlayer](http://docs.apicloud.com/Client-API/Func-Ext/videoPlayer)视频播放模块。

#### 考试说明：
##### 考试要求
 
- 考试时间：3小时
- 考试形式：自带电脑，现场开发，在APICloud平台新建应用，规定时间内提交代码到svn，编译出正式版本apk包。
- 提交方式：将应用分享到：ac_test@apicloud.com，应用分享之后，不可再修改代码，否则成绩计为无效。

##### [考试资料](https://github.com/apicloudcom/APICloud-Certification-Cases/tree/master/ACT_20161029/resource)
- UI效果图4张（720*1280）及切好的图，在UI目录下
- 服务器端接口文档，在Server目录下Server_IF.pdf
- 服务器端接口调试的postman文件（可选使用），在Server目录下Server_API.postman_collection文件

##### 评分标准
###### 界面：
- 实现参考应用中全部界面
- 严格按照资源包中的UI效果图进行量图和布局
- 适配所有主流屏幕尺寸

###### 实现参考应用中全部功能
- 注册
- 登录
- 课程列表展示(使用JS模版，如doT)
- 课程详情 
- 视频播放（要求使用tencentPlayer模块实现播放功能）

###### 性能：
- 交互响应灵敏
- 界面切换流畅
- 无闪屏白屏卡顿等

###### 数据：
- 使用api.ajax进行数据通信
- 实现下拉刷新，上拉加载
- 实现图片缓存
