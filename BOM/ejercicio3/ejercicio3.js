

var botonAssign = document.getElementById("btnAssign").addEventListener("click",Assign);
var botonReplace = document.getElementById("btnReplace").addEventListener("click",Replace);
var botonReload = document.getElementById("btnReload").addEventListener("click",Reload);


function Assign(){
    location.assign("https://youtube.com")
}

function Replace(){
    location.replace("https://youtube.com")
}

function Reload(){
    location.reload(false);
}