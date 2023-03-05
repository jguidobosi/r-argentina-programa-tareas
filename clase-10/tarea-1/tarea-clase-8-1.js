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

    let menor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {

        if (numeros[i] < menor) {

            menor = numeros[i];

        }
    }

    return menor;
}

function calcularMayor(numeros) {

    let mayor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {

        if (numeros[i] > mayor) {

            mayor = numeros[i];

        }
    }

    return mayor;

}

function calcularPromedio(numeros) {

    let sumatoria = 0;
    let promedio = 0;

    for (let i = 0; i < numeros.length; i++) {

        sumatoria += numeros[i];

    }

    promedio = (sumatoria / numeros.length);

    return promedio;

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

function crearEntradas(numeroDeFamiliares) {

    let $seccionConFormularios = document.createElement("div");

    for (let i = 0; i < numeroDeFamiliares; i++) {

        let $nuevoInput = document.createElement("input");

        $nuevoInput.placeholder = `Edad familiar ${i + 1}:`;
        $nuevoInput.type = `number`;
        $nuevoInput.id = "edad";
        $nuevoInput.classList.add("small-top-marign");
        $nuevoInput.classList.add("form-control");
        

        $seccionConFormularios.className = `formulario-dinamico`;

        $seccionConFormularios.appendChild($nuevoInput);

    }

    $formularioGeneral.appendChild($seccionConFormularios);

}

function leerEntradas($listaDeNodosInput) {

    let edadesNumeros = [];
    let edadesStrings = [];

    for (i = 0; i < $listaDeNodosInput.length; i++) {

        let stringEdad = $listaDeNodosInput[i].value;

        let edad = Number(stringEdad);

        if (stringEdad !== "") {

            edadesStrings.push(stringEdad);
            edadesNumeros.push(edad);

            if (edad >= MAXIMO_EDAD || !/^[0-9]+$/.test(stringEdad)) {

                $listaDeNodosInput[i].className = "form-control is-invalid";

            } else {

                $listaDeNodosInput[i].className = "form-control";

            }
        }
    }

    let edades = {

        strings: edadesStrings,
        numeros: edadesNumeros
    }

    return edades;

}

function validarEdades(edades) {

    let banderaNumeroExcesivo = false;
    let banderaNumeroDecimal = false;

    for (i = 0; i < edades.length; i++) {

        if (edades[i] >= MAXIMO_EDAD) {
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

function escribir(texto) {

    $resultado.classList.remove("oculto");
    if (texto === "") {

        document.querySelector("#texto-resultado").remove();
        return;
    }

    if (document.querySelector("#texto-resultado")) {

        document.querySelector("#texto-resultado").innerText = texto;

    } else {

        let $nuevoStrong = document.createElement("strong");

        $nuevoStrong.innerText = texto;
        $nuevoStrong.id = "texto-resultado"
        $resultado.appendChild($nuevoStrong);
    }
}

//----------------------------------------------------

$botonIngresar.onclick = function () {

    let numeroDeFamiliares = $numeroDeFamiliares.value;

    let errorValidacionFamiliares = validarNumeroDeFamiliares(numeroDeFamiliares);

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

$botonCalcular.onclick = function () {


    let $listaNodosInput = document.querySelectorAll("#edad");

    let edades = leerEntradas($listaNodosInput);

    let = error = validarEdades(edades.strings);

    if (error) {

        $errorEdades.textContent = error;

    } else {

        $errorEdades.textContent = "";

        let edadMayor = calcularMayor(edades.numeros);
        let edadMenor = calcularMenor(edades.numeros);
        let edadPromedio = calcularPromedio(edades.numeros);

        let textoResultadoExitoso = `El familiar de mayor edad tiene ${edadMayor} a${ENIE}os, el menor ${edadMenor}, y tienen un promedio de ${edadPromedio} a${ENIE}os.`;

        escribir(textoResultadoExitoso);

    }

}

$botonReiniciar.onclick = function () {
    
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
    
    escribir("");
    $resultado.classList.add("oculto");

}
