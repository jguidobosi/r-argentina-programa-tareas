/*# Tarea clase 8

A las 2 tareas de la clase 6, ponerles las validaciones que consideren
necesarias.

TIP: Las edades no pueden tener decimales.
*/

let $botonIngresar = document.querySelector("#boton-ingresar");
let $botonCalcular = document.querySelector("#boton-calcular");
let $botonReiniciar = document.querySelector("#boton-reiniciar");
let $numeroDeFamiliares = document.querySelector("#numero-de-familiares");
let $formularioGeneral = document.querySelector("#division-formulario");
let $resultado = document.querySelector("#resultado");
let $errorCantidad = document.querySelector("#mensaje-error-cantidad");
let $errorEdades = document.querySelector("#mensaje-error-edades");
const ENIE = "\u00F1";
const MAXIMO_EDAD = 150;
const MAXIMO_FAMILIARES = 25;

function calcularMenor(numeros) {

    let menor = Number(numeros[0]);

    for (let i = 1; i < numeros.length; i++) {

        if (Number(numeros[i]) < menor) {

            menor = Number(numeros[i]);

        }
    }

    return menor;
}
function calcularMayor(numeros) {

    let mayor = Number(numeros[0]);

    for (let i = 1; i < numeros.length; i++) {

        if (Number(numeros[i]) > mayor) {

            mayor = Number(numeros[i]);

        }
    }

    return mayor;

}
function calcularPromedio(numeros) {

    let sumatoria = 0;
    let promedio = 0;

    for (let i = 0; i < numeros.length; i++) {

        sumatoria += Number(numeros[i]);

    }

    promedio = (sumatoria / numeros.length);


    return (Math.trunc(promedio * 100)) / 100; //Truncar para que solo haya dos decimales.

}
function validarNumeroDeFamiliares(numeroDeFamiliares) {

    if (!/^[0-9]+$/.test(numeroDeFamiliares)) {
        return "Ingrese una cantidad entera";
    }
    if (Number(numeroDeFamiliares) >= MAXIMO_FAMILIARES) {
        return `Ingrese una cantidad menor a ${MAXIMO_FAMILIARES}`;
    }
    return "";
}
function manejarIngreso(errorValidacionFamiliares, numeroDeFamiliares) {

    if (errorValidacionFamiliares) {

        $errorCantidad.textContent = errorValidacionFamiliares;
        $numeroDeFamiliares.className = "form-control is-invalid";

    } else {

        $errorCantidad.textContent = "";
        $numeroDeFamiliares.className = "form-control";

        crearEntradas(numeroDeFamiliares);

        $botonIngresar.classList.add("oculto");
        $numeroDeFamiliares.disabled = true;
        $botonCalcular.classList.remove("oculto");
        $botonReiniciar.classList.remove("oculto");

    }

}
function crearEntradas(numeroDeFamiliares) {

    let $seccionConFormularios = document.createElement("div");
    $seccionConFormularios.className = `formulario-dinamico`;

    for (let i = 0; i < numeroDeFamiliares; i++) {

        let $nuevoInput = document.createElement("input");

        $nuevoInput.placeholder = `Edad familiar ${i + 1}:`;
        $nuevoInput.type = `number`;
        $nuevoInput.id = "edad";
        $nuevoInput.classList.add("form-control");

        let $nuevoEspacioVacio = document.createElement("div");
        $nuevoEspacioVacio.textContent = "‎";


        $seccionConFormularios.appendChild($nuevoInput);
        $seccionConFormularios.appendChild($nuevoEspacioVacio);

    }

    $formularioGeneral.appendChild($seccionConFormularios);

}
function leerEntradas() {


    let $listaDeNodosInput = document.querySelectorAll("#edad");

    let edades = [];

    for (i = 0; i < $listaDeNodosInput.length; i++) {

        let edad = $listaDeNodosInput[i].value;

        if (edad !== "") {

            edades.push(edad);

            if (Number(edad) >= MAXIMO_EDAD || !/^[0-9]+$/.test(edad)) {

                $listaDeNodosInput[i].classList.add("is-invalid");

            } else {

                $listaDeNodosInput[i].classList.remove("is-invalid");

            }
        }
    }

    return edades;

}
function validarEdades(edades) {

    let banderaNumeroExcesivo = false;
    let banderaNumeroDecimal = false;

    for (i = 0; i < edades.length; i++) {

        if (Number(edades[i]) >= MAXIMO_EDAD) {
            banderaNumeroExcesivo = true;
        }

        if (!/^[0-9]+$/.test(edades[i])) {
            banderaNumeroDecimal = true;
        }
    }

    if (banderaNumeroExcesivo && banderaNumeroDecimal) {
        return `Ingrese las edades en numeros enteros menores a ${MAXIMO_EDAD}`;
    }
    if (banderaNumeroExcesivo) {
        return `Ingrese numeros menores a ${MAXIMO_EDAD}`;
    }
    if (banderaNumeroDecimal) {
        return "Ingrese numeros enteros";
    }
    return "";
}
function manejarIngresoEdades(error, edades) {

    if (error) {

        $errorEdades.textContent = error;

    } else {

        $errorEdades.textContent = "";

        let edadMayor = calcularMayor(edades);
        let edadMenor = calcularMenor(edades);
        let edadPromedio = calcularPromedio(edades);

        let textoResultadoExitoso = `El familiar de mayor edad tiene ${edadMayor} a${ENIE}os, el menor ${edadMenor}, y tienen un promedio de ${edadPromedio} a${ENIE}os.`;

        escribirResultado(textoResultadoExitoso);

    }

}
function escribirResultado(texto) {

    $resultado.classList.remove("oculto");

    $resultado.innerText = texto;
}
function reiniciar() {

    $errorEdades.textContent = "";
    $errorCantidad.textContent = "";

    let formulariosDinamicos = document.querySelectorAll(".formulario-dinamico");

    formulariosDinamicos.forEach(function borrar(elemento) {

        elemento.remove();

    });

    $botonIngresar.classList.remove("oculto");
    $numeroDeFamiliares.disabled = false;
    $numeroDeFamiliares.value = "";
    $botonCalcular.classList.add("oculto");
    $botonReiniciar.classList.add("oculto");
    $resultado.classList.add("oculto");

}

//----------------------------------------------------


$botonIngresar.onclick = function () {

    let numeroDeFamiliares = $numeroDeFamiliares.value;

    let errorValidacionFamiliares = validarNumeroDeFamiliares(numeroDeFamiliares);

    manejarIngreso(errorValidacionFamiliares, numeroDeFamiliares);

}


$botonCalcular.onclick = function () {

    let edades = leerEntradas();

    let error = validarEdades(edades);

    manejarIngresoEdades(error, edades);

}

$botonReiniciar.onclick = function () {

    reiniciar();

}
