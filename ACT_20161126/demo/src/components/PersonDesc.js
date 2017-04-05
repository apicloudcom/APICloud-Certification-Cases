import CSSTransfer from "./CSSTransfer"

let render = ({nickname,avatar,intro_compiled,total_wordage,
  total_likes_received})=>{
  let container = document.createElement("div")

  CSSTransfer({element:container, flexbox:{
    display:"flex",
    flexDirection: "column",
    marginLeft:"20px",
    marginRight:"20px",
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
    lineHeight:"20px",
  }})

  let wordageElement = document.createElement("div")
  let wordageNode = document.createTextNode(`总字数:${total_wordage}   获赞数:${total_likes_received}`)
  wordageElement.appendChild(wordageNode)
  CSSTransfer({element:wordageElement,flexbox:{
    display:"flex",
    flexDirection:"column",
    color : "#8e8e8e",
    fontSize : "14px",
    marginTop:"8px",
  }})

  let extContainer = document.createElement("div")
  CSSTransfer({element:extContainer,flexbox:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    marginLeft:"8px",
  }})

  extContainer.appendChild(nicknameElement)
  extContainer.appendChild(wordageElement)

  let topContainer = document.createElement("div")
  CSSTransfer({element:topContainer,flexbox:{
    display:"flex",
    flexDirection:"row",
    marginTop:"20px",
    marginBottom:"20px",
  }})

  topContainer.appendChild(avatarElement)
  topContainer.appendChild(extContainer)

  container.appendChild(topContainer)
  container.appendChild(introElement)

  return container
}

export default render
module.exports = render
