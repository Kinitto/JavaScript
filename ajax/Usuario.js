window.addEventListener("load", function () {
    validar();

})
function validar() {

    let name, mail, pass, phone, formulario, btnRegistrar;
    formulario = document.getElementById("formularioUser")
    btnRegistrar = document.getElementById("btnAñadir");
    btnPost = document.getElementById("btnPost");

    name = document.getElementById("name");
    mail = document.getElementById("mail");
    phone = document.getElementById("phone");
    pass = document.getElementById("pass");

    const campos = {
        name: false,
        mail: false,
        pass: false,
        phone: false
    }

    //nombre que empieze en mayusculas y tenga mas de un caracter 
    const nameValido = (value) => /^(?!.* $)[A-Z][a-z ]+$/gm.test(value)
    name.addEventListener("focusout", function () {
        console.log(name.value);
        if (nameValido(name.value)) {
            console.log("name correcto");
            campos.name = true;
        }

        //comprueba si los campos son todos verdaderos para activar el boton de registrarse
        if (campos.name === true && campos.mail === true && campos.pass === true && campos.phone === true) {
            btnRegistrar.disabled = false;

        }
        if (campos.name === false) {
            alert("La primera letra del nombre debe ser en mayuscula")

        }
    });

    //mail correcto que contenga @X y .com/es 
    const mailValido = (value) => /^[a-z0-9A-Z]+@[a-z]+(?:\.[a-z]{3})/gm.test(value)
    mail.addEventListener("focusout", function () {
        console.log(mail.value);
        if (mailValido(mail.value)) {
            console.log("mail correcto");
            campos.mail = true;
        }
        if (campos.name === true && campos.mail === true && campos.pass === true && campos.phone === true) {
            btnRegistrar.disabled = false;

        }
        if (campos.mail === false) {
            alert("Formato de correo invalido.")

        }
    });
    //contraseña que contenga mayus, minus , numeros tambien
    const passValida = (value) => /(?=^.{3,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/gm.test(value)
    pass.addEventListener("focusout", function () {
        console.log(pass.value);
        if (passValida(pass.value)) {
            console.log("pass correcta");
            campos.pass = true;
        }
        if (campos.name === true && campos.mail === true && campos.pass === true && campos.phone === true) {
            btnRegistrar.disabled = false;

        }

        if (campos.pass === false) {
            alert("La contraseña tiene que contener Mayusculas, minisculas y un numero almenos.")

        }
    });
    //formato tlf español con +34 o sin 
    const phoneValido = (value) => /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/gm.test(value)
    phone.addEventListener("focusout", function () {
        console.log(phone.value);
        if (phoneValido(phone.value)) {
            console.log("phone correcto");
            campos.phone = true;
            console.log(campos);


        }
        if (campos.name === true && campos.mail === true && campos.pass === true && campos.phone === true) {
            btnRegistrar.disabled = false;


        }
        if (campos.phone === false) {
            alert("El formato debe ser de telefono español.")

        }
    });


}

document.getElementById("formularioUser").addEventListener("submit", (event) => {
    event.preventDefault();
    const usuario = {
        name: document.getElementById("name").value,
        mail: document.getElementById("mail").value,
        pass: document.getElementById("pass").value,
        phone: document.getElementById("phone").value,
    }

    fetch('http://localhost:3000/profile', {
        method: 'POST', 
        body: JSON.stringify(usuario), // los datos que enviamos al servidor en el 'send'
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
            alert("Usuario creado.")
            location.reload();
          return response.json();
         
        }
        return Promise.reject(response) 
      })
      .then(datos => datosServidor=datos)
      .catch(err => {
        console.log('Error en la petición HTTP: '+err.message);
      })
    
})



