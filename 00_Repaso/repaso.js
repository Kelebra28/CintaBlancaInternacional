// La forma antigua de declarar una variable
//  var
// Es la forma actual de declarar una variable
//  let 
//Una variale constante
//const

let num1 = 10;
const num2 = 1000
// console.log(num1);
// console.log(num2);

num1 = 500
// console.log(num1);

num1 = 'Hola'
// console.log(num1);

//Modulo 




let player1 = prompt('Eige piedra papel o tijera');
let player2 = prompt('Eige piedra papel o tijera');



if(player1 === player2){
    console.log('Empate');
}else if(player1 === 'piedra' && player2 === 'tijera' || player1  === 'tijera' && player2 === 'papel' || player1 === 'papel' && player2 === 'piedra'){
    console.log('Gana jugador 1');
}else if(player2 === 'piedra' && player1 === 'tijera' || player2  === 'tijera' && player1 === 'papel' || player2 === 'papel' && player1 === 'piedra'){
    console.log('Gana jugador 2');
}else{
    console.error('Datos incorrectos')
}
