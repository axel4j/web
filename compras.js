let modeloSeleccionado = "";
let precioSeleccionado = 0;

// Función para mostrar el formulario de compra
function comprar(modelo, precio) {
    modeloSeleccionado = modelo;
    precioSeleccionado = precio;

    // Mostrar el formulario de compra
    document.getElementById("formulario-compra").style.display = "block";

    // Llenar el nombre del modelo seleccionado en el formulario
    document.getElementById("modeloSeleccionado").textContent = modelo;
}

// Función para mostrar los campos de pago dependiendo del método seleccionado
function mostrarCamposPago() {
    const metodo = document.getElementById("metodo-pago").value;
    const camposTarjeta = document.getElementById("camposTarjeta");
    
    // Si el método es tarjeta, mostramos los campos de tarjeta, sino los ocultamos
    if (metodo === "tarjeta") {
        camposTarjeta.style.display = "block";
    } else {
        camposTarjeta.style.display = "none";
    }
}

// Función para cerrar el formulario de compra
function cerrarFormulario() {
    document.getElementById("formulario-compra").style.display = "none"; // Ocultar formulario
}

// Función para generar el certificado en PDF
function generarPDF() {
    const nombre = document.getElementById("nombre-comprador").value.trim();
    const metodoPago = document.getElementById("metodo-pago").value;

    // Validación básica
    if (nombre === "") {
        alert("Por favor ingresa tu nombre.");
        return;
    }

    if (modeloSeleccionado === "" || precioSeleccionado === 0) {
        alert("Por favor selecciona un auto.");
        return;
    }

    if (metodoPago === "tarjeta") {
        const numeroTarjeta = document.getElementById("numero-tarjeta").value.trim();
        const vencimiento = document.getElementById("vencimiento").value.trim();
        const cvv = document.getElementById("cvv").value.trim();

        // Validación de tarjeta
        if (numeroTarjeta === "" || vencimiento === "" || cvv === "") {
            alert("Por favor completa los campos de tarjeta.");
            return;
        }
    }

    // Crear el PDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Certificado de Compra", 20, 20);
    doc.setFontSize(12);
    doc.text(`Nombre del comprador: ${nombre}`, 20, 40);
    doc.text(`Auto adquirido: ${modeloSeleccionado}`, 20, 50);
    doc.text(`Precio: $${precioSeleccionado.toLocaleString()} USD`, 20, 60);
    doc.text(`Método de pago: ${metodoPago}`, 20, 70);
    doc.text(`Fecha de compra: ${new Date().toLocaleDateString()}`, 20, 80);
    doc.text("Gracias por tu compra en Runsaxzg", 20, 100);

    // Guardar el PDF con el nombre del modelo de auto
    doc.save(`Compra_${modeloSeleccionado.replace(/\s+/g, "_")}.pdf`);

    // Cerrar el formulario después de generar el PDF
    cerrarFormulario();
}
