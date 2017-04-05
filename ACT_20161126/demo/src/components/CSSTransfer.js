let transfer = ({element,flexbox})=>{
  let transferFlexbox = Object.assign(flexbox)

  if ( ! element.style.cssText) { // 初始设置,以使用 flexbox.
    element.style.cssText = `
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        `
  }

  /* 目前采用最基础方式,就是同时添加对应的兼容属性. */
  let boxConvert = {
    "column": "vertical",
    "row": "horizontal",
    "column-reverse":"vertical",
    "row-reverse":"horizontal",
    "flex-start":"start",
    "flex-end":"end",
    "space-between": "justify",
    "space-around": "justify",
  }

  if (transferFlexbox.flexDirection) {
    Object.assign(transferFlexbox,{
      "-webkit-flex-direction": transferFlexbox.flexDirection,
      "-webkit-box-orient": boxConvert[transferFlexbox.flexDirection] || transferFlexbox.flexDirection,
    })

    if (transferFlexbox.flexDirection === "column-reverse" ||
        transferFlexbox.flexDirection === "row-reverse") {
          Object.assign(transferFlexbox,{
            "-webkit-box-pack":"end",
            "-webkit-box-direction":"reverse"
          })
    }
  }

  if (transferFlexbox.alignItems) {
    Object.assign(transferFlexbox,{
      "-webkit-align-items": transferFlexbox.alignItems,
      "-webkit-box-align": boxConvert[transferFlexbox.alignItems] || transferFlexbox.alignItems,
    })
  }

  if (transferFlexbox.justifyContent) {
    Object.assign(transferFlexbox,{
      "-webkit-justify-content": transferFlexbox.justifyContent,
      "-webkit-box-pack": boxConvert[transferFlexbox.justifyContent] || transferFlexbox.justifyContent,
    })
  }

  if (transferFlexbox.flex) {
    Object.assign(transferFlexbox,{
      "-webkit-flex": transferFlexbox.flex,
      "-webkit-box-flex": boxConvert[transferFlexbox.flex] || transferFlexbox.flex,
    })
  }

  Object.assign(element.style, transferFlexbox)
}

export default transfer
module.exports = transfer
