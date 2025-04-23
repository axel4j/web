let modeloSeleccionado = "";
let precioSeleccionado = 0;

function comprar(modelo, precio) {
  modeloSeleccionado = modelo;
  precioSeleccionado = precio;
  document.getElementById("formulario-compra").style.display = "block";
}

function cerrarFormulario() {
  document.getElementById("formulario-compra").style.display = "none";
  document.getElementById("nombre-comprador").value = "";
}

function generarPDF() {
  const nombre = document.getElementById("nombre-comprador").value;
  if (!nombre.trim()) {
    alert("Por favor, ingresa tu nombre.");
    return;
  }

  const fecha = new Date().toLocaleDateString();
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("CERTIFICADO DE COMPRA", 60, 20);

  doc.setFontSize(12);
  doc.text(`Comprador: ${nombre}`, 20, 40);
  doc.text(`Modelo: ${modeloSeleccionado}`, 20, 50);
  doc.text(`Precio: $${precioSeleccionado} USD`, 20, 60);
  doc.text(`Fecha: ${fecha}`, 20, 70);

  doc.save(`Compra_${modeloSeleccionado.replace(/\s/g, "_")}.pdf`);
  cerrarFormulario();
  alert("¡Felicidades! Tu certificado ha sido generado.");
}
