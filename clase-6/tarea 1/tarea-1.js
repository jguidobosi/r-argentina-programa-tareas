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
let $divisionFormulario = document.querySelector("#division-formulario");
let $resultado = document.querySelector("#resultado");

$botonIngresar.onclick = function () {

    let numeroDeFamiliares = Number($numeroDeFamiliares.value);
    for (i = 0; i < numeroDeFamiliares; i++) {
        let $nuevoForm = document.createElement("form");
        let $nuevoLabel = document.createElement("label");
        let $nuevoInput = document.createElement("input");

        $nuevoLabel.innerText = `Edad familiar ${i + 1}:`;
        $nuevoLabel.id = `label-${i + 1}`;
        $nuevoInput.id = `edad-${i + 1}`;
        $nuevoInput.type = `number`;
        $nuevoForm.id = `form-${i + 1}`;

        $nuevoForm.appendChild($nuevoLabel);
        $nuevoForm.appendChild($nuevoInput);
        $divisionFormulario.appendChild($nuevoForm);

        $botonIngresar.disabled = true;
        $botonCalcular.disabled = false;
    }
}

$botonCalcular.onclick = function () {
    i = 0;
    let edadMayor = 0;
    let edadMenor = 0;
    let promedio;
    let sumatoria = 0;
    let banderaPrimerNumero = true;

    while (document.getElementById(`edad-${i + 1}`) !== null) {
        let edadAComparar = Number(document.getElementById(`edad-${i + 1}`).value);

        if (edadAComparar > edadMayor) {
            edadMayor = edadAComparar;
        }

        if (banderaPrimerNumero) {
            edadMenor = edadAComparar;
            banderaPrimerNumero = false;
        } else if (edadAComparar < edadMenor) {
            edadMenor = edadAComparar;
        }
        sumatoria += edadAComparar;
        i++;
    }
    promedio = (Math.trunc(sumatoria / (i)*100))/100;
 
    $resultado.innerText = `El familiar de mayor edad tiene ${edadMayor} anios, el menor ${edadMenor}, y tienen un promedio de ${promedio} anios.`;
    
    
}

$botonReiniciar.onclick = function () {
    let i = 0;
    while (document.getElementById(`edad-${i + 1}`) !== null) {
        document.querySelector(`#edad-${i + 1}`).remove();
        document.querySelector(`#label-${i + 1}`).remove();
        document.querySelector(`#form-${i + 1}`).remove();
        i++;
    }
    $resultado.innerText = "";
    $botonIngresar.disabled = false;
    $botonCalcular.disabled = true;
}
