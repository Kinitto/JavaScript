window.onload = function () { totalEmpleados() };
const añadir = document.getElementById("btnAñadir");
const borrar = document.getElementById("btnBorrar");
const modificar = document.getElementById("btnModificar");

añadir.addEventListener("click", añadirEmpleado);
borrar.addEventListener("click", borrarEmpleado);
modificar.addEventListener("click", modificarEmpleado);


var numTotalEmpleados = 3;


// Lista de empleados
let listaEmpleados = [
    {
        "numEmpleado": 'numEmpleado',
        "dniEmpleado": '77332344K',
        "nombreEmpleado": 'Maria',
        "apellidosEmpleado": 'Perez Izquierdo'
    },
    {
        "numEmpleado": 'numEmpleado',
        "dniEmpleado": '23445677J',
        "nombreEmpleado": 'Javier',
        "apellidosEmpleado": 'Lopez Martín'
    },
    {
        "numEmpleado": 'numEmpleado',
        "dniEmpleado": '12345678H',
        "nombreEmpleado": 'Manuel',
        "apellidosEmpleado": 'Sánchez Marcos'
    }
];

function añadirEmpleado() {

    var tabla = document.getElementById("tabla");
    let tr = document.createElement('tr');

    let empleadoValido = true;
    let numEmpleado = document.getElementById("numEmpleado").value;
    let dniEmpleado = document.getElementById("dniEmpleado").value;
    let nombreEmpleado = document.getElementById("nombreEmpleado").value;
    let apellidosEmpleado = document.getElementById("apellidosEmpleado").value;

    // Mapea el empleado
    const empleado = mapEmpleado(numEmpleado, dniEmpleado, nombreEmpleado, apellidosEmpleado);
    // Comprueba si existe el dni
    listaEmpleados.filter(i => {
        if (i.dniEmpleado === empleado.dniEmpleado) {
            alert("Ya existe un empleado con este DNI");
            empleadoValido = false;
        }
    });



    if (empleadoValido) {
        // Recorre el objeto y añade al tr una lista de td con su text node
        for (const key in empleado) {
            let td = document.createElement('td');
            let tn = document.createTextNode(empleado[key]);
            tr.appendChild(td);
            td.appendChild(tn);


        }

        // Añade a la tabla el tr creado y a la lista
        tabla.appendChild(tr);
        listaEmpleados.push(empleado);
        numTotalEmpleados++;
        totalEmpleados()
    }
}
//Objeto empleado
function mapEmpleado(numEmpleado, dniEmpleado, nombreEmpleado, apellidosEmpleado) {
    return empleado = {
        "numEmpleado": numEmpleado,
        "dniEmpleado": dniEmpleado,
        "nombreEmpleado": nombreEmpleado,
        "apellidosEmpleado": apellidosEmpleado
    }
};





function borrarEmpleado() {

    let tabla = document.getElementById("tabla");
    let tds= document.querySelectorAll("td:nth-child(2)")

    let borrarError = true;
    let numEmpleado = document.getElementById("numEmpleado").value;
    let dniEmpleado = document.getElementById("dniEmpleado").value;
    let nombreEmpleado = document.getElementById("nombreEmpleado").value;
    let apellidosEmpleado = document.getElementById("apellidosEmpleado").value;

    const empleado = mapEmpleado(numEmpleado, dniEmpleado, nombreEmpleado, apellidosEmpleado);

    listaEmpleados.forEach(i => {
        let resultado;
        if (i.dniEmpleado === empleado.dniEmpleado) {
            borrarError= false;
            
            for(let i = 0;i<tds.length;i++){
                if (tds[i].textContent==empleado.dniEmpleado){
                    resultado = tds[i].parentNode;
                }
            }
            tabla.removeChild(resultado);
            
        }
        
    });

    if (borrarError){
        alert("Ese DNI no EXISTE")
    }
  
    
}






function modificarEmpleado() {

    let empleadoModificado = true;
    let numEmpleado = document.getElementById("numEmpleado").value;
    let dniEmpleado = document.getElementById("dniEmpleado").value;
    let nombreEmpleado = document.getElementById("nombreEmpleado").value;
    let apellidosEmpleado = document.getElementById("apellidosEmpleado").value;

    const empleado = mapEmpleado(numEmpleado, dniEmpleado, nombreEmpleado, apellidosEmpleado);

    listaEmpleados.filter(i => {
        if (i.numEmpleado < empleado.numEmpleado) {
            alert("NO EXISTE EMPLEADO CON ESE NUMERO");
            empleadoModificado = false;
        }
    });

    if (empleadoModificado = true) {
        //seleccionamos la tabla y añadimos row con la posicion que seleccionamos, celda 1 para equipos y 2 para puntos.
        document.getElementById("tabla").rows[numEmpleado].cells[0].innerHTML = numEmpleado;
        document.getElementById("tabla").rows[numEmpleado].cells[1].innerHTML = dniEmpleado;
        document.getElementById("tabla").rows[numEmpleado].cells[2].innerHTML = nombreEmpleado;
        document.getElementById("tabla").rows[numEmpleado].cells[3].innerHTML = apellidosEmpleado;
    }
}

function totalEmpleados() {

    var resultado = document.getElementById("numeroTotal");
    resultado.innerHTML = ("Numero total de empleados: " + numTotalEmpleados);

}