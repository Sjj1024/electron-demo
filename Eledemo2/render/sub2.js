const btn2 = this.document.querySelector("#btn2")
const BrowserWindow = require("electron").remote.BrowserWindow

window.onload = function () {
    btn2.onclick = ()=>{
        newWin = new BrowserWindow({
            width: 600,
            height: 300,
        })
        newWin.loadFile("sub2.html")
        newWin.on("close", ()=>{
            newWin = null;
        })
    }

}