
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


document.getElementById('res-calle').textContent = localStorage.getItem('calle');
document.getElementById('res-numero').textContent = localStorage.getItem('numero');
document.getElementById('res-ciudad').textContent = localStorage.getItem('ciudad');
document.getElementById('res-cp').textContent = localStorage.getItem('cp');
document.getElementById('res-pais').textContent = localStorage.getItem('pais');


function pagar() {
   
    if (document.getElementById('Envio').checked) {
        window.location.href = 'tarjeta.html'; 
    } else if (document.getElementById('ConsLocal').checked) {
        window.location.href = 'efectivo.html';
    } else {
        alert('Por favor selecciona un método de pago.');
    }
}
