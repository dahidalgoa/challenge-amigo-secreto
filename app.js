//Array de los participantes del juego
let amigos = [];

function agregarAmigo() {
    
    //Capturar el valor del campo de entrada
    const participante = document.getElementById('amigo');
    const nombreAmigo = participante.value;

    //Validar la información recolectada
    if((nombreAmigo === '') || (/^[0-9]+$/.test(nombreAmigo))) {
            alert('Por favor, ingrese un nombre válido')
    } else if(amigos.includes(nombreAmigo)) {
        alert(`El nombre ${nombreAmigo} ya existe en la lista, por favor ingresar otro nombre o el apellido`);
    } else {
        //Actualizar array de amigos
        amigos.push(nombreAmigo);
    }
    console.log(amigos);    
    actualizarListaAmigos()
    //Limpiar el campo de entrada
    participante.value = '';
    return;
    }

function actualizarListaAmigos() {
    //Crear enlace con la lista donde se van a visualizar los nombres
    const campoTexto = document.querySelector('#listaAmigos');
    
    //Limpiar los valores existentes en la lista
    campoTexto.innerHTML = '';
    
    //Recorrer el arreglo y crear cada elemento de la lista
    amigos.forEach(amigo => {
        const elementoLista = document.createElement('li');
        elementoLista.textContent = amigo;
        campoTexto.appendChild(elementoLista);
    });
}
