var fs = require("fs")
window.onload = function () {
    var btn = this.document.querySelector("#btn")
    var mybody = this.document.querySelector("#mybody")
    btn.onclick = function () {
        fs.readFile("xiaojiejie.txt", (err, data)=>{
            mybody.innerHTML = data
        })
    }

}