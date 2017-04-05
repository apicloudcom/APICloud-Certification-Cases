import "babel-polyfill"

window.apiready = ()=>{
  let {page} = api.pageParam
  if( ! page){
    page = "Home"
  }

  /* 重写这两个方法,其他页面方便使用. */
  window.open = (URL="",name="",features={},replace=true)=>{
  api.openWin({
    name: name,
    url: URL,
      pageParam: features,
    })
  }

  window.close = ()=>{
    api.closeWin()
  }

  let script = document.createElement('script')
  script.src = `./lib/${page}.js`
  document.body.appendChild(script)
}
