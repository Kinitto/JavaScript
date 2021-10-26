formulario.addEventListener('submit', (e) => {
    let tarea = document.getElementById("textoTarea").value;
    let formulario = document.getElementById("formulario");
    e.preventDefault();

    const datos = {
        tarea: tarea,
        finished: false
    }
    localStorage.setItem('Key', JSON.stringify(datos));

    location.reload();
})