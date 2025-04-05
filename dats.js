document.getElementById('generar-pdf').addEventListener('click', function() {

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;

    
    if (!nombre || !email || !telefono || !mensaje) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    
    doc.text('Formulario de Contacto', 10, 10);
    doc.text(`Nombre: ${nombre}`, 10, 20);
    doc.text(`Correo Electrónico: ${email}`, 10, 30);
    doc.text(`Teléfono: ${telefono}`, 10, 40);
    doc.text(`Mensaje: ${mensaje}`, 10, 50);

    
    doc.save('contacto.pdf');
});