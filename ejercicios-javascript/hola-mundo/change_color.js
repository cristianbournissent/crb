// El contenedor debe tener 8 filas y 12 columnas, cada fila se crea con la etiqueta <tr> y cada columna con <th>
// Primero vamos a crear la estructura de cada fila. <tr> <th>X12 </tr>
// Finalmente debemos volcar 8 veces el formato de la fila en el contenedor.

const contenedor = document.getElementById("contenedor");

function crearFila() {
  const cantidadColumnas = 12;
  const tr = document.createElement("tr");

  for (let i = 0; i < cantidadColumnas; i++) {
    const th = document.createElement("th");
    th.className = "celda";
    tr.appendChild(th);
  }

  return tr;
}

function crearTabla() {
  const cantidadFilas = 8;

  for (let i = 0; i < cantidadFilas; i++) {
    const fila = crearFila();
    contenedor.appendChild(fila);
  }
}

crearTabla();

const celdas = document.getElementsByClassName("celda");
let colorSeleccionado = "green";

function pickEarcolor(color) {
  colorSeleccionado = color;
  console.log(colorSeleccionado);
}

function PintaRceldA(celda) {
  celda.style.background = colorSeleccionado;
}

for (let i = 0; i <= celdas.length - 1; i++) {
  celdas[i].addEventListener("click", () => {
    console.log(celdas[i]);
    PintaRceldA(celdas[i]);
  });
}
