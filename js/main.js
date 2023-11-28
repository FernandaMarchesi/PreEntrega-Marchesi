let ingreso = prompt("Escriba su ingreso total a principio de mes");

let gasto = prompt("Ingrese el monto de su gasto");

let Categoría = prompt("Ingrese el nombre de la categoría a la que pertenece tu gasto");

function calcularsaldo(ingreso, gasto) {
  let Number1 = parseFloat(ingreso);
  let Number2 = parseFloat(gasto);
  let resta = Number1 - Number2;

  if (Number1 > Number2) {
    console.log("Tu saldo actual es: " + resta);
  }
  else if (Number1 < Number2) {
    console.log("Tienes un saldo negativo de.");
  }
  else {
    console.log("Tu ingreso y gastos son iguales.");
  }
}

function clasificargasto(Categoría) {
  while (Categoría !== "Alimentos" && Categoría !== "Transporte" && Categoría !== "Servicio Luz Gas y Agua" && Categoría !== "Alquiler" && Categoría !== "Entretenimiento" && Categoría !== "Combustible") {
    console.log("La categoría ingresada no es válida");
    Categoría = prompt("Ingrese el nombre de la categoría a la que pertenece tu gasto");
  }

  if (Categoría === "Alimentos") {
    console.log("Tu gasto pertenece a la categoría Alimentos");
  }
  else if (Categoría === "Transporte") {
    console.log("Tu gasto pertenece a la categoría Transporte");
  }
  else if (Categoría === "Servicio Luz Gas y Agua") {
    console.log("Tu gasto pertenece a la categoría Servicio Luz, Gas y Agua ");
  }
  else if (Categoría === "Alquiler") {
    console.log("Tu gasto pertenece a la categoría Alquiler");
  }
  else if (Categoría === "Entretenimiento") {
    console.log("Tu gasto pertenece a la categoría Entretenimiento");
  }
  else if (Categoría === "Combustible") {
    console.log("Tu gasto pertenece a la categoría Combustible");
  }
  else {
    console.log("Tu gasto no pertenece a ninguna categoría conocida");
  }
}