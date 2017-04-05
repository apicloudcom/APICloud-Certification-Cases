import PersonDesc from "./PersonDesc.js"
import Nav from "./Nav"
import CSSTransfer from "./CSSTransfer"

let info = api.pageParam.author

let personDescNode = PersonDesc(info)

let rootNode = document.createElement("div")

CSSTransfer({element:rootNode, flexbox:{
  display:"flex",
  flexDirection: "column",
}})

let nav = Nav({
	onPress:(e)=>{
		window.close()
	}
})

rootNode.appendChild(nav)
rootNode.appendChild(personDescNode)

document.body.appendChild(rootNode)
