### [20161126上海&济南考试题](https://github.com/apicloudcom/APICloud-Certification-Cases/tree/master/ACT_20161126)
本次考试程序页面由文章列表页、作者简介页、文章详情页组成，用到的模块有[UIScrollPromptView](http://docs.apicloud.com/Client-API/UI-Layout/UIScrollPromptView)轮播图模块、[UIWebBrowser](http://docs.apicloud.com/Client-API/UI-Layout/UIWebBrowser) 网页浏览功能模块。

#### 考试说明：
##### 考试要求
 
- 考试时间：3小时
- 考试形式：自带电脑，现场开发，在APICloud平台新建应用，规定时间内提交代码到svn，编译出正式版本apk包
- 提交方式：将应用分享到：*ac_test@apicloud.com*，**应用分享之后，不可再修改代码，否则成绩计为无效**

##### [考试资料](https://github.com/apicloudcom/APICloud-Certification-Cases/tree/master/ACT_20161126/resource)

- UI效果图3张（720*1280）及切好的图，在UI目录下;
- 服务器端接口文档，在Server目录下Server_API.html
- 服务器端接口调试的postman文件（可选使用），在Server目录下ServerAPI.postmancollection文件

##### 评分标准
###### 界面：
- 实现参考应用中全部界面
- 严格按照资源包中的UI效果图进行量图和布局
- 适配所有主流屏幕尺寸
- banner轮播图展示;[要求使用 **[UIScrollPromptView](http://docs.apicloud.com/Client-API/UI-Layout/UIScrollPromptView)** 模块实现轮播图功能]
- 文章列表展示
- 作者简介页展示
- 文章详情显示(要求使用 [UIWebBrowser](http://docs.apicloud.com/Client-API/UI-Layout/UIWebBrowser) 模块实现网页浏览功能)

**注意**: *03文章详情页* 为一个 **外部链接** 页面,可直接使用 [UIWebBrowser](http://docs.apicloud.com/Client-API/UI-Layout/UIWebBrowser)  模块实现网页浏览功能,**不用编码实现03页面内部页面**

###### 实现参考应用中全部功能
* 实现参考应用中全部功能
* 点击 *首页01页面* 顶部banner,进入 *03详情页*
* 点击 *首页01页面* 各个文章的标题或缩略图,进入 *03详情页*
* 点击 *首页01页面* 各个文章的 **作者头像**,进入 *02作者简介页*
* 首页可以 **下拉刷新** 与 **上拉加载更多**

###### 性能：
- 交互响应灵敏
- 界面切换流畅
- 无闪屏白屏卡顿等

###### 数据：
- 使用 [api.ajax](http://docs.apicloud.com/Client-API/api#3) 进行数据通信
- 实现下拉刷新，上拉加载
- 使用 [imageCache](http://docs.apicloud.com/Client-API/api#78) 实现网络图片的缓存功能
