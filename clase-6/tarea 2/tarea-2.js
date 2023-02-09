
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
    let $resultado = document.querySelector("#resultado");

    function calcularMenor(numeros) {
        
        let menor = numeros[0];

        for (let i = 1; i < numeros.length; i++) {

           if(menor > numeros[i]){

                menor = numeros[i];

           }

        }

        return menor;

    }
    function calcularMayor(numeros) {
        
        let mayor = numeros[0];

        for (let i = 1; i < numeros.length; i++) {

           if(mayor < numeros[i]){

                mayor = numeros[i];

           }

        }

        return mayor;

    }
    function calcularPromedio(numeros) {
        
        let sumatoria = 0;
        let promedio = 0;
       
        for (let i = 0; i < numeros.length; i++) {

            sumatoria += numeros[i];

        }

        promedio = sumatoria/numeros.length;

        return promedio;
    }


    $botonAgregar.onclick = function () {

        $botonCalcular.disabled = false;
        $botonQuitar.disabled = false;

        let $nuevoFormulario = document.createElement("form");
        $nuevoFormulario.className = `formulario-dinamico`;

        let $nuevoInput = document.createElement("input");
        $nuevoInput.className = `salario-anual`;
        $nuevoInput.type = `number`;

        let $nuevoLabel = document.createElement("label");
        $nuevoLabel.innerText = `Salario anual de familiar ${document.querySelectorAll(".formulario-dinamico").length+1}:`;

        $nuevoFormulario.appendChild($nuevoLabel);
        $nuevoFormulario.appendChild($nuevoInput);
        $formularioGeneral.appendChild($nuevoFormulario);

    }
    $botonQuitar.onclick = function () {

        let nuevosFormularios = document.querySelectorAll(`.formulario-dinamico`);
        
        nuevosFormularios[nuevosFormularios.length-1].remove();
        
        if (nuevosFormularios.length === 1) {

            $botonCalcular.disabled = true;
            $botonQuitar.disabled = true;
            $resultado.textContent = "";

        };

    }
    $botonCalcular.onclick = function () {

        let salariosAnuales = [];
        let $salariosAnuales = document.querySelectorAll(".salario-anual");

        for (let i = 0; i < $salariosAnuales.length; i++){

            if($salariosAnuales[i].value !== ""){

                 salariosAnuales.push(Number($salariosAnuales[i].value));
                console.log(salariosAnuales);

            }

        }

        let menorSalario = calcularMenor(salariosAnuales);
        let mayorSalario = calcularMayor(salariosAnuales);
        let promedioAnual = calcularPromedio(salariosAnuales);
        let promedioMensual = (promedioAnual / 12);
        
        if (salariosAnuales.length === 0) {

            $resultado.textContent = "No ingresaste ningun valor.";
        
        } else {

            $resultado.textContent = `El menor salario es de $${menorSalario}, el mayor de $${mayorSalario}, el promedio anual es $${promedioAnual}, y el mensual de $${promedioMensual}.`;
        
        }
    }
