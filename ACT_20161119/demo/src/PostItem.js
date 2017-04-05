import moment from 'moment'
import 'moment/locale/zh-cn'
import CSSTransfer from "./CSSTransfer"

let render = ({title,list_image,author,comments_count,likes_count,views_count,
first_shared_at,slug,toPersonDetail,toPostDetail})=>{
  let touchmove = false

  let {nickname, avatar} = author
  let info = `${views_count} 次阅 · ${comments_count} 评论 · ${likes_count} 喜欢`

  let container = document.createElement("div")

  CSSTransfer({element:container, flexbox:{
    display:"flex",
    flexDirection: "row",
    height:"135px",
    alignItems:"center",
    borderBottom:"1px solid #dedede",
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
    height : "20px",
    width : "20px",
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
    color : "#3a9135",
    fontSize : "13px",
    padding: "8px",
  }})

  let timeElement = document.createElement("div")
  let timeNode = document.createTextNode(moment.unix(first_shared_at).fromNow())
  timeElement.appendChild(timeNode)

  CSSTransfer({element:timeElement, flexbox:{
    display:"flex",
    flexDirection:"column",
    color : "#c9c9c9",
    fontSize : "11px",
  }})

  let titleElement = document.createElement("div")
  let titleNode = document.createTextNode(title)
  titleElement.appendChild(titleNode)

  CSSTransfer({element:titleElement, flexbox:{
    display:"flex",
    flexDirection:"column",
    fontSize:"16px",
    color:"#242424",
    marginTop: "10px",
    marginBottom: "12px",
    lineHeight: "20px",
    maxHeight: `${20 * 2}px`,
    overflow: "hidden",
  }})

  let infoElement = document.createElement("div")
  let infoNode = document.createTextNode(info)
  infoElement.appendChild(infoNode)

  CSSTransfer({element:infoElement, flexbox:{
      display:"flex",
      flexDirection:"column",
      fontSize:"12px",
      color:"#9e9e9e",
  }})

  let thumbElement = document.createElement("div")
  let thumbInnerElement = document.createElement("img")
  thumbElement.appendChild(thumbInnerElement)

  CSSTransfer({element:thumbElement, flexbox:{
      display:"flex",
      flexDirection:"column",
      marginLeft: "20px",
      marginRight: "20px",
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
      width : "80px",
      height : "80px",
  }})

  let leftContainer = document.createElement("div")

  CSSTransfer({element:leftContainer, flexbox:{
    display:"flex",
    flexDirection:"column",
    marginLeft:"15px",
    flex:1,
  }})

  let topContainer = document.createElement("div")
  topContainer.appendChild(avatarElement)
  topContainer.appendChild(nicknameElement)
  topContainer.appendChild(timeElement)

  CSSTransfer({element:topContainer, flexbox:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
  }})

  leftContainer.appendChild(topContainer)
  leftContainer.appendChild(titleElement)
  leftContainer.appendChild(infoElement)

  container.appendChild(leftContainer)
  container.appendChild(thumbElement)

  avatarElement.addEventListener("touchend", ()=>{
    if ( ! touchmove) {
      toPersonDetail(author)
    }
  }, false)
  nicknameElement.addEventListener("touchend", ()=>{
    if ( ! touchmove) {
      toPersonDetail(author)
    }
  }, false)
  titleElement.addEventListener("touchend", ()=>{
    if ( ! touchmove) {
      toPostDetail({slug:slug})
    }
   },false)

 container.addEventListener("touchstart", ()=>{
   touchmove = false
 },false)

  container.addEventListener("touchmove", ()=>{
    touchmove = true
  },false)

  return  container
}

export default render
