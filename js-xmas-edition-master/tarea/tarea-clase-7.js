/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */

$form = document.querySelector("#carta-a-santa");
$nombre = $form.nombre;
$ciudad = $form.ciudad;
$comportamiento = $form.comprotamiento;
$descripcionRegalo = $form["descripcion-regalo"];
$botonEnviar = $form.submit;


function validarNombre(nombre) {

    if (nombre === "") {
        return ("El nombre debe tener al menos 1 caracter");
    }

    if (nombre.length >= 50) {
        return ("El nombre debe tener menos de 50 caracteres");
    }

    if (!(/^[A-z]+$/.test(nombre))) {
        return ("El nombre solo puede contener letras");
    }

    return ("");

}

function validarCiudad(ciudad) {

    if (!ciudad) {
        return ("El campo ciudad no puede estar vacío");
    }

    return ("");

}

function validarDescripcionRegalo(descripcionRegalo) {

    if (descripcionRegalo.length >= 100) {
        return ("La descripcion del regalo debe tener menos de 100 caracteres");
    }

    if (descripcionRegalo === "") {
        return ("La descripcion del regalo no puede estar vacia");
    }

    if (!(/^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$/.test(descripcionRegalo))) {
        return ("La descripcion del regalo solo debe contener letras y numeros");
    }

    return ("");

}

function manejarErrores(errores) {

    keys = Object.keys(errores);
    let contadorErrores = 0;
    let $errores = document.querySelector("#errores");

    keys.forEach(function (key) {

        if (errores[key]) {

            let $error = document.querySelector(`#error-${key}`);

            if ($error) {

                contadorErrores++;
                $form[key].className = "error";
                $error.innerText = errores[key];

            } else {

                contadorErrores++;

                $form[key].className = "error";

                let $nuevoError = document.createElement("div");
                $nuevoError.id = (`error-${key}`);
                $nuevoError.innerText = errores[key];
                $errores.appendChild($nuevoError);

            }


        } else {

            let $error = document.querySelector(`#error-${key}`);
            if ($error) {
                $error.remove();
            }
            $form[key].className = "";

        }

    }

    )

    let exito = (contadorErrores === 0);
    return exito;
}

function validarFormulario(event) {

    let errores = {

        nombre: validarNombre($nombre.value),
        ciudad: validarCiudad($ciudad.value),
        "descripcion-regalo": validarDescripcionRegalo($descripcionRegalo.value)

    }

    if (manejarErrores(errores)) {

        $form.className = "oculto";
        document.querySelector("#exito").className = "";

        setTimeout (function(){
            window.location.href = "wishlist.html";
        }, 5000);
    }

    event.preventDefault();

}




$form.onsubmit = validarFormulario;


