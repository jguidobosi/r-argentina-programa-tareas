//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let $botonAniadir = document.querySelector("#boton-anadir-numero");
let $botonCalcular = document.querySelector("#boton-calcular");
let $botonReiniciar = document.querySelector("#boton-reiniciar");
let $formularioNumero = document.querySelector("#form-1");
let $listaNumeros = document.querySelector("#lista-numeros");
let $labelNumeros = document.querySelector("#label-lista");
let $elementoResultado = document.getElementById("resultados");
let arrayDeNumeros = [0];
let flagPrimerIngreso = false;

function calcularPromedio(arrayDeNumeros) {
    let sumatoria = 0;
    for (i = 0; i < arrayDeNumeros.length; i++) {
        sumatoria = sumatoria + Number(arrayDeNumeros[i]);
    }
    let promedio = (sumatoria / (arrayDeNumeros.length));
    return promedio;
}
function calcularMayor(arrayDeNumeros) {
    let numeroMayor;
    for (i = 0; i < arrayDeNumeros.length; i++) {
        if (i !== 0) {
            if (Number(arrayDeNumeros[i]) > numeroMayor) {
                numeroMayor = Number(arrayDeNumeros[i]);
            }
        } else {
            numeroMayor = Number(arrayDeNumeros[i]);
        }
    }
    return numeroMayor;
}
function calcularMenor(arrayDeNumeros) {
    let numeroMenor;
    for (i = 0; i < arrayDeNumeros.length; i++) {
        if (i !== 0) {
            if (Number(arrayDeNumeros[i]) < numeroMenor) {
                numeroMenor = Number(arrayDeNumeros[i]);
            }
        } else {
            numeroMenor = Number(arrayDeNumeros[i]);
        }
    }
    return numeroMenor;
}
function calcularRepetido(arrayDeNumeros) {

    let repeticiones = 0;
    let arrayRepetido = [0];
    let numeroRepetido;
    let flagRepeticion = false;


    for (i = 0; i < arrayDeNumeros.length; i++) {

        let contadorInterno = 0;

        for (j = 0; j < arrayDeNumeros.length; j++) {
            if (i !== j && Number(arrayDeNumeros[i]) === Number(arrayDeNumeros[j])) {
                contadorInterno++;
            }
        }
        if (contadorInterno > repeticiones) {
            repeticiones = contadorInterno;
            numeroRepetido = Number(arrayDeNumeros[i]);
            arrayRepetido = [numeroRepetido];
            flagRepeticion = false;
            arrayRepetido.length = 1;

        } else if (contadorInterno === repeticiones) {

            let flaggy = true;
            for (k = 0; k < (arrayRepetido.length); k++) {
                if (Number(arrayRepetido[k]) === Number(arrayDeNumeros[i])) {
                    flaggy = false;
                }
            }
            if (flaggy) {
                flagRepeticion = true;
                arrayRepetido.push(Number(arrayDeNumeros[i]));

            }
        }
    }
    if (repeticiones === 0){
        return "ninguno";
    }else if (flagRepeticion) {
        return arrayRepetido;
    } else {
        return numeroRepetido;
    }
}


$botonAniadir.onclick = function () {
    if (!flagPrimerIngreso) {

        arrayDeNumeros[0] = $formularioNumero.value;

        let nuevoItem = document.createElement("li");
        nuevoItem.id = `item-0`;
        nuevoItem.innerText = $formularioNumero.value;

        $listaNumeros.appendChild(nuevoItem);

        $listaNumeros.className = "visible";
        $labelNumeros.className = "visible";

        flagPrimerIngreso = true;

    } else {
        arrayDeNumeros.push($formularioNumero.value);

        let nuevoItem = document.createElement("li");
        nuevoItem.id = `item-${arrayDeNumeros.length - 1}`;
        nuevoItem.innerText = arrayDeNumeros[arrayDeNumeros.length - 1]
        $listaNumeros.appendChild(nuevoItem);

    }



}

$botonReiniciar.onclick = function () {

    $formularioNumero.value = "0";

    for (i = 0; i < arrayDeNumeros.length; i++) {
        let itemABorrar = document.getElementById(`item-${i}`);
        itemABorrar.remove();
    }
    arrayDeNumeros = [0];
    $listaNumeros.className = "no-visible";
    $labelNumeros.className = "no-visible";
    $elementoResultado.className = "no-visible"
    flagPrimerIngreso = false;
    $formularioNumero.disabled = false;

}

$botonCalcular.onclick = function () {

    let $elementoPromedio = document.getElementById("promedio");
    $elementoPromedio.innerText = calcularPromedio(arrayDeNumeros);

    let $elementoMayor = document.getElementById("mayor");
    $elementoMayor.innerText = calcularMayor(arrayDeNumeros);

    let $elementoMenor = document.getElementById("menor");
    $elementoMenor.innerText = calcularMenor(arrayDeNumeros);

    let $elementoRepetido = document.getElementById("repetido");
    $elementoRepetido.innerText = calcularRepetido(arrayDeNumeros);

    $formularioNumero.disabled = true;
    $elementoResultado.className = "visible"


}