function probarValidarNumeroDeFamiliares() {

    console.assert( validarNumeroDeFamiliares(2.5) === "Ingrese una cantidad entera", "El programa falló en la validación de un numero de edades decimal");

    console.assert( validarNumeroDeFamiliares(223) === `Ingrese una cantidad menor a ${MAXIMO_FAMILIARES}`, "El programa falló en la validación de un numero de edades superior al máximo");

}

function probarValidarEdades() {

    console.assert( validarEdades([23.5]) === "Ingrese numeros enteros", "El programa falló en la validación de una edad decimal");

    console.assert( validarEdades([2233]) === `Ingrese numeros menores a ${MAXIMO_EDAD}`, "El programa falló en la validación de un numero superior a la edad maxima");

    console.assert( validarEdades([2233.5]) === `Ingrese las edades en numeros enteros menores a ${MAXIMO_EDAD}`, "El programa falló en la validación de un numero decimal superior a la edad maxima");

}

probarValidarEdades();
probarValidarNumeroDeFamiliares();
