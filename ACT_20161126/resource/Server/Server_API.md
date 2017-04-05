## 简介

* 数据云使用 APICloud 数据云,用法参见文档: [http://docs.apicloud.com/Cloud-API/data-cloud-api](http://docs.apicloud.com/Cloud-API/data-cloud-api)

* header请求头中必须有以下键值对,以用于验证身份:

```
X-APICloud-AppId:A6935516227370
X-APICloud-AppKey:266ba5fdfd9706451fe94b8e5b556eec7f3674dd.1480063011286
```

* 另,加密前的appkey,考生可根据自己需要选择试用(非必须):

```
02F8DDA0-10A6-8301-238B-580F06D968B2
```

* 为了方便考生,每个接口,都给出了一个 curl 的请求示例,以便于考生观察考试结果,考生可直接在 mac终端或windows命令中复制粘贴,以执行获取对应接口的数据.


## 1.获取所有banner轮播图数据

### 基础信息

* 接口地址: [https://d.apicloud.com//mcm/api/banner?filter={"where":{},"skip":0,"limit":20}](https://d.apicloud.com//mcm/api/banner?filter={"where":{},"skip":0,"limit":20})

* 请求方式: GET

### curl 示例

```shell
curl -H "X-APICloud-AppKey: 266ba5fdfd9706451fe94b8e5b556eec7f3674dd.1480063011286" -H "Charset: UTF-8" -H "X-APICloud-AppId: A6935516227370" -H "Accept: */*" -H "User-Agent: Mozilla/5.0 (Linux; Android 6.0.1; MI 3W Build/MMB29M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/46.0.2490.76 Mobile Safari/537.36" -H "Host: d.apicloud.com" -H "Pragma: no-cache" -H "Cache-Control: no-cache" --compressed https://d.apicloud.com//mcm/api/banner?filter=%7B%22where%22%3A%7B%7D%2C%22skip%22%3A0%2C%22limit%22%3A20%7D
```

### 返回结果示例

```json
[
  {
    "id": "5837fd5a1b03807140e4c477",
    "app_image": "http://upload.jianshu.io/admin_banners/app_images/2508/c8b4158a917f0f81c842bafff5497a4c4220e513.jpg",
    "link": "http://www.jianshu.com/p/6f8581fd5d35",
    "createdAt": "2016-11-25T08:59:06.725Z",
    "updatedAt": "2016-11-25T08:59:15.118Z"
  }
]
```

### 返回值说明

app_image | link
--- | ---
banner图片地址 | 点击banner的跳转链接


## 获取文章数据

### 基础信息

* 接口地址:

	* 获取第1页数据: [https://d.apicloud.com//mcm/api/post?filter={"where":{},"skip":0,"limit":5,"include":"authorPointer"}](https://d.apicloud.com//mcm/api/post?filter={"where":{},"skip":0,"limit":5,"include":"authorPointer"})

	* 获取第2页数据: [https://d.apicloud.com//mcm/api/post?filter={"where":{},"skip":5,"limit":5,"include":"authorPointer"}](https://d.apicloud.com//mcm/api/post?filter={"where":{},"skip":5,"limit":5,"include":"authorPointer"})

	* 获取第3页数据: [https://d.apicloud.com//mcm/api/post?filter={"where":{},"skip":10,"limit":5,"include":"authorPointer"}](https://d.apicloud.com//mcm/api/post?filter={"where":{},"skip":10,"limit":5,"include":"authorPointer"})

* 请求方式: GET

### curl 示例

```shell
curl -H "X-APICloud-AppKey: 266ba5fdfd9706451fe94b8e5b556eec7f3674dd.1480063011286" -H "Charset: UTF-8" -H "X-APICloud-AppId: A6935516227370" -H "Accept: */*" -H "User-Agent: Mozilla/5.0 (Linux; Android 6.0.1; MI 3W Build/MMB29M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/46.0.2490.76 Mobile Safari/537.36" -H "Host: d.apicloud.com" -H "Pragma: no-cache" -H "Cache-Control: no-cache" --compressed https://d.apicloud.com//mcm/api/post?filter=%7B%22where%22%3A%7B%7D%2C%22skip%22%3A0%2C%22limit%22%3A5%2C%22include%22%3A%22authorPointer%22%7D
```

### 返回结果示例

```json
[
 {
    "id": "5837ff4e1acfb92b0289fbd7",
    "list_image": "http://upload-images.jianshu.io/upload_images/658100-2c5357790f13470b.jpg",
    "title": "看完这7本旅行文学名作就出发吧！",
    "comments_count": 2,
    "likes_count": 12,
    "views_count": 164,
    "slug": "c5d8751c9320",
    "first_shared_at": 1479486052,
    "desc": "自从看完詹先生的《旅行与读书》，我对旅行文学产生了浓厚的兴趣，原来旅行可以参考的不止是指南攻略，还有旅行文学。 旅行文学不仅包含目的地的美景、美食、特色风俗民情，还有作者私人的体会、感悟，全部糅杂在...",
    "createdAt": "2016-11-25T09:07:26.011Z",
    "updatedAt": "2016-11-25T09:22:37.552Z",
    "author": {
      "id": "582c35fa265f8715126ad5a3",
      "nickname": "静哥的成长日记",
      "avatar": "http://upload.jianshu.io/users/upload_avatars/658100/0c597f7a108d.png",
      "intro_compiled": "互联网产品经理，深度阅读人士，信奉人在路上，心也要在路上。关注互联网发展趋势，大学生求职，英语学习，理财，旅行，个人成长。",
      "total_wordage": 49966,
      "total_likes_received": 1151,
      "createdAt": "2016-11-16T10:33:30.103Z",
      "updatedAt": "2016-11-25T09:04:07.692Z"
    }
  }
]
```

### 返回值说明

list_image | title | desc | comments_count | likes_count | views_count | slug | first_shared_at | author.nickname | author.avatar | author. intro_compiled | author.total_wordage | author. total_likes_received
--- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---
文章缩略图 | 文章标题 | 文章简介 | 文章评论数 | 文章点赞数 | 文章浏览数 | 文章短连接,用于拼接处文章的详情url,如 [http://www.jianshu.com/p/efa5620e15cd](http://www.jianshu.com/p/efa5620e15cd) | 文章发表时间,标准unix时间戳 | 作者昵称 | 作者头像 | 作者简介 | 作者写作的总字数 | 作者收到的总赞数
