let boton = document.getElementById("add");
let lista = document.querySelector("ul");
let inputTexto = document.getElementById("texto");

function addTask() {
    if (inputTexto.value !== "") {
        let nuevoItem = document.createElement("li");
        
        nuevoItem.setAttribute("class", "my-3");

        nuevoItem.textContent = inputTexto.value;
        
        lista.appendChild(nuevoItem);
        
        addButtonBorrar(nuevoItem);
    }
};

function addButtonBorrar(nuevoItem) {
    let buttonBorrar = document.createElement("button");
    buttonBorrar.textContent = "Borrar";
    
    buttonBorrar.setAttribute("class", "btn btn-primary float-start me-3");
    console.log(buttonBorrar);

    buttonBorrar.addEventListener("click", function () { 
        console.log("Borrando tarea:", nuevoItem.textContent);
        nuevoItem.remove();
    });

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
