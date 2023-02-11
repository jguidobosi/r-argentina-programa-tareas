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

function crearEntradas(numeroDeFamiliares){

    for (let i = 0; i < numeroDeFamiliares; i++) {

        let $nuevoForm = document.createElement("form");
        let $nuevoLabel = document.createElement("label");
        let $nuevoInput = document.createElement("input");

        $nuevoLabel.innerText = `Edad familiar ${i + 1}:`;
        $nuevoForm.className = `formulario-dinamico`;

        $nuevoInput.type = `number`;
        $nuevoInput.id = "edad";


        $nuevoForm.appendChild($nuevoLabel);
        $nuevoForm.appendChild($nuevoInput);
        $formularioGeneral.appendChild($nuevoForm);

        }

}

function leerEntradas($listaDeNodosInput){

    let edadesNumeros = [];
    let edadesStrings = [];

    for (i = 0; i < $listaDeNodosInput.length; i++) {
        
        let stringEdad = $listaDeNodosInput[i].value;

        let edad = Number(stringEdad);
        
        if (stringEdad !== "") {

            edadesStrings.push(stringEdad);
            edadesNumeros.push(edad);

            if(edad >= MAXIMO_EDAD  || !/^[0-9]+$/.test(stringEdad)){
                
                $listaDeNodosInput[i].className = "error";

            } else {

                $listaDeNodosInput[i].className = "";

            }
        }
    }

    let edades = {

        strings : edadesStrings,
        numeros : edadesNumeros
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

function escribir(texto){

    if (texto === ""){

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
    
        escribir(errorValidacionFamiliares);
        $numeroDeFamiliares.className = "error";

    } else {

        $numeroDeFamiliares.className = "";

        crearEntradas(numeroDeFamiliares);

        $botonIngresar.className = "oculto";
        $numeroDeFamiliares.disabled = true;
        $botonCalcular.className = "botones";
        $botonReiniciar.className = "botones";
        
    }

}

$botonCalcular.onclick = function () {


    let $listaNodosInput = document.querySelectorAll("#edad");

    let edades = leerEntradas($listaNodosInput);
    
    let = error = validarEdades(edades.strings);

    if (error){
        
            escribir(error);
    
    }else{


        let edadMayor = calcularMayor(edades.numeros);
        let edadMenor = calcularMenor(edades.numeros);
        let edadPromedio = calcularPromedio(edades.numeros);

        let textoResultadoExitoso = `El familiar de mayor edad tiene ${edadMayor} anios, el menor ${edadMenor}, y tienen un promedio de ${edadPromedio} anios.`;
        
        escribir(textoResultadoExitoso);

    }
    
}

$botonReiniciar.onclick = function () {

    let formulariosDinamicos = document.querySelectorAll(".formulario-dinamico");

    formulariosDinamicos.forEach(function borrar(elemento) {

        elemento.remove();

    });

    $botonIngresar.className = "botones";
    $numeroDeFamiliares.disabled = false;
    $botonCalcular.className = "oculto";
    $botonReiniciar.className = "oculto";

   escribir ("");
    
}
