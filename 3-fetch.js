let datos;
async function traerDatos() {
  let url = "https://jsonplaceholder.typicode.com/posts?userId=1";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      mostrarData(data);
      datos = data;
    })
    .catch((error) => console.log(error));
}
traerDatos();

const mostrarData = (data) => {
  console.log(data);
  let body = "";
  for (var i = 0; i < data.length; i++) {
    body += `<tr><td>${data[i].id}</td><td>${data[i].id}</td><td>${data[i].title}</td></tr>`;
  }
  document.getElementById("data").innerHTML = body;
};

document.getElementById("btn").addEventListener("click", (event) => {
  event.preventDefault();
  let busqueda = document.getElementById("busqueda").value;

  mostrarData(
    busqueda === ""
      ? datos
      : datos.filter(
          (element) => element.id == busqueda || element.title == busqueda || element.title.includes(busqueda)
        )
  );
});
