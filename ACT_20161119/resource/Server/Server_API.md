## 简介

* 数据云使用 APICloud 数据云,用法参见文档: [http://docs.apicloud.com/Cloud-API/data-cloud-api](http://docs.apicloud.com/Cloud-API/data-cloud-api)

* header请求头中必须有以下键值对,以用于验证身份:

```
X-APICloud-AppId:A6924735141113
X-APICloud-AppKey:2eb2e629e08199e07d59b7a690fbedd0f1a889f5.1479311556274
```

* 为了方便考生,每个接口,都给出了一个 curl 的请求示例,以便于考生观察考试结果,考生可直接在 mac终端或windows命令中复制粘贴,以执行获取对应接口的数据.


## 1.获取所有banner轮播图数据

### 基础信息

* 接口地址: [https://d.apicloud.com//mcm/api/banner?filter={"where":{},"skip":0,"limit":20}](https://d.apicloud.com//mcm/api/banner?filter={"where":{},"skip":0,"limit":20})

* 请求方式: GET

### curl 示例

```shell
curl -H "Host: d.apicloud.com" -H "Proxy-Connection: keep-alive" -H "X-APICloud-AppId: A6924735141113" -H "X-APICloud-AppKey: 2eb2e629e08199e07d59b7a690fbedd0f1a889f5.1479311556274" -H "User-Agent: ACT20161119 0.0.0 rv:0.0.1 (iPod touch; iOS 10.0.2; zh_CN)" --compressed https://d.apicloud.com//mcm/api/banner?filter=%7B%22where%22%3A%7B%7D%2C%22skip%22%3A0%2C%22limit%22%3A20%7D
```

### 返回结果示例

```json
[
  {
    "id": "582c3076265f8715126ad416",
    "app_image": "http://upload.jianshu.io/admin_banners/app_images/2476/8441577ef1551b410138234f39edf42f36fd5356.jpg", 
    "link": "http://www.jianshu.com/p/846c63141913",
    "createdAt": "2016-11-16T10:09:58.384Z",
    "updatedAt": "2016-11-16T10:10:08.437Z"
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
curl -H "Host: d.apicloud.com" -H "Proxy-Connection: keep-alive" -H "X-APICloud-AppId: A6924735141113" -H "X-APICloud-AppKey: 2eb2e629e08199e07d59b7a690fbedd0f1a889f5.1479311556274" -H "User-Agent: ACT20161119 0.0.0 rv:0.0.1 (iPod touch; iOS 10.0.2; zh_CN)" --compressed https://d.apicloud.com//mcm/api/post?filter=%7B%22where%22%3A%7B%7D%2C%22skip%22%3A0%2C%22limit%22%3A5%2C%22include%22%3A%22authorPointer%22%7D
```

### 返回结果示例

```json
[
 {
    "id": "582c5179368c14e50b30ccca",
    "list_image": "http://upload-images.jianshu.io/upload_images/2873922-2a7ae52ad6748a12.jpg",
    "title": "打败\"平庸流水账\"的写作秘籍，让你的文字会跳舞",
    "comments_count": 21,
    "likes_count": 35,
    "views_count": 512,
    "slug": "efa5620e15cd",
    "first_shared_at": 1478000253,
    "createdAt": "2016-11-16T12:30:49.858Z",
    "updatedAt": "2016-11-17T03:23:59.344Z",
    "author": {
      "id": "582c35fa265f8715126ad5a3",
      "nickname": "文叨叨666",
      "avatar": "http://upload.jianshu.io/users/upload_avatars/2873922/de0b51d10324.jpg",
      "intro_compiled": "31岁已婚大姐，内心住着一个蓬勃的少年。 前图书公司总编辑，百度高级产品经理/跨界达人，知识分享者。微信公号：文叨叨的斜杠生活。专注在写作方法，出版知识普及，职场进阶，个人成长等领域的分享。",
      "total_wordage": 35565,
      "total_likes_received": 645,
      "createdAt": "2016-11-16T10:33:30.103Z",
      "updatedAt": "2016-11-16T10:37:09.818Z"
    }
  }
]
```

### 返回值说明

list_image | title | comments_count | likes_count | views_count | slug | first_shared_at | author.nickname | author.avatar | author. intro_compiled | author.total_wordage | author. total_likes_received
--- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
文章缩略图 | 文章标题 | 文章评论数 | 文章点赞数 | 文章浏览数 | 文章短连接,用于拼接处文章的详情url,如 [http://www.jianshu.com/p/efa5620e15cd](http://www.jianshu.com/p/efa5620e15cd) | 文章发表时间 | 作者昵称 | 作者头像 | 作者简介 | 作者写作的总字数 | 作者收到的总赞数
