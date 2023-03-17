
/// *--main

// !codigo de code.org theme app

// onEvent("botonLight", "click", function( ) {
//     setProperty("screen1", "background-color", "white");
//     setProperty("titulo", "text-color", "black");
//   });
//   onEvent("botonDark", "click", function( ) {
//     setProperty("screen1", "background-color", "black");
//     setProperty("titulo", "text-color", "white");
//   });

// ! Declaramos las variables que se asignaran a los elementos del DOM
let screen1 = document.getElementById('screen1');
let container1 = document.getElementById('container1');
let container2 = document.getElementById('container2');
let titulo = document.getElementById('titulo');
let botonLight = document.getElementById('botonLight');
let botonDark = document.getElementById('botonDark');

// ! codigo alternativo
// let buttons = document.getElementsByClassName('but');

// !logs
console.log('screen1');
console.log(screen1);
console.log('container1');
console.log(container1);
console.log('container2');
console.log(container2);
console.log('titulo');
console.log(titulo);
console.log('botonLight');
console.log(botonLight);
console.log('botonDark');
console.log(botonDark);

// ! ejemplo de modificacion de variables
// screen1=9;
// container1.miPropiedad = "hola"
// console.log('container1');
// console.log(container1);

// ! capturamos los eventos de click y generamos sus funciones callback
botonLight.addEventListener('click', () => {
    screen1.style.backgroundColor = 'white';
    titulo.style.color = 'black';
});

botonDark.addEventListener('click', () => {
    screen1.style.backgroundColor = 'black';
    titulo.style.color = 'white';
});

// !codigo alternativo
// botonLight.addEventListener('click', () => {
//     screen1.style.backgroundColor = 'white';
//     titulo.style.color = 'black';
//     if (botonDark.classList.contains('buttonActive')) 
//         buttons.botonDark.classList.toggle('buttonActive');//desactive
//     if (!botonLight.classList.contains('buttonActive')) 
//         buttons.botonLight.classList.toggle('buttonActive');//active
// });

// botonDark.addEventListener('click', () => {
//     screen1.style.backgroundColor = 'black';
//     titulo.style.color = 'white';
//     if (botonLight.classList.contains('buttonActive')) 
//         buttons.botonLight.classList.toggle('buttonActive');//desactive
//     if (!botonDark.classList.contains('buttonActive')) 
//         buttons.botonDark.classList.toggle('buttonActive');//active
// });








