function calcularsaldo() {
  //declaro variables
  let ingreso = prompt("Escriba su ingreso total a principio de mes");

  let gasto = prompt("Ingrese el monto de su gasto");

  let resta = ingreso - gasto;

  if (resta > 0) {
    console.log("Tu saldo actual es: " + resta);
  } else if (resta < 0) {
    console.log("Tienes un saldo negativo de " + Math.abs(resta));
    //agrego Math.abs(resta) para que devuelva el valor absoluto de un número y quede correcto el mnsj
  } else {
    console.log("Tu ingreso y gastos son iguales.");
  }
}
// Llamar a la función calcularsaldo()
calcularsaldo();



function clasificargasto() {
//declaro variable
  let categoría = prompt("Ingrese el nombre de la categoría a la que pertenece tu gasto (Alimentos, Transporte, Servicio Luz Gas y Agua, Alquiler, Entretenimiento, Combustible u Otro)");

//uso while para repetir una parte del código y al ingresar una categoria no válida no lo permita
  while (categoría !== "Alimentos" && categoría !== "Transporte" && categoría !== "Servicio Luz Gas y Agua" && categoría !== "Alquiler" && categoría !== "Entretenimiento" && categoría !== "Combustible" && categoría !== "Otro") {
    console.log("La categoría ingresada no es válida");
    categoría = prompt("Ingrese el nombre de la categoría a la que pertenece tu gasto");
  }

  if (categoría === "Alimentos") {
    console.log("Tu gasto pertenece a la categoría Alimentos");
  }
  else if (categoría === "Transporte") {
    console.log("Tu gasto pertenece a la categoría Transporte");
  }
  else if (categoría === "Servicio Luz Gas y Agua") {
    console.log("Tu gasto pertenece a la categoría Servicio Luz, Gas y Agua ");
  }
  else if (categoría === "Alquiler") {
    console.log("Tu gasto pertenece a la categoría Alquiler");
  }
  else if (categoría === "Entretenimiento") {
    console.log("Tu gasto pertenece a la categoría Entretenimiento");
  }
  else if (categoría === "Combustible") {
    console.log("Tu gasto pertenece a la categoría Combustible");
  }
  else if (categoría === "Otro") {
    console.log("Tu gasto pertenece a la categoría Otro");
  }
  else {
    console.log("Tu gasto no pertenece a ninguna categoría conocida");
  }
}

// Llamar a la función clasificargasto()
clasificargasto();