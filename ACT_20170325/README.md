### [20170325线上考试](https://github.com/apicloudcom/APICloud-Certification-Cases/tree/master/ACT_20170325)
本次考试程序页面由“主页”、“城市列表选择页”、“我的”页组成，用到的模块有[UIScrollPicture](http://docs.apicloud.com/Client-API/UI-Layout/UIScrollPicture) 模块实现轮播图功能、[UICityList](http://docs.apicloud.com/Client-API/UI-Layout/UICityList)模块实现城市列表选择功能、[pullRefreshLoop](http://docs.apicloud.com/Client-API/UI-Layout/pullRefreshLoop)模块实现下拉刷新功能。

#### 考试说明：
##### 考试要求
 
- 确保自己电脑及网络可以正常使用
- 进入官网，登录报名的邮箱账号->系统会自动分配考试应用，应用名称为“日期+姓名”->请在分配的应用下完成考试
- 考试时间为3个小时，考试时间为14:00-17:00，请在17:00前准时提交代码，超出时间与往期一样成绩为零分，监考老师会提前15分钟提醒大家如有特殊情况请提前找监考老师备注信息）
- 监考老师会在考试时间内不定时的会抽查考试同学的情况，如果发现作弊，雷同代码。取消考试成绩，并取消免费补考资格
- 考试时间内，会给大家安排考试助教，遇到问题可以在qq群@助教，助教帮助您解答遇到的问题
- 考试成绩会在30天内公布，成绩单（考试得分等级和评语）会发送至报名邮箱，通过考试的在个人账户信息ace证书置亮，开通认证专区（ps-成绩单发布的邮箱如果和考试报名邮箱不一致的小伙伴，提前qq3266304342联系备注成绩单发至的邮箱）
- 如何交卷：考生需要在17:00点,把代码通过APIClodu Stuido 或第三方SVN工具 ,把代码提交到云端.17:00 后提交的代码,不计算成绩
- 使用第三方SVN工具时,需要的SVN地址和密码,可以在应用云端控制台 —> 代码界面获取（17点提交后，就不要在操作更新代码，更新将会取消成绩）

##### [考试资料](https://github.com/apicloudcom/APICloud-Certification-Cases/tree/master/ACT_20170325/resource)

- UI效果图4张（720*1280）及切好的图，在UI目录下
- 服务器端接口文档，在Server目录下Server_API.html

##### 评分标准
###### 界面：
- 实现参考应用中全部界面;
- 严格按照资源包中的UI效果图进行量图和布局;
- 适配所有主流屏幕尺寸;
- banner轮播图展示;[要求使用 [UIScrollPicture](http://docs.apicloud.com/Client-API/UI-Layout/UIScrollPicture) 模块实现轮播图功能]
- 首页列表展示;
- 订单页面展示（使用FrameGroup实现点击标题切换）
- 个人详情页面效果展示（通过接口获取个人详

###### 实现参考应用中全部功能
- 实现参考应用中全部功能
- 订单页面展示（使用FrameGroup实现点击标题切换）
- 首页可以 下拉刷新（[pullRefreshLoop](http://docs.apicloud.com/Client-API/UI-Layout/pullRefreshLoop)模块实现） 与 上拉加载更多;
- 导航条滑动到顶部会固定，下滑时会恢复原状
- 点击城市，打开城市列表（UICityList模块实现）选择，选择后返回，并改变城市名称

###### 性能：
- 交互响应灵敏
- 界面切换流畅
- 无闪屏白屏卡顿等

###### 数据：
- 使用api.ajax进行数据通信
- 实现下拉刷新，上拉加载
- 实现图片缓存

