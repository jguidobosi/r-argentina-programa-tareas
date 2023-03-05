function probarValidarSalarios() {

    console.assert( validarSalarios(["200000000000000000000000000"]) === `Ingrese un valor menor a ${SALARIO_MAXIMO}`, "El programa falló en la validacion de un salario mayor al maximo");
    console.assert( validarSalarios(["29.5"]) === "No utilice puntos ni comas (redondear centavos a cantidad entera)", "El programa falló en la validacion de un numero decimal");
    console.assert( validarSalarios(["20000000000000000000000000.5"]) === `Ingrese un valor menor a ${SALARIO_MAXIMO} y no utilice puntos ni comas (redondear centavos a cantidad entera)`, "El programa falló en la validacion de un numero de edades decimal");
    console.assert( validarSalarios([]) === "No a ingresado ningun valor", "El programa falló en la validación de todas las entradas vacias");
}

probarValidarSalarios();
