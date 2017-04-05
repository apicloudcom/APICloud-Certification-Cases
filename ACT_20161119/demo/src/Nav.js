import CSSTransfer from "./CSSTransfer"

let render = ({onPress})=>{
  let container = document.createElement("div")

  CSSTransfer({element:container, flexbox:{
    display:"flex",
    flexDirection: "column-reverse",
    height:"64px",
    backgroundColor:"#fff",
    borderBottom:"1px solid #ededed",
  }})

  let backElement = document.createElement("img")
  backElement.src = "./imgs/back.png"
  
  CSSTransfer({element:backElement, flexbox:{
    display:"flex",
    flexDirection:"column",
    width:"20px",
    height:"20px",
    paddingBottom:"15px",
    paddingLeft:"12px",
    paddingRight:"8px",
    paddingTop:"8px",
  }})

  backElement.addEventListener("touchend", onPress, false)

  container.appendChild(backElement)

  return container
}

export default render
