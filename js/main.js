function iniciarApp() {
  // Llamar a la función calcularsaldo() y almacenar los resultados en una variable
  const resultadosSaldo = calcularsaldo();

  // Llamar a la función clasificargasto() con los resultados de calcularsaldo() 
  clasificargasto(resultadosSaldo);

  // Utilizar los resultados de calcularsaldo()
  const saldo = resultadosSaldo.saldo;
  const historialIngresos = resultadosSaldo.historialIngresos;
  const historialGastos = resultadosSaldo.historialGastos;
}

// llamar a la función calcularsaldo() y almacenar los resultados en una variable
const resultadosSaldo = calcularsaldo()

function calcularsaldo() {
  //declaro variables
  let ingreso = parseFloat(prompt("Escriba su ingreso total a principio de mes"));
  let gasto = parseFloat(prompt("Ingrese el monto de su gasto"));
  let saldo = ingreso - gasto;


  const historialIngresos = [60000, 80000, 100000];
  historialIngresos.push(ingreso); // Agregar el nuevo ingreso al historial

  const historialGastos = [5000, 1000, 1500];
  historialGastos.push(gasto); // Agregar el nuevo gasto al historial

  // Mostrar mensaje con el saldo
  const mensaje = saldo > 0
    ? "Tu saldo actual es: " + saldo
    : "Tu ingreso y gastos son iguales o negativos. Saldo actual: " + saldo;

  console.log(mensaje);


  // Devolver un objeto con información
  return { saldo, historialIngresos, historialGastos };

}

// Llamar a la función clasificargasto() con los resultados de calcularsaldo() 
clasificargasto(resultadosSaldo);

// Utilizar los resultados de calcularsaldo()
const saldo = resultadosSaldo.saldo;
const historialIngresos = resultadosSaldo.historialIngresos;
const historialGastos = resultadosSaldo.historialGastos;

function clasificargasto() {
  //declaro variable
  let categoría = prompt("Ingrese el nombre de la categoría a la que pertenece tu gasto (Alimentos, Transporte, Servicio Luz Gas y Agua, Alquiler, Entretenimiento, Combustible u Otro)");

  //uso while para repetir una parte del código y al ingresar una categoria no válida no lo permita
  while (categoría !== "Alimentos" && categoría !== "Transporte" && categoría !== "Servicio Luz Gas y Agua" && categoría !== "Alquiler" && categoría !== "Entretenimiento" && categoría !== "Combustible" && categoría !== "Otro") {
    console.log("La categoría ingresada no es válida");
    categoría = prompt("Ingrese el nombre de la categoría a la que pertenece tu gasto");
  }

  const mensaje =
    (categoría === "Alimentos" && "Tu gasto pertenece a la categoría Alimentos") ||
    (categoría === "Transporte" && "Tu gasto pertenece a la categoría Transporte") ||
    (categoría === "Servicio Luz Gas y Agua" && "Tu gasto pertenece a la categoría Servicio Luz, Gas y Agua") ||
    (categoría === "Alquiler" && "Tu gasto pertenece a la categoría Alquiler") ||
    (categoría === "Entretenimiento" && "Tu gasto pertenece a la categoría Entretenimiento") ||
    (categoría === "Combustible" && "Tu gasto pertenece a la categoría Combustible") ||
    (categoría === "Otro" && "Tu gasto pertenece a la categoría Otro") ||
    "Tu gasto no pertenece a ninguna categoría conocida";

  console.log(mensaje);

}

// Llamar a la función iniciarApp cuando estés listo para comenzar la aplicación
iniciarApp();