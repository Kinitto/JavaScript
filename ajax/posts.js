window.addEventListener("load", function () {
    cargarDatos();
})

function cargarDatos() {
    
    let tablaPosts = document.getElementById("tablaPosts");
    tablaPosts.addEventListener("click",borrar)
    tbody = document.getElementById("body")
    getPosts()
    .then(function(posts) {
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
          })
          .catch(function(error) {
            console.error(error)
          })
}

function getPosts() {
    return new Promise(function(resolve, reject) {
      let peticion = new XMLHttpRequest()
      peticion.open('GET', 'http://localhost:3000/posts')
      peticion.send()
      peticion.addEventListener('load', () => {
        if (peticion.status === 200) {
          resolve(JSON.parse(peticion.responseText))
        } else {
          reject("Error " + this.status + " (" + this.statusText + ") en la petición")
        }
      })
      peticion.addEventListener('error', () => reject('Error en la petición HTTP'))
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

