document.getElementById('salsa').addEventListener('change', function() {
    var precioBase = 8; // Precio base del plato
    var sumaIndicada = 0; // Suma indicada para agregar al precio base
    var precioSalsa = 0; // Precio adicional según la salsa seleccionada
    
    switch(this.value) {
        case 'Salsa Alfredo':
            sumaIndicada = 2;
            break;
        case 'Salsa Marinara':
            sumaIndicada = 1.5;
            break;
        case 'Salsa Pesto':
            sumaIndicada = 2.5;
            break;
        default:
            sumaIndicada = 0;
    }
    
    var precioTotal = precioBase + sumaIndicada;
    document.getElementById('precio').innerHTML = '<p>Precio: $' + precioBase + ' (Base) + $' + sumaIndicada + ' (Salsa) = $' + precioTotal.toFixed(2) + '</p>';
});