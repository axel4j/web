
document.getElementById('res-nombre').textContent = localStorage.getItem('nombre');
document.getElementById('res-fecha').textContent = localStorage.getItem('fecha');

let pizzas = [];
pizzas.push(localStorage.getItem('pizza1'));
pizzas.push(localStorage.getItem('pizza2'));
pizzas.push(localStorage.getItem('pizza3'));

let pizzasList = document.getElementById('res-pizzas');
pizzas.forEach(pizza => {
    let li = document.createElement('li');
    li.textContent = pizza;
    pizzasList.appendChild(li);
});

function pagar() {
    // Verifica cuál opción de pago está seleccionada
    if (document.getElementById('Envio').checked) {
        window.location.href = 'tarjeta.html'; // Redirige si selecciona tarjeta
    } else if (document.getElementById('ConsLocal').checked) {
        window.location.href = 'efectivo.html'; // Redirige si selecciona efectivo
    } else {
        alert('Por favor selecciona un método de pago.');
    }
}
