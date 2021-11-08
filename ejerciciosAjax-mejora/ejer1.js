const disponibilidad = document.getElementById('disponibilidad');
const linkComprobar = document.getElementById('comprobar');
const lista = document.getElementById('lista');

linkComprobar.addEventListener("click", function(){
    let login = new FormData(document.getElementById("form"));

    fetch('http://ejercicio2.loc/compruebaDisponibilidadXML.php', {

        method: 'POST',
        body: login
    })
.then(response => {
    if (response.ok) {
        return response.text();
    }
    return Promise.reject(response);
})


.then(datos =>{
   const parser = new DOMParser();
        const xml = parser.parseFromString(datos, "application/xml");
        
        let tagDisponible = xml.getElementsByTagName('disponible')[0];
        let textoDisponible = document.createElement('p');
        let texto = document.createTextNode(tagDisponible.textContent);
        textoDisponible.appendChild(texto);
        disponibilidad.appendChild(textoDisponible);    

        let opciones = xml.getElementsByTagName('login');
        for (let i = 0; i < opciones.length; i++) {
            let opcion = opciones[i];
            let listaOpciones = document.createElement('li');
            listaOpciones.textContent = opcion.textContent;
            lista.appendChild(listaOpciones);
        }
    })
    .catch(response => console.log(response.error));
})