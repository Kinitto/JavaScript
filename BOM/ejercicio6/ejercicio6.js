var botonAtras = document.getElementById("btnAtras").addEventListener("click",Atras);
var botonAlante = document.getElementById("btnAlante").addEventListener("click",Alante);


function Atras(){
    window.history.back();
    console.log("atras")
}

function Alante(){
    window.history.forward();
    console.log("alante")

}