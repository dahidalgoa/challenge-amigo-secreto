// Arreglo de los participantes del juego
let amigos = [];

// Enlace a los elementos del DOM
const participante = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultadoSorteo = document.getElementById('resultado');

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
        elementoLista.textContent = amigo;
        listaAmigos.appendChild(elementoLista);
    });
}

function sortearAmigo() {
    if (amigos.length > 1) {
        // Seleccionar un amigo al azar
        const indice = Math.floor(Math.random() * amigos.length);
        const amigoSeleccionado = amigos[indice];

        // Mostrar resultado
        resultadoSorteo.textContent = `🎉 El amigo secreto sorteado es: ${amigoSeleccionado} 🎉`;

        // Limpiar lista y resetear participantes
        amigos = [];
        actualizarListaAmigos();
    } else {
        alert("Debe inscribir al menos a dos participantes para realizar el sorteo.");
    }
}
