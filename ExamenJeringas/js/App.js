const formulario = document.getElementById('formulario-tareas');
const listaTareasUL = document.getElementById('lista-tareas');
const retroalimentacion = document.getElementById('retroalimentacion');
const entradaTitulo = document.getElementById('titulo-tarea');
const entradaPrioridad = document.getElementById('prioridad-tarea');

const CLAVE_ALMACENAMIENTO = "tareasHTML";

function obtenerHTMLGuardado() {
    return localStorage.getItem(CLAVE_ALMACENAMIENTO) || ""; 
}

function guardarHTMLActual() {
    localStorage.setItem(CLAVE_ALMACENAMIENTO, listaTareasUL.innerHTML);
}

function asignarManejadoresDeEventos() {
    const elementosTarea = listaTareasUL.querySelectorAll('li');
    
    elementosTarea.forEach(li => {
        li.onclick = function() {
            li.classList.toggle("completed");
            guardarHTMLActual();
        };
    });
}

function renderizarTareas() {
    listaTareasUL.innerHTML = obtenerHTMLGuardado(); 
    asignarManejadoresDeEventos();
}

function agregarTarea(titulo, prioridad) {
    const clasePrioridad = "priority-" + prioridad;
    
    let contenidoHTMLGuardado = obtenerHTMLGuardado();

    const nuevaTareaHTML = '<li class="' + clasePrioridad + '">' +
        titulo + 
        '<span>[' + prioridad.toUpperCase() + ']</span>' +
        '</li>';

    const nuevoHTMLCompleto = contenidoHTMLGuardado + nuevaTareaHTML;
    listaTareasUL.innerHTML = nuevoHTMLCompleto;
    
    asignarManejadoresDeEventos();
    guardarHTMLActual(); 
    mostrarRetroalimentacion('¡Tarea añadida con éxito!');
}

function mostrarRetroalimentacion(mensaje) {
    retroalimentacion.textContent = mensaje;
    retroalimentacion.classList.remove('oculto');
    
    setTimeout(() => {
        retroalimentacion.classList.add('oculto');
    }, 3000);
}

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const titulo = entradaTitulo.value.trim();
    const prioridad = entradaPrioridad.value;

    if (titulo !== "") {
        agregarTarea(titulo, prioridad);
        formulario.reset();
    }
});

document.addEventListener('DOMContentLoaded', renderizarTareas);