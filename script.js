document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".formulario-prueba");
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const nombre = document.getElementById("nombre").value;
      const correo = document.getElementById("correo").value;
      const telefono = document.getElementById("telefono").value;
      const tipoAuto = document.getElementById("tipo-auto").value;
      const fecha = document.getElementById("fecha").value;
  
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
  
      doc.setFontSize(16);
      doc.text("Prueba de Manejo - Runsaxzg", 20, 20);
      doc.setFontSize(12);
      doc.text(`Nombre: ${nombre}`, 20, 40);
      doc.text(`Correo: ${correo}`, 20, 50);
      doc.text(`Teléfono: ${telefono}`, 20, 60);
      doc.text(`Tipo de auto: ${tipoAuto}`, 20, 70);
      doc.text(`Fecha deseada: ${fecha}`, 20, 80);
  
      doc.save("prueba_manejo_runsaxzg.pdf");
      alert("¡Tu prueba de manejo ha sido agendada! Se generó un PDF con los detalles.");
    });
  });
  