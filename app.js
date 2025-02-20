// Arreglo de los participantes del juego
let amigos = [];

// Enlace a los elementos del DOM
const participante = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultadoSorteo = document.getElementById('resultado');
const botonAnadir = document.querySelector('.button-add');
const botonSortear = document.querySelector('.button-draw');

function agregarAmigo() {
    // Capturar y limpiar el valor del input
    let nombreAmigo = participante.value.trim();
    
    // Validar la información recolectada
    if (nombreAmigo === '' || /^[0-9]+$/.test(nombreAmigo)) {
        alert('Por favor, ingrese un nombre válido');
    } else if (amigos.some(amigo => amigo.toLowerCase() === nombreAmigo.toLowerCase())) {
        alert(`El nombre "${nombreAmigo}" ya existe en la lista. Intente otro nombre o agregue un apellido.`);
    } else {
        // Actualizar arreglo de amigos
        amigos.push(nombreAmigo);
        actualizarListaAmigos();
    }

    // Limpiar y enfocar el campo de entrada
    participante.value = '';
    participante.focus();
}

function actualizarListaAmigos() {
    // Limpiar los valores existentes en la lista
    listaAmigos.innerHTML = '';

    // Recorrer el arreglo y crear cada elemento de la lista
    amigos.forEach(amigo => {
        const elementoLista = document.createElement('li');
        elementoLista.innerHTML = amigo;
        listaAmigos.appendChild(elementoLista);
    });
}

function sortearAmigo() {
    if (amigos.length >= 2) {
        // Seleccionar un amigo al azar
        const indice = Math.floor(Math.random() * amigos.length);
        const amigoSeleccionado = amigos[indice];

        // Mostrar resultado
        resultadoSorteo.innerHTML = `🎉 El amigo secreto sorteado es: ${amigoSeleccionado} 🎉`;

        // Deshabilitar botón añadir
        deshabilitarBotonAnadir();
        
        // Cambiar el botón sortear a reiniciar
        cambiarABotonReiniciar();

        // Limpiar lista y participantes
        amigos = [];
        actualizarListaAmigos();
    } else {
        alert("Debe inscribir al menos a dos participantes para realizar el sorteo.");
    }
}

// Habilitar la tecla Enter para agregar participante
participante.addEventListener('keypress', function(tecla) {
    if (tecla.key === 'Enter') {
        tecla.preventDefault();
        agregarAmigo();
    }
});

function deshabilitarBotonAnadir() {
    botonAnadir.disabled = true;
    botonAnadir.style.opacity = '0.5';
    botonAnadir.style.cursor = 'not-allowed';
}

function habilitarBotonAnadir() {
    botonAnadir.disabled = false;
    botonAnadir.style.opacity = '1';
    botonAnadir.style.cursor = 'pointer';
}

function cambiarABotonReiniciar() {
    // Cambiar el texto del botón
    botonSortear.innerHTML = 'Reiniciar Sorteo';

    // Cambiar el color del botón
    botonSortear.style.backgroundColor = '#4B69FD';
    
    // Invocar la funcion para reiniciar
    botonSortear.onclick = reiniciarJuego;
}

function cambiarABotonSortear() {
    // Restaurar el botón original
    botonSortear.innerHTML = '<img src="assets/play_circle_outline.png" alt="Ícono para sortear">Sortear amigo';
    
    // Restaurar color original
    botonSortear.style.backgroundColor = '';
    
    // Restaurar la función original
    botonSortear.onclick = sortearAmigo;
}

function reiniciarJuego() {
    // Limpiar el resultado
    resultadoSorteo.innerHTML = '';
    
    // Habilitar el botón de añadir
    habilitarBotonAnadir();
    
    // Restaurar el botón de sortear
    cambiarABotonSortear();
    
    // Limpiar el campo de entrada
    participante.value = '';
    participante.focus();
    
    // Limpiar el arreglo de amigos
    amigos = [];
    actualizarListaAmigos(); 
}