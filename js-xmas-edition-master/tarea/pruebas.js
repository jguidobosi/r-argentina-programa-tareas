



function pruebaValidarNombre() {

    console.assert (validarNombre("") === "El nombre debe tener al menos 1 caracter", "La funcion falló en validar que el nombre tenga al menos un caracter");

    console.assert (validarNombre("asas2") === "El nombre solo puede contener letras", "La funcion falló en validar que el nombre este compuesto de solo letras");

    console.assert (validarNombre("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") === "El nombre debe tener menos de 50 caracteres", "La funcion falló en validar que el nombre tenga menos de 50 caracteres");
   
    console.assert(validarNombre("Guido") === "", "La funcion falló con un nombre válido");

};


function pruebaValidarCiudad() {

    console.assert (validarCiudad("") === "El campo ciudad no puede estar vacío", "La funcion falló en validar que el campo no esté vacio");
    
    console.assert (validarCiudad("Catamarca") === "", "La funcion falló con un nombre valido");

};


function pruebaValidarDescripcionRegalo() {

    console.assert (validarDescripcionRegalo("") === "La descripcion del regalo no puede estar vacia", "La funcion falló en validar que la descripcion no esté vacia");

    console.assert (validarDescripcionRegalo("asa***s2") === "La descripcion del regalo solo debe contener letras y numeros", "La funcion falló en validar que la descripcion este compuesta de solo letras y numeros");

    console.assert (validarDescripcionRegalo("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") === "La descripcion del regalo debe tener menos de 100 caracteres", "La funcion falló en validar que la descripcion tenga menos de 100 caracteres");
    
    console.assert (validarDescripcionRegalo("Quiero que sea un auto Hot Wheels rojo") === "", "La funcion falló con una descripción valida.");
    
};


pruebaValidarNombre();
pruebaValidarCiudad();
pruebaValidarDescripcionRegalo();
