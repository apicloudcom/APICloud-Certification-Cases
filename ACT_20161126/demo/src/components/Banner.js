let render = ({banners})=>{
  let container = document.createElement("div")

  let winWidth = window.innerWidth || document.documentElement.clientWidth
                  || document.getElementsByTagName('body')[0].clientWidth

  let height = winWidth * 4.0 / 9.0
  Object.assign(container.style,{
    display:"flex",
    flexDirection: "column",
    width:`${winWidth}px`,
    height: `${height}px`,
    backgroundColor:"#efefef",
  })

  if (typeof api.require !== "undefined") {
    let paths = banners.map(({app_image})=>app_image)
    let UIScrollPicture = api.require('UIScrollPromptView');
    UIScrollPicture.open({
        rect: {
            x: 0,
            y: 0,
            w: winWidth,
            h: height
        },
        auto: true,
        data: {
            paths: paths,
        },
        interval: 3,
        fixedOn: api.frameName,
        loop: true,
        fixed: false,
        styles: {
            indicator: {
                color: '#f9f9f9',
                activeColor: '#ea7b4f',
                align:"right",
            }
        },
    }, function(ret, err) {
        if (ret.eventType === "click") {
            let url = banners[ret.index]["link"]
            let page = "PostDetail"

            api.openWin({
                url:"./index.html",
                name: page, 
                pageParam:{
                page: page,
                url: url,
                }
            })
        }
    })
  }

  return container
}

export default render
module.exports = render