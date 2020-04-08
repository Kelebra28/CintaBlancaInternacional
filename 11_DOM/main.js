let titulo = document.getElementById('titulo');
let parrafo = document.getElementById('parrafo');
let input = document.getElementById('pregunta');
let respuesta = document.getElementById('respuesta');
let button = document.getElementById('boton');

console.log(titulo);
console.log(parrafo);

const cambiar = () => {
    titulo.innerHTML = 'Soy el titulo cambiado desde js';
    parrafo.innerHTML = 'Cabie desde js';  
    respuesta.innerHTML = input.value
};

button.addEventListener('click', cambiar);