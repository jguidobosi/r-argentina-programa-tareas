/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
let $botonIngresar = document.querySelector("#boton-ingresar");
let $botonCalcular = document.querySelector("#boton-calcular");
let $botonReiniciar = document.querySelector("#boton-reiniciar");
let $numeroDeFamiliares = document.querySelector("#numero-de-familiares");
let $formularioGeneral = document.querySelector("#division-formulario");
let $resultado = document.querySelector("#resultado");

function calcularMenor(numeros){

    let menor = numeros[0];

    for(let i=1; i < numeros.length; i++){
        
        if(numeros[i] < menor){

            menor = numeros[i];

        }
    }

    return menor;
}

function calcularMayor(numeros){

    let mayor = numeros[0];

    for(let i=1; i < numeros.length; i++){
        
        if(numeros[i] > mayor){

            mayor = numeros[i];

        }
    }

    return mayor;

}

function calcularPromedio(numeros){
    
    let sumatoria = 0;
    let promedio = 0;

    for (let i=0; i<numeros.length; i++){

        sumatoria += numeros[i];

    }

    promedio = (sumatoria / numeros.length);

    return promedio;

}

$botonIngresar.onclick = function () {

    let numeroDeFamiliares = Number($numeroDeFamiliares.value);

    for (let i = 0; i < numeroDeFamiliares; i++) {

        let $nuevoForm = document.createElement("form");
        let $nuevoLabel = document.createElement("label");
        let $nuevoInput = document.createElement("input");

        $nuevoLabel.innerText = `Edad familiar ${i + 1}:`;
        $nuevoForm.className = `formulario-dinamico`;

        $nuevoInput.type = `number`;
        $nuevoInput.className = `edad`;


        $nuevoForm.appendChild($nuevoLabel);
        $nuevoForm.appendChild($nuevoInput);
        $formularioGeneral.appendChild($nuevoForm);

        $botonIngresar.disabled = true;
        $botonCalcular.disabled = false;

    }

}

$botonCalcular.onclick = function () {
    
    let edades = [];
    let $listaDeNodosInput = document.querySelectorAll(".edad");

    for (i = 0; i < $listaDeNodosInput.length; i++) {

        edades.push(Number($listaDeNodosInput[i].value));

    }

    let edadMayor = calcularMayor(edades);
    let edadMenor = calcularMenor(edades);
    let edadPromedio = calcularPromedio(edades);

    $resultado.innerText = `El familiar de mayor edad tiene ${edadMayor} anios, el menor ${edadMenor}, y tienen un promedio de ${edadPromedio} anios.`;

}

$botonReiniciar.onclick = function () {
    
    let formulariosDinamicos = document.querySelectorAll(".formulario-dinamico");
    
    formulariosDinamicos.forEach(function borrar(elemento) {
        elemento.remove();
    });

    $resultado.innerText = "";
    $botonIngresar.disabled = false;
    $botonCalcular.disabled = true;
    
}
