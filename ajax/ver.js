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


    fetch('http://localhost:3000/profile')
    .then(response => {  // tenemos los datos en formato JSON, los transformamos en un objeto
      if (response.ok) { // comprobamos que esta dentro de el status 200 y es correcto
        return response.json();
      }
      return Promise.reject(response)  //hacemos que si no es correcto sea reject para que se vaya al catch
    })
                          
    .then(profile => {      // ya tenemos los datos en _myData_ como un objeto o array  que podemos procesar
       // Aquí procesamos los datos (en nuestro ejemplo los pintaríamos en la tabla)
       profile.forEach(profile => {
        selectUser.innerHTML += `
        <option value = ${profile.name}>${profile.name}</option> 
        `;
    })
    .catch(err => console.error(err));

}) 

}

function enviarComentario(event) {
    event.preventDefault();
    let tablaComentario = document.getElementById("tablaComentario")
    const comentario = {
        body: document.getElementById("textoComentario").value,
        user: document.getElementById("selectUser").value,
        postId: id,
    }

    fetch('http://localhost:3000/comments', {
        method: 'POST', 
        body: JSON.stringify(comentario), // los datos que enviamos al servidor en el 'send'
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
            alert("Comentario creado.")
            location.reload();
          return response.json();
         
        }
        return Promise.reject(response) 
      })
      .then(datos => datosServidor=datos)
      .catch(err => {
        console.log('Error en la petición HTTP: '+err.message);
      })
      

}


