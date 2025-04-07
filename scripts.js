document.getElementById('generar-pdf').addEventListener('click', function() {
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;

    // Verificar que todos los campos estén llenos
    if (!nombre || !email || !telefono || !mensaje) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Crear el objeto PDF con jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Agregar contenido al PDF
    doc.text('Formulario de Contacto', 10, 10);
    doc.text(`Nombre: ${nombre}`, 10, 20);
    doc.text(`Correo Electrónico: ${email}`, 10, 30);
    doc.text(`Teléfono: ${telefono}`, 10, 40);
    doc.text(`Mensaje: ${mensaje}`, 10, 50);

    // Guardar el archivo PDF
    doc.save('contacto.pdf');
});