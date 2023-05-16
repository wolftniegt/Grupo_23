const inputBusqueda = document.getElementById("buscar-paciente");
inputBusqueda.addEventListener("keyup", function() {
  const valorBusqueda = this.value.toLowerCase();
  const filasTabla = cuerpoTabla.getElementsByTagName("tr");
  for (let i = 0; i < filasTabla.length; i++) {
    const celdasFila = filasTabla[i].getElementsByTagName("td");
    let coincideBusqueda = false;
    for (let j = 0; j < celdasFila.length; j++) {
      const contenidoCelda = celdasFila[j].textContent.toLowerCase();
      if (contenidoCelda.indexOf(valorBusqueda) !== -1) {
        coincideBusqueda = true;
        break;
      }
    }
    if (coincideBusqueda) {
      filasTabla[i].style.display = "";
    } else {
      filasTabla[i].style.display = "none";
    }
  }
});