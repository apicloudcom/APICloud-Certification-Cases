import PersonDesc from "./PersonDesc.js"
import Nav from "./Nav"
import CSSTransfer from "./CSSTransfer"

let render = ()=>{
	let info = api.pageParam.author

	let personDescNode = PersonDesc(info)
	let rootNode = document.createElement("div")

	CSSTransfer({element:rootNode, flexbox:{
	display:"flex",
	flexDirection: "column",
	}})

	let nav = Nav({
		onPress:(e)=>{
			api.closeWin()
		}
	})

	rootNode.appendChild(nav)
	rootNode.appendChild(personDescNode)
	
   return rootNode
}

export default render
module.exports = render
	


