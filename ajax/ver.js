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

    fetch('http://localhost:3000/posts?id=' + id)
    .then(response => {  // tenemos los datos en formato JSON, los transformamos en un objeto
      if (response.ok) { // comprobamos que esta dentro de el status 200 y es correcto
        return response.json();
      }
      return Promise.reject(response)  //hacemos que si no es correcto sea reject para que se vaya al catch
    })
                          
    .then(posts => {      // ya tenemos los datos en _myData_ como un objeto o array  que podemos procesar
       // Aquí procesamos los datos (en nuestro ejemplo los pintaríamos en la tabla)
            titulo.innerHTML = (posts[0].title);
            contenido.innerHTML = (posts[0].content);
                })
      .catch(err => console.error(err));

}

function cargarComentario() {
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    var id = urlParams.get("id");
    let tablaComentario = document.getElementById("tablaComentario")

    fetch('http://localhost:3000/comments?postId=' + id)
    .then(response => {  // tenemos los datos en formato JSON, los transformamos en un objeto
      if (response.ok) { // comprobamos que esta dentro de el status 200 y es correcto
        return response.json();
      }
      return Promise.reject(response)  //hacemos que si no es correcto sea reject para que se vaya al catch
    })
                          
    .then(coments => {      // ya tenemos los datos en _myData_ como un objeto o array  que podemos procesar
       // Aquí procesamos los datos (en nuestro ejemplo los pintaríamos en la tabla)
       coments.forEach(coments => {
        tablaComentario.innerHTML += `
        <tr>
            <td>${coments.body}</td>
            <td>${coments.user}</td>                    
        </tr>
        `;

    })
    .catch(err => console.error(err));

}) 
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


