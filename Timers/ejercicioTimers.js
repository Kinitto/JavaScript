let fecha1 = document.getElementById("fecha1");
let texto1 = document.getElementById("texto1");

//que se carge al cargar la pagina
window.addEventListener('load', function () {
    //usamos el change en el listener para que funcione al actualizar los cambios de fecha
    fecha1.addEventListener('change', function () {
        //a la fecha le damos el tipo Date con el string de fecha
        let datos = new Date(fecha1.value);

        let dias = [
            'Domingo',
            'Lunes',
            'Martes',
            'Miercoles',
            'Jueves',
            'Viernes',
            'Sabado'
        ]
        //creamos array con los dias en español y se lo asignamos a cada numero
        //empieza en domingo por calendario americano.
        //getDay nos da un numero que sera la "i" que busca en nuestro array
        let diaNumero = datos.getDay()
        let diaNombre = dias[diaNumero]

        //lo mismo que con dias pero con los meses.
        let meses = [
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre'
        ]
        let mesNumero = datos.getMonth()
        let mesNombre = meses[mesNumero]

        //dia numerico de la semana
        let date = datos.getDate()
        //hora
        let hora = datos.getHours()
        //minutos
        let minutos = datos.getMinutes()

        //le damos formato en forma de la cadena resultado que queremos.
        let resultado = `Hoy es ${diaNombre}, ${date} 
        de ${mesNombre} y son las ${hora}:${minutos} horas`

        texto1.innerHTML = (resultado);

    });
});
//-------------------------------------------------------------------------

let años = document.getElementById("año");
let meses = document.getElementById("mes");
let texto2 = document.getElementById("texto2");

//que se carge al cargar la pagina
window.addEventListener('load', function () {

    año.addEventListener("focusout", function () {
        año = años.value;
        mes = meses.value;
        let diasMes = new Date(año, mes, 0).getDate();
        let diasSemana = 
        ['Domingo',
         'Lunes', 
         'Martes', 
         'Miércoles', 
         'Jueves', 
         'Viernes', 
         'Sábado'];

         let resultado = "";
        for (let dia = 1; dia <= diasMes; dia++) {
            // hay que restarle 1 para obtener el mes correcto
            let indice = new Date(año, mes -1, dia).getDay();
             resultado = resultado + (`<br>El día ${dia} del mes ${mes} de ${año} es ${diasSemana[indice]}`);
            texto2.innerHTML=(resultado);
        }
    });

});