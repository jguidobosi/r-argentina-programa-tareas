//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

let botonIngresar = document.querySelector("#ingresar");
let formNombreUsuario = document.querySelector("#nombre-usuario");
let formApellidoUsuario = document.querySelector("#apellido-usuario");
let formEdadUsuario = document.querySelector("#edad-usuario");
let parrafoSaludo = document.querySelector("#parrafo-saludo");
let tituloSaludo = document.querySelector("#cabecera");

botonIngresar.onclick = function(){
    let nombreUsuario = formNombreUsuario.value;
    let apellidoUsuario = formApellidoUsuario.value;
    let edadUsuario = Number(formEdadUsuario.value);

    tituloSaludo.innerText = `Bienvenido/a ${nombreUsuario}!`
    parrafoSaludo.innerText = `Usted es ${nombreUsuario} ${apellidoUsuario}, de ${edadUsuario} años.`
}