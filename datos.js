

function guardarDireccion() {
            
    let calle = document.getElementById('calle').value;
    let numero = document.getElementById('numero').value;
    let ciudad = document.getElementById('ciudad').value;
    let cp = document.getElementById('cp').value;
    let pais = document.getElementById('pais').value;

    
    if (!calle || !numero || !ciudad || !cp || !pais) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    
    localStorage.setItem('calle', calle);
    localStorage.setItem('numero', numero);
    localStorage.setItem('ciudad', ciudad);
    localStorage.setItem('cp', cp);
    localStorage.setItem('pais', pais);


    window.location.href = 'envio.html';
}
