let boton = document.getElementById("add");
let lista = document.querySelector("ul");
let inputTexto = document.getElementById("texto");

function addTask() {
    if (inputTexto.value !== "") {
        let nuevoItem = document.createElement("li");
        
        // Se añade la clase "my-3" para margen vertical (Bootstrap)
        nuevoItem.setAttribute("class", "my-3");

        // Texto de la tarea
        nuevoItem.textContent = inputTexto.value;
        
        // Se añade el <li> a la lista
        lista.appendChild(nuevoItem);
        
        // Se añade el botón "Borrar"
        addButtonBorrar(nuevoItem);
    }
};

function addButtonBorrar(nuevoItem) {
    let buttonBorrar = document.createElement("button");
    buttonBorrar.textContent = "Borrar";
    
    // Usamos "float-start" y "me-3" para alinear el botón y separar del texto
    buttonBorrar.setAttribute("class", "btn btn-primary float-start me-3");
    console.log(buttonBorrar);

    // Evento para borrar la tarea
    buttonBorrar.addEventListener("click", function () { 
        console.log("Borrando tarea:", nuevoItem.textContent);
        nuevoItem.remove();
    });

    // Colocamos el botón al principio del <li> (a la izquierda del texto)
    nuevoItem.appendChild(buttonBorrar);
};

boton.addEventListener("click", function () { 
    addTask();
});

inputTexto.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    } 
});





// let lista = document.querySelector("ul");
// let nuevoItem = document. createElement("li");
// nuevoItem.textContent = "Elemento nuevo a borrar"
// nuevoItem.setAttribute = ("data-id", "2");
// nuevoItem.addEventListener("click", function () { 
//     alert("Boton clickead");
// });
// lista.appendChild(nuevoItem);


// let lista = document.querySelector("ul");

// let nuevoItem = document.createElement("li");
// nuevoItem. textContent = "Elemento nuevo a borrar";
// let boton = document.getElemeById("add");

// nuevoItem.setAttribute("data-id", "2");
// nuevoItem.addEventListener("click", function() {

//     alert("Botón clickeado", nuevoItem.getAttribute("data-id"));
// nuevoItem.remove();
// });

// lista.appendChild(nuevoItem);

// function removeTask() {
//     let items = lista.getElementsByTagName("li");
//     for (let i = 0; i < items.length; i++) {
//         if (items[i].textContent === inputTexto.value) {
//             lista.removeChild(items[i]);
//             break; // Salir del bucle después de eliminar el elemento
//         }
//     }
// }