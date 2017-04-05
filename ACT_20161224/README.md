### [20161224 线上考试](https://github.com/apicloudcom/APICloud-Certification-Cases/tree/master/ACT_20161224)
本次考试程序是一个仿美团外卖部分页面的程序，页面由“首页”、“订单页”、“我的”页组成，用到的模块有[UIScrollPromptView](http://docs.apicloud.com/Client-API/UI-Layout/UIScrollPromptView)模块实现轮播图功能、[UIPullRefreshMotive](http://docs.apicloud.com/Client-API/UI-Layout/UIPullRefreshMotive)模块实现下拉刷新附带动画功能。

#### 考试说明：
##### 考试要求

- 确保自己电脑及网络可以正常使用
- 进入官网，登录报名的邮箱账号->系统会自动分配考试应用，应用名称为“日期+姓名”->请在分配的应用下完成考试
- 考试时间为3个小时，5前提交代码代，超出时间与往期一样成绩为零分，监考老师会提前15分钟提醒大家；（如有特殊情况请提前找监考老师备注信息）
- 监考老师会在考试时间内不定时的会抽查考试同学的情况，如果发现作弊，雷同代码。取消考试成绩，并取消免费补考资格
- 考试时间内，会给大家安排考试助教，遇到问题可以在qq群@助教，助教帮助您解答遇到的问题
- 考试成绩会在30天内公布，成绩单（考试得分等级和评语）会发送至报名邮箱，通过考试的在个人账户信息ace证书置亮，开通认证专区（ps成绩单发布的邮箱如果和考试报名邮箱不一致的小伙伴，提前qq3266304342联系备注成绩单发至的邮箱）

##### [考试资料](https://github.com/apicloudcom/APICloud-Certification-Cases/tree/master/ACT_20161224/resource)
- UI效果图5张（720*1280）及切好的图，在UI目录下
- 服务器端接口文档，在Server目录下Server_API.html
- 服务器端接口调试的postman文件（可选使用），在Server目录下ServerAPI.postmancollection文件

##### 评分标准
###### 界面：
- 实现参考应用中全部界面
- 严格按照资源包中的UI效果图进行量图和布局
- 适配所有主流屏幕尺寸
- banner轮播图展示;[要求使用[UIScrollPromptView](http://docs.apicloud.com/Client-API/UI-Layout/UIScrollPromptView)模块实现轮播图功能]
- 首页列表展示
- 订单页面展示（使用FrameGroup实现左右滑动切换和点击标题切换）
- 个人详情页面效果展示（通过接口获取个人详情）
###### 功能
- 实现参考应用中全部功能
- 订单页面展示（使用FrameGroup实现左右滑动切换和点击标题切换）

###### 性能：
- 交互响应灵敏
- 界面切换流畅
- 无闪屏白屏卡顿等

###### 数据：
- 使用[api.ajax](http://docs.apicloud.com/Client-API/api#3)进行数据通信
- 实现下拉刷新，上拉加载
- 使用 [imageCache](http://docs.apicloud.com/Client-API/api#78) 实现网络图片的缓存功能
