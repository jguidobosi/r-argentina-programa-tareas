//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

let $formulario = document.querySelector("#div-formulario");
let $botonCalcular = document.querySelector("#boton-calcular");
const CANTIDAD_CLASES = 19;

function calcularTotal(){
    let totalHoras = 0;
    let totalMinutos = 0;
    let totalSegundos = 0;
    let arrayResultado = [0,0,0];

    for(i=0; i<CANTIDAD_CLASES; i++){
        totalHoras += Number(document.querySelector(`#horas-${i+1}`).value);
        totalMinutos += Number(document.querySelector(`#minutos-${i+1}`).value);
        totalSegundos += Number(document.querySelector(`#segundos-${i+1}`).value);
        
    }

    totalMinutos += (Math.trunc(totalSegundos/60));
    console.log(totalSegundos);
    totalSegundos -= (Math.trunc(totalSegundos/60)*60);
    totalHoras += (Math.trunc(totalMinutos/60));
    totalMinutos -= (Math.trunc(totalMinutos/60)*60);

    arrayResultado = [totalHoras, totalMinutos, totalSegundos];
    return arrayResultado;
}

for (i=0; i<CANTIDAD_CLASES; i++){

    let $nuevoFormulario = document.createElement("form");

    let $inputHoras = document.createElement("input");
    $inputHoras.id = `horas-${i+1}`;

    let $inputMinutos = document.createElement("input");
    $inputMinutos.id = `minutos-${i+1}`;
    
    let $inputSegundos = document.createElement("input");
    $inputSegundos.id = `segundos-${i+1}`;
    
    let $labelHoras = document.createElement("label");
    $labelHoras.innerText = `Clase ${i+1}.Horas:`;
    
    let $labelMinutos = document.createElement("label");
    $labelMinutos.innerText = `Minutos:`;
    
    let $labelSegundos = document.createElement("label");
    $labelSegundos.innerText = `Segundos:`;

    let $pEspacio = document.createElement("p");
    
    $nuevoFormulario.appendChild($labelHoras);
    $nuevoFormulario.appendChild($inputHoras);
    
    $nuevoFormulario.appendChild($labelMinutos);
    $nuevoFormulario.appendChild($inputMinutos);
    
    $nuevoFormulario.appendChild($labelSegundos);
    $nuevoFormulario.appendChild($inputSegundos);

    $formulario.appendChild($nuevoFormulario);
    $formulario.appendChild($pEspacio);
}

$botonCalcular.onclick =  function(){

    tiempoTotal = calcularTotal();
    
    document.querySelector("#resultado").innerText = `La duración total del curso es de ${tiempoTotal[0]} horas, ${tiempoTotal[1]} minutos y ${tiempoTotal[2]} segundos.`

}
