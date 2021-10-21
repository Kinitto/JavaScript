window.addEventListener("load", function () {
    cargarDatos();
})

function cargarDatos() {
    let tablaPosts = document.getElementById("tablaPosts");
    tablaPosts.addEventListener("click",borrar)
    const request = new XMLHttpRequest;
    request.open('GET', 'http://localhost:3000/posts', true);
    request.send();
    request.addEventListener('load', function () {

        if (request.status == 200) {

            let datos = JSON.parse(request.responseText);
            let contenido = document.getElementById("body");
            contenido.innerHTML = '';

            for (let i of datos) {

                contenido.innerHTML += `
                <tr>
                    <td>${i.title}</td>
                    <td>${i.author}</td>
                    <td><a href="ver.html?id=${i.id}">Ver</a><a href="#" id="${i.id}" class="borrar">Borrar</a></td>
                    
                </tr>

                ` ;
            }
        }
    });
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

