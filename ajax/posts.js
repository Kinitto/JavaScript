window.addEventListener("load", function () {
    cargarDatos();
})

function cargarDatos() {
    adsasd
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

