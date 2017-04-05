import Home from "./components/Home"
import Person from "./components/Person"
import PostDetail from "./components/PostDetail"

const pages = {
  Home: Home,
  Person: Person,
  PostDetail: PostDetail,
}

const apiready = ()=>{
  let page = api.pageParam.page || "Home"
  const rootNode = pages[page]()
  document.body.appendChild(rootNode)
}

module.exports = apiready


