const box = document.getElementsByClassName("box")[0];
box.addEventListener("mousedown", Pulsar);
box.addEventListener("mouseup", Soltar);
const texto = document.getElementById("texto");
texto.addEventListener("keydown", teclaPulsar);
texto.addEventListener("keyup", teclaSoltar);
texto.addEventListener("keydown", queTeclaEs);

function Pulsar() {
    console.log("Has pulsado la caja");
}

function Soltar() {
    console.log("Has soltado el boton izquierdo dentro de la caja");
}

function teclaPulsar() {
    console.log("Has pulsado una tecla")
}
function teclaSoltar() {
    console.log("Has soltado una tecla")
}

function queTeclaEs(event) {
    var tecla = event.keyCode;
    teclafinal = String.fromCharCode(tecla)
    console.log(teclafinal);
}
