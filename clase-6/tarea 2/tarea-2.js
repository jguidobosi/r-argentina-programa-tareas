
/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
let $botonAgregar = document.querySelector("#agregar");
let $botonQuitar = document.querySelector("#quitar");
let $botonCalcular = document.querySelector("#calcular");
let $divFormulario = document.querySelector("#division-formulario");
let $resultado = document.querySelector("#resultado");
let contadorDeFamiliares = 0;

let calcularMenor = function () {
    let menor;
    let flagPrimerNumero = true;
    for (i = 0; i < contadorDeFamiliares; i++) {

        let contenidoDeFormulario = document.getElementById(`input-${i + 1}`).value;
        if (flagPrimerNumero && contenidoDeFormulario !== "") {
            menor = Number(contenidoDeFormulario);
            flagPrimerNumero = false;
        } else if (menor > Number(contenidoDeFormulario) && contenidoDeFormulario !== "") {
            menor = Number(contenidoDeFormulario);
        }
    }
    return menor;
}
let calcularMayor = function () {
    let mayor;
    let flagPrimerNumero = true;
    for (i = 0; i < contadorDeFamiliares; i++) {
        let contenidoDeFormulario = document.getElementById(`input-${i + 1}`).value;

        if (flagPrimerNumero && contenidoDeFormulario !== "") {
            mayor = Number(contenidoDeFormulario);
            flagPrimerNumero = false;
        } else if (mayor < Number(contenidoDeFormulario) && contenidoDeFormulario !== "") {
            mayor = Number(contenidoDeFormulario);
        }
    }
    return mayor;
}
let calcularPromedioAnual = function () {
    let sumatoria = 0;
    let promedio = 0;
    let contadorNumerosValidos = 0;
    for (i = 0; i < contadorDeFamiliares; i++) {
        let contenidoDeFormulario = document.getElementById(`input-${i + 1}`).value;
        if (contenidoDeFormulario !== "") {
            sumatoria = sumatoria + Number(contenidoDeFormulario);
            contadorNumerosValidos++;
        }
    }
    promedio = (Math.trunc(sumatoria / contadorNumerosValidos * 100)) / 100;
    return promedio;
}


$botonAgregar.onclick = function () {
    contadorDeFamiliares++;
    $botonCalcular.disabled = false;
    $botonQuitar.disabled = false;
    let $nuevoFormulario = document.createElement("form");
    $nuevoFormulario.id = `formulario-${contadorDeFamiliares}`;
    let $nuevoInput = document.createElement("input");
    $nuevoInput.id = `input-${contadorDeFamiliares}`;
    $nuevoInput.type = `number`;
    let $nuevoLabel = document.createElement("label");
    $nuevoLabel.innerText = `Salario anual de familiar ${contadorDeFamiliares}:`;

    $nuevoFormulario.appendChild($nuevoLabel);
    $nuevoFormulario.appendChild($nuevoInput);
    $divFormulario.appendChild($nuevoFormulario);
}
$botonQuitar.onclick = function () {
    document.getElementById(`formulario-${contadorDeFamiliares}`).remove();
    contadorDeFamiliares--;
    if (contadorDeFamiliares === 0) {
        $botonCalcular.disabled = true;
        $botonQuitar.disabled = true;
        $resultado.textContent = "";
    }
}
$botonCalcular.onclick = function () {
    let menorSalario = calcularMenor();
    let mayorSalario = calcularMayor();
    let promedioAnual = calcularPromedioAnual();
    let promedioMensual = (Math.trunc(promedioAnual / 12 * 100)) / 100;
    if (mayorSalario === undefined) {
        $resultado.textContent = "No ingresaste ningun valor.";
    } else {
        $resultado.textContent = `El menor salario es de $${menorSalario}, el mayor de $${mayorSalario}, el promedio anual es $${promedioAnual}, y el mensual de $${promedioMensual}.`;
    }
}
