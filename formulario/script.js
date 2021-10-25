window.addEventListener("load", function () {
    validar();

})

function validar() {

    let nombre, correo, contraseña, telefono, formulario, btnRegistrar;
    formulario = document.getElementById("formulario")
    btnRegistrar = document.getElementById("btnRegistrar");

    nombre = document.getElementById("nombre");
    correo = document.getElementById("correo");
    telefono = document.getElementById("telefono");
    contraseña = document.getElementById("contraseña");


    const campos = {
        nombre: false,
        correo: false,
        contraseña: false,
        telefono: false
    }


    const nombreValido = (value) => /^(?!.* $)[A-Z][a-z ]+$/gm.test(value)
    nombre.addEventListener("focusout", function () {
        console.log(nombre.value);
        if (nombreValido(nombre.value)) {
            console.log("Nombre correcto");
            campos.nombre = true;

        }
        else{
            campos.nombre = false;
            console.log("Nombre incorrecto");

        }
        if (campos.nombre === true && campos.correo === true && campos.contraseña === true && campos.telefono === true) {
            btnRegistrar.disabled = false;
    
        }
    });


    const correoValido = (value) => /^[a-z0-9A-Z]+@[a-z]+(?:\.[a-z]{3})/gm.test(value)
    correo.addEventListener("focusout", function () {
        console.log(correo.value);
        if (correoValido(correo.value)) {
            console.log("Correo correcto");
            campos.correo = true;
        }
        else{
            campos.correo = false;
            console.log("Correo incorrecto");

        }
        if (campos.nombre === true && campos.correo === true && campos.contraseña === true && campos.telefono === true) {
            btnRegistrar.disabled = false;
    
        }
    });

    const contraseñaValida = (value) => /(?=^.{3,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/gm.test(value)
    contraseña.addEventListener("focusout", function () {
        console.log(contraseña.value);
        if (contraseñaValida(contraseña.value)) {
            console.log("Contraseña correcta");
            campos.contraseña = true;
        }
        else{
            campos.contraseña = false;
            console.log("Contraseña incorrecta");

        }
        if (campos.nombre === true && campos.correo === true && campos.contraseña === true && campos.telefono === true) {
            btnRegistrar.disabled = false;
    
        }
    });

    const telefonoValido = (value) => /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/gm.test(value)
    telefono.addEventListener("focusout", function () {
        console.log(telefono.value);
        if (telefonoValido(telefono.value)) {
            console.log("telefono correcto");
            campos.telefono = true;
            console.log(campos);


        }
        else{
            campos.telefono = false;
            console.log("Telefono incorrecto");

        }
        if (campos.nombre === true && campos.correo === true && campos.contraseña === true && campos.telefono === true) {
            btnRegistrar.disabled = false;
    
        }
    });
}


