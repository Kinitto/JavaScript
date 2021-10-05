window.onclick=redimensionar;

var texto = document.getElementById("prueba");
var boton = document.getElementById("btnPrueba").addEventListener("",redimensionar);
var ancho = window.innerWidth
var alto = window.innerHeight

texto.innerHTML = "Tamaño de la ventana del navegador ancho: " + ancho + ", alto: " + alto + ".";

function redimensionar(){
    window.open("http://127.0.0.1:5500/index.html","Ventana","width=250,height=250");

}