const {Menu, BrowserWindow} = require('electron')
// 创建一个菜单模板
var template = [
    {
        label: "首选项",
        submenu:[
            {
                label: "打开"
            },
            {
                label: "保存"
            },
            {
                label: "退出"
            }
        ]
    },
    {
        label: "视图",
        submenu:[
            {
                label: "常规",
                click: ()=>{
                    var win = new BrowserWindow({
                        width:500,
                        height: 250
                    })
                    win.loadFile("sub2.html")
                    win.on("closed", ()=>{
                        win = null
                    })
                }
            },
            {
                label: "扁平"
            },
            {
                label: "高级"
            }
        ]
    }
]

var m = Menu.buildFromTemplate(template)

Menu.setApplicationMenu(m)