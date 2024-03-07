function calcularsaldo(ingreso, gasto) {
  const resultadoElement = document.getElementById('resultado');

  if (isNaN(ingreso) || isNaN(gasto)) {
    if (resultadoElement) {
      resultadoElement.textContent = "Por favor, ingrese valores numéricos válidos.";
    } else {
      console.log("Por favor, ingrese valores numéricos válidos.");
    }
  } else {
    if (resultadoElement) {
      resultadoElement.textContent = ""; // Borra el mensaje si los valores son numéricos válidos
    }

    let saldo = ingreso - gasto;


    const historialIngresos = [60000, 80000, 100000];
    historialIngresos.push(ingreso); // Agregar el nuevo ingreso al historial

    const historialGastos = [5000, 1000, 1500];
    historialGastos.push(gasto); // Agregar el nuevo gasto al historial

    const mensaje = saldo > 0 ?
      "Tu saldo actual es: " + saldo :
      "Tu ingreso y gastos son iguales o negativos. Saldo actual: " + saldo;

    console.log(mensaje);

    return { saldo, historialIngresos, historialGastos };
  }
}


function clasificargasto(categoría, resultadosSaldo) {

  //uso while para repetir una parte del código y al ingresar una categoria no válida no lo permita
  while (categoría !== "Alimentos" && categoría !== "Transporte" && categoría !== "Servicio Luz Gas y Agua" && categoría !== "Alquiler" && categoría !== "Entretenimiento" && categoría !== "Combustible" && categoría !== "Otro") {
    console.log("La categoría ingresada no es válida");
    break; // Añadir break para salir del bucle cuando la categoría no es válida
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

    // Definir la función iniciarApp()
function iniciarApp() {
  // Obtener los valores de ingreso, gasto y categoría desde el formulario
  const ingreso = parseFloat(document.getElementById('ingreso').value);
  const gasto = parseFloat(document.getElementById('gasto').value);
  const categoria = document.getElementById('categoria').value;

  // Llamar a la función calcularsaldo() y almacenar los resultados en una variable
  const resultadosSaldo = calcularsaldo(ingreso, gasto);

  // Llamar a la función clasificargasto() con los resultados de calcularsaldo() 
  clasificargasto(categoria, resultadosSaldo);

  // Utilizar los resultados de calcularsaldo()
  const saldo = resultadosSaldo.saldo;
}

// Agregar un event listener al formulario para ejecutar la función iniciarApp() cuando se envíe el formulario
document.getElementById('gastosForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

  // Llamar a la función iniciarApp() cuando se envíe el formulario
  iniciarApp();
});


}
const monedaEl_one = document.getElementById('moneda-uno');
const monedaEl_two = document.getElementById('moneda-dos');
const cantidadEl_one = document.getElementById('cantidad-uno');
const cantidadEl_two = document.getElementById('cantidad-dos');
const cambioEl = document.getElementById('cambio');

function calculate() {
  const moneda_one = 'ARS'; // Establecemos la moneda de origen como ARS
  const moneda_two = monedaEl_two.value;

  fetch(`https://v6.exchangerate-api.com/v6/e4bc12ed57beaf98b0f92536/latest/${moneda_one}`)
    .then(res => res.json())
    .then(data => {
      const taza = data.conversion_rates[moneda_two];

      cambioEl.innerText = `1 ARS = ${taza.toFixed(2)} ${moneda_two}`;

      cantidadEl_two.value = (cantidadEl_one.value * taza).toFixed(2);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

monedaEl_one.addEventListener('change', calculate);
cantidadEl_one.addEventListener('input', calculate);
monedaEl_two.addEventListener('change', calculate);
cantidadEl_two.addEventListener('input', calculate);

calculate();
