function btnAñadir(){
    //creamos las variables lista producto y posicion
    var lista = document.getElementById("Lista1");
    var productoNuevo = document.getElementById("Nuevo").value;
    var posicionProducto = document.getElementById("Posicion").value;

    //creamos la variable entrada que hará nuestro li.
    var entrada = document.createElement('li');
    //esto crea nuestro li completo-
    entrada.appendChild(document.createTextNode(productoNuevo));

    //en la lista usamos insertbefore, para insertar despues "de", entrada es nuestro <li>productonuevo<li>,
    //con elementsByTagName li hacemos un array con todos los elementos li y le restamos 1 a la posicion que marcamos.

    lista.insertBefore(entrada,document.getElementsByTagName("li")[posicionProducto-1])
}

function btnBorrar(){
    //seleccionas la lista y la posicion del producto
    let lista = document.querySelector('ul');
    var posicionProducto = document.getElementById("Posicion").value;

    //usamos el remove y selecionamos la posicion que queremos eliminar

    lista.removeChild(document.getElementsByTagName("li")[posicionProducto-1]);


    
}