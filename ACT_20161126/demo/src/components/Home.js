import PostItem from "./PostItem.js"
import Banner from "./Banner.js"
import CSSTransfer from "./CSSTransfer"

const appId = "A6935516227370"
const purekey = "02F8DDA0-10A6-8301-238B-580F06D968B2"
const appKey = "266ba5fdfd9706451fe94b8e5b556eec7f3674dd.1480063011286"

let render = ()=>{
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

      refresh(({banners, posts})=>{
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
      fetchPost({page:page},ret=>{
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

  refresh(({banners, posts})=>{
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
    backgroundColor:"#f7f7f7",
  }})


 return rootNode
}

function fetchPost({page=0,pageSize=5},callback){
    api.ajax({
      "url": `https://d.apicloud.com//mcm/api/post?filter={"where":{},"skip":${page*pageSize},"limit":${pageSize},"include":"authorPointer"}`,
      "headers": {
        "X-APICloud-AppId": appId,
        "X-APICloud-AppKey": appKey
      },
    }, (ret, err)=>{
      if(err){
        return
      }

      ret = ret.map(item=>{
          item.toPersonDetail = (author)=>{
            api.openWin({
              url:"./index.html",
              name:"person", 
              pageParam:{
                page:"Person", author: author
              }
            })
          }

          item.toPostDetail = ({slug})=>{
            
            let url = `http://www.jianshu.com/p/${slug}`
            let page = "PostDetail"
            api.openWin({
              url:"./index.html",
              name: page, 
              pageParam:{
                page: page,
                url: url,
              }
            })
          }

          return item
        })

        callback(ret || [])
      })
}

function fetchBanner(callback) {
      api.ajax({
      "url": `https://d.apicloud.com//mcm/api/banner?filter={"where":{},"skip":0,"limit":20}`,
      "headers": {
        "X-APICloud-AppId": appId,
        "X-APICloud-AppKey": appKey
      }
    }, (ret, err)=>{
      if(err){
        return
      }

      callback(ret)
    })
}

function refresh(callback) {
  let rtn = {}
  fetchBanner((banners)=>{
    rtn.banners = banners

    fetchPost({page:0},(posts)=>{
      rtn.posts = posts

      callback(rtn)
    })
  })
}

export default render
module.exports = render


