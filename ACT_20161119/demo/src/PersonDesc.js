import CSSTransfer from "./CSSTransfer"

let render = ({nickname,avatar,intro_compiled,total_wordage,
  total_likes_received})=>{
  let container = document.createElement("div")

  CSSTransfer({element:container, flexbox:{
    display:"flex",
    flexDirection: "column",
    alignItems:"center",
  }})

  let avatarElement = document.createElement("img")

  api.imageCache({
    url: avatar,
    policy: "cache_only",
  }, function(ret, err) {
      avatarElement.src = ret.url || avatar
  })

  CSSTransfer({element:avatarElement, flexbox:{
    display:"flex",
    flexDirection:"column",
    height : "70px",
    width : "70px",
    borderRadius: "50%",
    overflow:"hidden",
    marginTop:"20px",
    marginBottom:"20px",
    backgroundColor:"#efefef",
  }})

  let nicknameElement = document.createElement("div")
  let nicknameNode = document.createTextNode(nickname)
  nicknameElement.appendChild(nicknameNode)

  CSSTransfer({element:nicknameElement, flexbox:{
    display:"flex",
    flexDirection:"column",
    color : "#3a3a3a",
    fontSize : "20px",
  }})

  let introElement = document.createElement("div")
  let introNode = document.createTextNode(intro_compiled)
  introElement.appendChild(introNode)
  CSSTransfer({element:introElement,flexbox:{
    display:"flex",
    flexDirection:"column",
    color : "#2a2a2a",
    fontSize : "14px",
    margin:"20px",
    textAlign:"center",
    lineHeight:"20px",
  }})

  let wordageElement = document.createElement("div")
  let wordageNode = document.createTextNode(`写了 ${total_wordage} 字`)
  wordageElement.appendChild(wordageNode)
  CSSTransfer({element:wordageElement,flexbox:{
    display:"flex",
    flexDirection:"column",
    color : "#8e8e8e",
    fontSize : "14px",
    marginRight:"8px",
  }})

  let likesElement = document.createElement("div")
  let likesNode = document.createTextNode(`获得了 ${total_likes_received} 个喜欢`)
  likesElement.appendChild(likesNode)
  CSSTransfer({element:likesElement,flexbox:{
    display:"flex",
    flexDirection:"column",
    color : "#8e8e8e",
    fontSize : "14px",
    marginLeft:"16px",
  }})

  let extContainer = document.createElement("div")
  CSSTransfer({element:extContainer,flexbox:{
    display:"flex",
    flexDirection:"row",
  }})

  extContainer.appendChild(wordageElement)
  extContainer.appendChild(likesElement)

  container.appendChild(avatarElement)
  container.appendChild(nicknameElement)
  container.appendChild(introElement)
  container.appendChild(extContainer)

  return container
}

export default render
