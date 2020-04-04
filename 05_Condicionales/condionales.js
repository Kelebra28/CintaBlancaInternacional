// alert("Descarga ya!")

// if(condicion){
//     bloque de codigo si se cumple
// }else{
//     bloque de codigo si no se cumple
// }

let num1 = 100;
let num2 = "500";
//typeof es para saber que tipo de valor tiene la varible
// console.log(typeof(num2));

//-----operadores logicos------
// =  --> Da un valor
// == --> compara valores
// === --> compara identicos

//100
if(num1 === "10" ){
    // console.log("Es verdad");
   
}else{
    // console.log("No es verdad");
};

//Si el numero 10 es mayor o menos que 5

// modulo --> Inventigar que hace.
//  si un numero es par o impar 


if(num1 % 2 === 0 ){
    // console.log(num1 + " "  + ": es par");
}else{
    // console.log(num1 + " " + ": no es par");
};


//Opedadores logicos
// and &&
// or ||
//Pase para conducir

// let preguntaEdad = prompt("Ingresa tu edad");
// // console.log(typeof(preguntaEdad));
// let edad = Number(preguntaEdad);
// // console.log(typeof(edad));


// if(edad >= 18 && edad <= 70){
//     console.log("Puedes conducir :D");
// }else if (edad === 16 || edad ===17){
//     console.log("Puedes sacar el permiso");
// }else if(edad < 16 || edad > 70){
//     console.log("No puedes conducir");
// }else{
//     console.error("Datos incorrectos")
// };


//------------>
// let password = "perritoSalchicha123";
// let login = prompt("Ingresa tu contraseña");

// if(password === login){
//     console.log("Bienvenido Ricardo :D");
// }else{
//     console.error("Eres un intruso");
// }
// // let numero = 10
// let texto = "Hola"
// let falso = true
// console.log(typeof(numero));
// console.log(typeof(texto));
// console.log(typeof(falso));

// Van el juego de piedra pael o tijera
//playe1 and player2
 let player1 = prompt("Eliga: Piedra, Papel o tijera").toLowerCase();
 let player2 = prompt("Eliga: Piedra, Papel o tijera").toLowerCase();
//  if(player1 === player2){
//     console.log("Es un empate");
//  }else if (player1 === "papel" && player2 === "piedra" || player1 === "tijera" && player2 === "papel"  || player1 === "piedra" && player2 === "tijera"){
//     console.log("Gana el player 1");
//  }else if (player2 === "papel" && player1=== "piedra" || player2 === "tijera" && player1 === "papel"  || player2 === "piedra" && player1 === "tijera"){
//     console.log("Gana el jugador 2")
//  }else{
//      console.error("Datos no validos")
//  }

if(player1 === "papel" || player1 === "piedra" || player1 === "tijera"){
    if(player2 === "papel" || player2 === "piedra" || player2 === "tijera"){
        //Se ejecuta el programa principal
        if(player1 === player2){
            console.log("Empate");
        }else if(player1 === "piedra"){
            if(player2 === 'papel'){
                console.log("Gana player 2 porque papel vence a piedra");
            }else if(player2 === "tijera"){
                console.log("Ganaa player 1 porque piedra gana a tijera");
            }
        }
    }
}