import Nav from "./Nav"
import CSSTransfer from "./CSSTransfer"

let render = ()=>{
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

	let url = api.pageParam.url
	api.openFrame({
		name:"name",
		"url": url,
		rect: {
			x: 0,
			y: 65,
			w: api.winWidth,
			h: api.winHeight - 64,
		},
	})

	// let url = api.pageParam.url
	// let browser = api.require('UIWebBrowser')
	// browser.open({
	// 	path: url,
	// 	rect: {
	// 		x: 0,
	// 		y: 65,
	// 		w: api.winWidth,
	// 		h: api.winHeight - 64,
	// 	},
	// })

   return rootNode
}

export default render
module.exports = render
	


