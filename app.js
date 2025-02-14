//Array de los participantes del juego
let amigos = [];

function agregarAmigo() {
    
    //Capturar el valor del campo de entrada
    let participante = document.getElementById('amigo');
    let nombreAmigo = participante.value;

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

    //Limpiar el campo de entrada
    participante.value = '';
    return;
    }
