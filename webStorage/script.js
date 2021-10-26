formulario.addEventListener('submit', (e) => {
    let tarea = document.getElementById("textoTarea").value;
    let formulario = document.getElementById("formulario");
    let div = document.getElementById("div");

    e.preventDefault();

    const datos = {
        tarea: tarea,
        finished: false
    }

    localStorage.setItem('Key', JSON.stringify(datos));
  
    div.innerHTML += `
       
    <p>${datos.tarea}</p>
    <p>${datos.finished}</p>                  

`;


})
