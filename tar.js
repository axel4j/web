
function realizarPago() {
           
    let numeroTarjeta = document.getElementById('tarjeta-numero').value;
    let nombreTarjeta = document.getElementById('tarjeta-nombre').value;
    let fechaExpiracion = document.getElementById('tarjeta-fecha').value;
    let cvc = document.getElementById('tarjeta-cvc').value;

   
    if (!numeroTarjeta || !nombreTarjeta || !fechaExpiracion || !cvc) {
        alert("Por favor, complete todos los campos.");
        return;
    }
    alert("¡Pago exitoso! Tu pedido ha sido realizado.");

}