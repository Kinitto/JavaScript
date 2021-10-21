window.addEventListener("load", function () {
    cargarPost();
    cargarComentario();
    cargarUsuarios();


})

let btnComentario = document.getElementById("btnComentario");
btnComentario.addEventListener("click", enviarComentario);

const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    const id = urlParams.get("id");


function cargarPost() {
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    const id = urlParams.get("id");

    let contenido = document.getElementById("contenido")
    let titulo = document.getElementById("titulo")
    const request = new XMLHttpRequest;
    request.open('GET', 'http://localhost:3000/posts?id=' + id, true);
    request.send();
    request.addEventListener('load', function () {

        if (request.status == 200) {

            let datos = JSON.parse(request.responseText);
            titulo.innerHTML = (datos[0].title);
            contenido.innerHTML = (datos[0].content);
        }
    });


}

function cargarComentario() {
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    var id = urlParams.get("id");
    let tablaComentario = document.getElementById("tablaComentario")
    const request = new XMLHttpRequest;
    request.open('GET', 'http://localhost:3000/comments?postId=' + id, true);
    request.send();
    request.addEventListener('load', function () {

        if (request.status == 200) {

            let comentarios = JSON.parse(request.responseText);
            comentarios.forEach(comentario => {
                tablaComentario.innerHTML += `
                <tr>
                    <td>${comentario.body}</td>
                    <td>${comentario.user}</td>                    
                </tr>
                `;

            });


        }
    });
}

function cargarUsuarios() {
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    var id = urlParams.get("id");

    let selectUser = document.getElementById("selectUser")
    const request = new XMLHttpRequest;
    request.open('GET', 'http://localhost:3000/profile', true);
    request.send();
    request.addEventListener('load', function () {

        if (request.status == 200) {
            let datos = JSON.parse(request.responseText);

            for (let i of datos) {

                selectUser.innerHTML += `
            
                <option value = ${i.name}>${i.name}</option> 
                     
                `;
            }
        }
    });
}

function enviarComentario(event) {
    event.preventDefault();
    let tablaComentario = document.getElementById("tablaComentario")
    const newProduct = {
        body: document.getElementById("textoComentario").value,
        user: document.getElementById("selectUser").value,
        postId: id,
    }

    const peticion = new XMLHttpRequest();
    peticion.open('POST', 'http://localhost:3000/comments');
    peticion.setRequestHeader("Content-type", "application/json");
    peticion.send(JSON.stringify(newProduct));              // Hay que convertir el objeto a una cadena de texto JSON para enviarlo
    peticion.addEventListener('load', function () {
        if (peticion.status == 201) {
            alert("Comentario creado.")
            console.log(newProduct.user);
            location.reload();
        }

    })
}


