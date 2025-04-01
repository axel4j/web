 
 let total = localStorage.getItem('total');
 document.getElementById('total').textContent = total;

 function pagar() {
     let efectivo = parseFloat(document.getElementById('efectivo').value);

     if (isNaN(efectivo) || efectivo < total) {
         alert("Por favor ingresa una cantidad válida de efectivo.");
         return;
     }

     let cambio = efectivo - total;
     document.getElementById('cambio').textContent = cambio.toFixed(2);

     
     alert("Pago exitoso. ¡Gracias por tu compra!");
 }