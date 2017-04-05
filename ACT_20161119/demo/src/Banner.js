let render = ({banners})=>{
  let container = document.createElement("div")

  let winWidth = window.innerWidth || document.documentElement.clientWidth
                  || document.getElementsByTagName('body')[0].clientWidth

  Object.assign(container.style,{
    display:"flex",
    flexDirection: "column",
    width:`${winWidth}px`,
    height: `${winWidth*0.5}px`,
    backgroundColor:"#efefef",
  })

  if (typeof api.require !== "undefined") {
    let paths = banners.map(({app_image})=>app_image)
    let UIScrollPicture = api.require('UIScrollPicture');
    UIScrollPicture.open({
        rect: {
            x: 0,
            y: 0,
            w: winWidth,
            h: winWidth * 0.5
        },
        data: {
            paths: paths,
        },
        interval: 3,
        fixedOn: api.frameName,
        loop: true,
        fixed: false,
        styles: {
            indicator: {
                align: 'center',
                color: '#efefef',
                activeColor: '#909090'
            }
        },
    }, function(ret, err) {
        if (ret.eventType === "click") {
          let url = banners[ret.index]["link"]

          let browser = api.require('webBrowser')
          browser.open({
              url: url,
              titleBar:{
                visible:true,
                bg: "#fff",
                textColor:"#9a9a9a",
              },
          })
        }
    })
  }

  return container
}

export default render
