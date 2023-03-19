/*# Tarea clase 8

A las 2 tareas de la clase 6, ponerles las validaciones que consideren
necesarias.

TIP: Las edades no pueden tener decimales.
*/
/*
    TAREA:
    Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
    Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

    Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
    */

let $botonAgregar = document.querySelector("#agregar");
let $botonQuitar = document.querySelector("#quitar");
let $botonCalcular = document.querySelector("#calcular");
let $formularioGeneral = document.querySelector("#division-formulario");
let $botones = document.querySelector("#botones");
let $resultado = document.querySelector("#resultado");
let $error = document.querySelector("#mensaje-error");
let $mensajeSistema = document.querySelector("#mensaje-sistema");
const SALARIO_MAXIMO = 10000000;
let resultadoEnPantalla = true;
let errorEnPantalla = true;



function manejarResultado(accion) {

    if (accion && !resultadoEnPantalla) {

        $mensajeSistema.appendChild($resultado);
        resultadoEnPantalla = true;

    } else if (!accion && resultadoEnPantalla) {

        $mensajeSistema.removeChild($resultado);
        resultadoEnPantalla = false;

    }

}

function manejarError(accion) {

    if (accion && !errorEnPantalla) {

        $mensajeSistema.appendChild($error);
        errorEnPantalla = true;

    } else if (!accion && errorEnPantalla) {

        $mensajeSistema.removeChild($error);
        errorEnPantalla = false;
    }

}

function calcularMenor(numeros) {

    let menor = Number(numeros[0]);

    for (let i = 1; i < numeros.length; i++) {

        if (menor > Number(numeros[i])) {

            menor = Number(numeros[i]);

        }

    }

    return menor;

}

function calcularMayor(numeros) {

    let mayor = Number(numeros[0]);

    for (let i = 1; i < numeros.length; i++) {

        if (mayor < Number(numeros[i])) {

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

    promedio = sumatoria / numeros.length;

    return (Math.trunc(promedio * 100)) / 100; //solo dos decimales
}

function validarSalarios(salariosStrings) {

    if (salariosStrings.length === 0) {
        return "No a ingresado ningun valor"
    }

    let banderaMaximo = false;
    let banderaDecimal = false;

    for (let i = 0; i < salariosStrings.length; i++) {

        if (Number(salariosStrings[i]) >= SALARIO_MAXIMO) {

            banderaMaximo = true;

        }

        if (!/^[0-9]+$/.test(salariosStrings[i])) {

            banderaDecimal = true;

        }

    }

    if (banderaMaximo && banderaDecimal) {
        return `Ingrese un valor menor a ${SALARIO_MAXIMO} y no utilice puntos ni comas (redondear centavos a cantidad entera)`;
    }

    if (banderaMaximo) {
        return `Ingrese un valor menor a ${SALARIO_MAXIMO}`;
    }

    if (banderaDecimal) {
        return "No utilice puntos ni comas (redondear centavos a cantidad entera)";
    }


}

function crearEntrada() {

    let $nuevoFormulario = document.createElement("form");
    $nuevoFormulario.id = "formulario-dinamico";

    let $nuevoInput = document.createElement("input");
    $nuevoInput.id = "salario-anual";
    $nuevoInput.type = `number`;
    $nuevoInput.className = "form-control";
    $nuevoInput.placeholder = "Salario en $ARS";


    let $nuevoLabel = document.createElement("label");
    $nuevoLabel.innerText = `Salario anual de familiar ${document.querySelectorAll("#formulario-dinamico").length + 1}:`;
    $nuevoLabel.className = "h6";

    $nuevoFormulario.appendChild($nuevoLabel);
    $nuevoFormulario.appendChild($nuevoInput);
    $formularioGeneral.appendChild($nuevoFormulario);

}

function leerEntradas($salariosAnuales) {

    let salariosStrings = [];

    for (let i = 0; i < $salariosAnuales.length; i++) {

        let salario = $salariosAnuales[i].value;

        if (salario !== "") {

            salariosStrings.push(salario);

            if (Number(salario) >= SALARIO_MAXIMO || !/^[0-9]+$/.test(salariosStrings[i])) {

                $salariosAnuales[i].classList.add("error");

            } else {
                $salariosAnuales[i].classList.remove("error");
            }

        }

    }

    return salariosStrings;

}
//-----------------------------------------------------------------

$botonAgregar.onclick = function () {

    if (document.querySelectorAll(`.formulario-dinamico`).length === 0) {

        $botonQuitar.classList.remove("oculto");
        $botonCalcular.classList.remove("oculto");

    }

    manejarError(false);
    manejarResultado(false);


    crearEntrada();

}

$botonQuitar.onclick = function () {

    let $nuevosFormularios = document.querySelectorAll(`#formulario-dinamico`);

    if ($nuevosFormularios.length === 1) {

        $botonQuitar.classList.add("oculto");
        $botonCalcular.classList.add("oculto");

    };

    manejarError(false);
    manejarResultado(false);


    $nuevosFormularios[$nuevosFormularios.length - 1].remove();


}

$botonCalcular.onclick = function () {


    let $salariosAnuales = document.querySelectorAll("#salario-anual");

    let salarios = leerEntradas($salariosAnuales);

    let error = validarSalarios(salarios);

    if (error) {

        $error.textContent = error;

        manejarError(true);
        manejarResultado(false);

    } else {

        let menorSalario = calcularMenor(salarios);
        let mayorSalario = calcularMayor(salarios);
        let promedioAnual = calcularPromedio(salarios);
        let promedioMensual = (promedioAnual / 12);

        $resultado.textContent = `El menor salario es de $${menorSalario}, el mayor de $${mayorSalario}, el promedio anual es $${promedioAnual}, y el mensual de $${promedioMensual}.`;

        manejarError(false);
        manejarResultado(true);

    }

}

manejarError(false);
manejarResultado(false);