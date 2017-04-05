import moment from 'moment'
import 'moment/locale/zh-cn'
import CSSTransfer from "./CSSTransfer"

let render = ({title,list_image,author,comments_count,likes_count,views_count,
first_shared_at,slug,toPersonDetail,toPostDetail,desc})=>{
  let winWidth = window.innerWidth || document.documentElement.clientWidth
                  || document.getElementsByTagName('body')[0].clientWidth

  let touchmove = false

  let {nickname, avatar} = author
  let info = `${views_count} 次阅 · ${comments_count} 评论 · ${likes_count} 喜欢`

  let container = document.createElement("div")

  CSSTransfer({element:container, flexbox:{
    display:"flex",
    flexDirection: "column",
    borderBottom:"1px solid #dedede",
    borderTop:"1px solid #dedede",
    marginBottom:"8px",
    backgroundColor:"#fbfbfb",
    paddingLeft:"15px",
    paddingRight:"15px",
  }})

  let avatarElement = document.createElement("img")

  api.imageCache({
    url: avatar,
    policy: "cache_only",
  }, function(ret, err) {
      avatarElement.src = ret.url || avatar
  });

  CSSTransfer({element:avatarElement, flexbox:{
    display:"flex",
    flexDirection:"column",
    height : "42px",
    width : "42px",
    borderRadius: "50%",
    overflow:"hidden",
    backgroundColor:"#efefef",
  }})

  let nicknameElement = document.createElement("div")
  let nicknameNode = document.createTextNode(nickname)
  nicknameElement.appendChild(nicknameNode)


  CSSTransfer({element:nicknameElement, flexbox:{
    display:"flex",
    flexDirection:"column",
    color : "#5f5f5f",
    fontSize : "15px",
  }})

  let timeElement = document.createElement("div")
  let timeTip = moment.unix(first_shared_at).format('MM-DD HH:mm');
  let timeNode = document.createTextNode(timeTip)
  timeElement.appendChild(timeNode)

  CSSTransfer({element:timeElement, flexbox:{
    display:"flex",
    flexDirection:"column",
    color : "#6e6e6e",
    fontSize : "12px",
    marginTop:"4px",
  }})

  let titleElement = document.createElement("div")
  let titleNode = document.createTextNode(title)
  titleElement.appendChild(titleNode)

  CSSTransfer({element:titleElement, flexbox:{
    display:"flex",
    flexDirection:"column",
    fontSize:"22px",
    color:"#2d2d2d",
    marginTop: "24px",
    marginBottom: "27px",
    lineHeight: "26px",
    maxHeight: `${26 * 2}px`,
    overflow: "hidden",
  }})

  let descElement = document.createElement("div")
  let descNode = document.createTextNode(desc)
  descElement.appendChild(descNode)

  CSSTransfer({element:descElement, flexbox:{
    display:"flex",
    flexDirection:"column",
    fontSize:"15px",
    color:"#4f4f4f",
    lineHeight: "20px",
    maxHeight: `${20 * 3}px`,
    overflow: "hidden",
  }})

  let infoElement = document.createElement("div")
  let infoNode = document.createTextNode(info)
  infoElement.appendChild(infoNode)

  CSSTransfer({element:infoElement, flexbox:{
      display:"flex",
      flexDirection:"column",
      fontSize:"12px",
      color:"#767676",
      marginTop:"30px",
      marginBottom:"20px",
  }})

  let thumbElement = document.createElement("div")
  let thumbInnerElement = document.createElement("img")
  thumbElement.appendChild(thumbInnerElement)

  CSSTransfer({element:thumbElement, flexbox:{
      display:"flex",
      flexDirection:"column",
      width:`${winWidth-30}px`,
      height:`${winWidth * 310.0 / 720.0}px`,
      backgroundColor:"#efefef",
      alignItems:"stretch",
  }})

  api.imageCache({
    url: list_image,
    policy: "cache_only",
  }, function(ret, err) {
      thumbInnerElement.src = ret.url || list_image
  });

  CSSTransfer({element:thumbInnerElement, flexbox:{
      display:"flex",
      flexDirection:"column",
      width : "100%",
      height : "100%",
  }})

  let topInfoContainer = document.createElement("div")

  CSSTransfer({element:topInfoContainer, flexbox:{
    display:"flex",
    flexDirection:"row",
    flex:1,
    marginTop:"24px",
    marginBottom:"24px",
  }})

  let topRightContainer = document.createElement("div")
  topRightContainer.appendChild(nicknameElement)
  topRightContainer.appendChild(timeElement)

  CSSTransfer({element:topRightContainer, flexbox:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    marginLeft:"12px",
  }})


  topInfoContainer.appendChild(avatarElement)  
  topInfoContainer.appendChild(topRightContainer)


  container.appendChild(topInfoContainer)
  container.appendChild(thumbElement)
  container.appendChild(titleElement)
  container.appendChild(descElement)
  container.appendChild(infoElement)

  avatarElement.addEventListener("touchend", (e)=>{
    if ( ! touchmove) {
      toPersonDetail(author)
    }

    e.stopPropagation()
  }, false)

  container.addEventListener("touchend", (e)=>{
    if ( ! touchmove) {
      toPostDetail({slug:slug})
    }
    e.stopPropagation()
   },false)

  container.addEventListener("touchstart", ()=>{
    touchmove = false
  },false)

  container.addEventListener("touchmove", ()=>{
    touchmove = true
  }, false)

  return  container
}

export default render
module.exports = render
