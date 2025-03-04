let amigo = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value;
    
    if (!nombre) {
        alert("Ingresa un nombre");
        return;
        }
        amigo.push(nombre);
        inputAmigo.value = "";
        inputAmigo.focus();
        actualizarLista();
    
}

function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    lista.innerHTML = ''; // Limpiar la lista antes de agregar nuevos elementos

    for(let i = 0; i < amigo.length; i++){
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigo.length === 0) {
        console.log("No hay amigos secretos en la lista.");
        return;
    }

    let amigoAleatorio = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = [`El amigo sorteado es: ${amigoAleatorio}`];

    let listaAmigos = document.getElementById("listaAmigos");
    lista.innerHTML = ''; // Limpiar la lista antes de agregar nuevos elementos
    
}



