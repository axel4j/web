function guardarDatos() {
    let nombre = document.getElementById('name').value;
    let fecha = document.getElementById('fecha').value;
    let pizza1 = document.getElementById('pizza1').value;
    let pizza2 = document.getElementById('pizza2').value;
    let pizza3 = document.getElementById('pizza3').value;
    let metodoEntrega = document.querySelector('input[name="entrega"]:checked')?.value;

    
    let precios = { "Mexicana": 10, "Pepperoni": 12, "Hawaiana": 11 };
    let total = precios[pizza1] + precios[pizza2] + precios[pizza3];

    
    let quesoExtra = document.getElementById('QuesoExt').checked ? 2 : 0;
    let refresco = document.getElementById('Refresco').checked ? 1.5 : 0;
    let orillaQueso = document.getElementById('OrQueso').checked ? 2.5 : 0;
    let papas = document.getElementById('Papas').checked ? 3 : 0;

    let extras = quesoExtra + refresco + orillaQueso + papas;
    total += extras;

    
    if (!nombre || !fecha || !pizza1 || !pizza2 || !pizza3 || !metodoEntrega) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('fecha', fecha);
    localStorage.setItem('pizza1', pizza1);
    localStorage.setItem('pizza2', pizza2);
    localStorage.setItem('pizza3', pizza3);
    localStorage.setItem('metodoEntrega', metodoEntrega);
    localStorage.setItem('total', total);

    
    if (metodoEntrega === "Consumo local") {
        window.location.href = 'envio2.html';  
    } else if (metodoEntrega === "Envio a domicilio") {
        window.location.href = 'datos.html';  
    }
}
