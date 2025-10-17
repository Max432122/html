let listaDeTareasUL = document.getElementById("contenedor-tareas");
let campoDeEntradaTexto = document.getElementById("texto-tarea-nueva");
let botonAgregarTarea = document.getElementById("btn-anadir");

const CLAVE_ALMACENAMIENTO = "contenidoHTMLGuardado";

function recuperarListaHTML() {
    return localStorage.getItem(CLAVE_ALMACENAMIENTO) || ""; 
}

function guardarListaHTML(contenidoHTML) {
    localStorage.setItem(CLAVE_ALMACENAMIENTO, contenidoHTML);
}

function renderizarListaDeTareas() {
    listaDeTareasUL.innerHTML = recuperarListaHTML(); 
}

function agregarNuevaTarea(textoDeTarea) {
    let contenidoHTMLGuardado = recuperarListaHTML();
    
    const nuevaTareaHTML = 
        `<li onclick="marcarComoCompletada(this)">${textoDeTarea}</li>`;
        
    const nuevoHTMLCompleto = contenidoHTMLGuardado + nuevaTareaHTML; 
    
    guardarListaHTML(nuevoHTMLCompleto);
    renderizarListaDeTareas();
}

function marcarComoCompletada(elementoTareaLi) {
    elementoTareaLi.classList.toggle("tarea-terminada");
    guardarListaHTML(listaDeTareasUL.innerHTML); 
}

botonAgregarTarea.onclick = function() {
    if (campoDeEntradaTexto.value.trim() !== "") {
        agregarNuevaTarea(campoDeEntradaTexto.value.trim());
        campoDeEntradaTexto.value = "";
    }
};

renderizarListaDeTareas();