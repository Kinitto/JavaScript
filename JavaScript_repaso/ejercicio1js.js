function btnAplicar(){
    //declaro las variables tabla posicion equipo y puntos con sus respectivas ids
    var tbl = document.getElementById("tabla1");
    var posicion = document.getElementById("posicion").value;
    var equipo = document.getElementById("equipo").value;
    var puntos = document.getElementById("puntos").value;

    //seleccionamos la tabla y añadimos row con la posicion que seleccionamos, celda 1 para equipos y 2 para puntos.
    document.getElementById("tabla1").rows[posicion].cells[1].innerHTML = equipo;
    document.getElementById("tabla1").rows[posicion].cells[2].innerHTML = puntos;

}