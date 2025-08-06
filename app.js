let amigos = []; // arreglo para almacenar los amigos 
let nombre = document.getElementById("amigo"); // variable para almacenar el id del amigo ingresado al pulsar el botón

function agregarAmigo() {
    let valor = nombre.value.trim(); // obtener el valor del id, en el arreglo o lista de amigos y asegurarse de elminar espacios
    if (valor === "") {
        alert("Por favor ingrese un nombre válido");
        nombre.value= ""; // limpiar el nombre ingresado incorrectamente
        nombre.focus(); // colocar el puntero del ratón instantaneamente para que vuelva a ingresar texto
    } else {
        amigos.push(valor);
        mostrarAmigos();
        nombre.value= "";
        nombre.focus();
    }
}


function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos"); // establecer el id donde se agregará la lista de amigos
    lista.innerHTML = ""; // limpiar para evitar duplicados

    let contenido = ""; // variable para obtener el String o nombre del usuario

    // for para recorrer el arreglo amigos
    for(let i = 0; i < amigos.length; i++) {
        contenido += "<li>" + amigos[i] + "</li>"; // establecer la forma correcta de imprimir la lista de amigos en el HTML, con <li> </li>
    }

    lista.innerHTML = contenido; // imprimir la lista de amigos
}

function sortearAmigo() {
    let amigoSeleccionado = ""; // variable para obtener el amigo sorteado
    let indiceAleatorio; 
    if (amigos.length === 0) {
        alert("No existe ningún amigo registrado para sortear");
    } else {
        
        indiceAleatorio = Math.floor(Math.random() * amigos.length);
        amigoSeleccionado = amigos[indiceAleatorio];

        document.getElementById("resultado").innerHTML = "<li>" + amigoSeleccionado + "</li>";
        amigos.splice(indiceAleatorio, 1); // borrar el amigo sorteado para evitar repetirlo en el sorteo.
        mostrarAmigos(); // mostrar la lista actualizada después de borrar el seleccionado.

        if(amigos.length === 0) {
            alert("Se ha acabado de sortear todos los amigos registrados");
            document.getElementById("resultado").innerHTML = ""; // limpiar una vez ya no haya amigos en la lista.
        }
    }
}

