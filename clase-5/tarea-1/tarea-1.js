//TAREA: completar tareas/clase-5/index.html para que incluya tarea-clase-5.js
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>


botonIngresar = document.querySelector("#button");

formulario = document.querySelector ("#form")

parrafoSalarioMensual = document.querySelector("#salario-mensual");
parrafoSalarioSemanal = document.querySelector("#salario-semanal");
parrafoSalarioDiario = document.querySelector("#salario-diario");

botonIngresar.onclick = function(){

  let salarioAnual = Number(formulario.value);

  let salarioMensual = (salarioAnual /12);
  let salarioSemanal = (salarioAnual /52);
  let salarioDiario = (salarioAnual /365);

  parrafoSalarioMensual.innerText = `Su salario mensual es de $${Math.trunc(salarioMensual)}.`
  parrafoSalarioSemanal.innerText = `Su salario semanal es de $${Math.trunc(salarioSemanal)}.`
  parrafoSalarioDiario.innerText  = `Su salario diario es de $${Math.trunc(salarioDiario)}.`

  parrafoSalarioMensual.className = "visible";
  parrafoSalarioSemanal.className = "visible";
  parrafoSalarioDiario.className = "visible";
  return false;
  
}
