import PostItem from "./PostItem.js"
import Banner from "./Banner.js"
import CSSTransfer from "./CSSTransfer"

const appId = "A6924735141113"
const appKey = "2eb2e629e08199e07d59b7a690fbedd0f1a889f5.1479311556274"

let page = 0

api.setRefreshHeaderInfo({
    visible: true,
    loadingImg: 'widget://image/refresh.png',
    bgColor: '#fff',
    textColor: '#9a9a9a',
    textDown: '下拉刷新...',
    textUp: '松开刷新...',
    showTime: true
}, function(ret, err) {
    page = 0

    refresh()
    .then(({banners, posts})=>{
      while (rootNode.hasChildNodes()) {
        rootNode.removeChild(rootNode.lastChild);
      }
      api.refreshHeaderLoadDone()

      page ++

      let bannerNode = Banner({banners:banners})
      rootNode.appendChild(bannerNode)

      for (var i = 0; i < posts.length; i++) {
        let newDiv = PostItem(posts[i])
        rootNode.appendChild(newDiv)
      }
    })
});

api.addEventListener({
    name:'scrolltobottom',
    extra:{
        threshold:0            //设置距离底部多少距离时触发，默认值为0，数字类型
    }
},function(ret,err){
    // 加载下一页的数据，然后向现有页面追加数据。
    let oriPage = page
    fetchPost({page:page})
    .then(ret=>{
      if (oriPage !== page) {
        return
      }

      page ++
      if (ret.length === 0) {
        api.toast({
          msg: '没有更多数据了...',
          duration: 2000,
          location: 'bottom'
        })
      }else{
        for (var i = 0; i < ret.length; i++) {
          let newDiv = PostItem(ret[i])
          rootNode.appendChild(newDiv)
        }
      }
    })
})

/* 首次刷新. */
api.showProgress({
        style: 'default',
        animationType: 'fade',
        title: '努力加载中...',
        text: '先喝杯茶...',
        modal: false
    })

refresh()
.then(({banners, posts})=>{
  while (rootNode.hasChildNodes()) {
    rootNode.removeChild(rootNode.lastChild);
  }

  api.hideProgress()
  page ++

  let bannerNode = Banner({banners:banners})
  rootNode.appendChild(bannerNode)

  for (var i = 0; i < posts.length; i++) {
    let newDiv = PostItem(posts[i])
    rootNode.appendChild(newDiv)
  }
})

let rootNode = document.createElement("div")

CSSTransfer({element:rootNode, flexbox:{
  display:"flex",
  flexDirection: "column",
}})

document.body.appendChild(rootNode)

function fetchPost({page=0,pageSize=5}){
  return new Promise((resolve,reject)=>{
    api.ajax({
      "url": `https://d.apicloud.com//mcm/api/post?filter={"where":{},"skip":${page*pageSize},"limit":${pageSize},"include":"authorPointer"}`,
      "headers": {
        "X-APICloud-AppId": appId,
        "X-APICloud-AppKey": appKey
      },
    }, (ret, err)=>{
      if(err){
        reject(err)
      }else{
        ret = ret.map(item=>{
          item.toPersonDetail = (author)=>{
            window.open("./container.html", "Person",
            {page:"Person", author: author})
          }

          item.toPostDetail = ({slug})=>{
            let url = `http://www.jianshu.com/p/${slug}`

            let browser = api.require('webBrowser')
            browser.open({
                url: url,
                titleBar:{
                  visible:true,
                  bg: "#fff",
                  textColor:"#9a9a9a",
                },
            })
          }

          return item
        })

        resolve(ret || [])
      }
    })
  })
}

function fetchBanner() {
  return new Promise((resolve,reject)=>{
    api.ajax({
      "url": `https://d.apicloud.com//mcm/api/banner?filter={"where":{},"skip":0,"limit":20}`,
      "headers": {
        "X-APICloud-AppId": appId,
        "X-APICloud-AppKey": appKey
      }
    }, (ret, err)=>{
      if(err){
        reject(err)
      }else{
        resolve(ret)
      }
    })
  })
}

function refresh() {
  return new Promise((resolve,reject)=>{
      Promise.all([fetchBanner(), fetchPost({page:0})]).then(values => {
        resolve({banners:values[0], posts:values[1]})
      });
  })
}
