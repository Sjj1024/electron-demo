var electron = require('electron')  // 引入electron

var app = electron.app  // 创建app

var BrowserWindow = electron.BrowserWindow  // 创建窗口对象

var mainWindow = null  // 创建主进程

app.on('ready', ()=>{
    // 监听打开窗体事件
    mainWindow = new BrowserWindow({
        width:800,
        height:400,
        webPreferences: {
            nodeIntegration:true, // 集成node环境
            enableRemoteModule: true   // 使用remote模块
        }
    })  // 设置窗口尺寸
    // 引入菜单的js代码
    require("./main/menu.js")
    mainWindow.loadFile('index.html')  // 加载显示的网页
    mainWindow.webContents.openDevTools()  // 打开开发者模式，出现调试模式
    mainWindow.on('close', ()=>{
        mainWindow = null  // 监听关闭窗口事件
    })
})