window.addEventListener("load", function () {
    cargarDatos();
})

function cargarDatos() {

  let tablaPosts = document.getElementById("tablaPosts");
  tablaPosts.addEventListener("click",borrar)
  tbody = document.getElementById("body")

  fetch('http://localhost:3000/posts/')
  .then(response => {  // tenemos los datos en formato JSON, los transformamos en un objeto
    if (response.ok) { // comprobamos que esta dentro de el status 200 y es correcto
      return response.json();
    }
    return Promise.reject(response)  //hacemos que si no es correcto sea reject para que se vaya al catch
  })
                        
  .then(posts => {      // ya tenemos los datos en _myData_ como un objeto o array  que podemos procesar
     // Aquí procesamos los datos (en nuestro ejemplo los pintaríamos en la tabla)
     tbody.innerHTML = '' // borramos el contenido de la tabla
            posts.forEach(posts => {
                const newPost = document.createElement('tr')
                newPost.innerHTML = `
                <td>${posts.title}</td>
                <td>${posts.author}</td>
                <td><a href="ver.html?id=${posts.id}">Ver</a><a href="#" id="${posts.id}" class="borrar">Borrar</a></td>
                   `
                tbody.appendChild(newPost)
              })
    .catch(err => console.error(err));

   }) 
}

function borrar(e) {
    if (e.target && e.target.matches("a.borrar")){
    e.preventDefault();
    id= e.target.id;
    
    const request = new XMLHttpRequest;
    request.open('DELETE', 'http://localhost:3000/posts/' + id, true);
    request.send();
    request.addEventListener('load', function () {

        if (request.status == 200) {

            alert("Post borrado")
            

        }
    });
    location.reload();
}
}

