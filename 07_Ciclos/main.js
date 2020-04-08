

// Estructura de cliclo FOR
// for(inicio; limite; secuencia){
//     Bloque de codigo si se cumple la condicion
// }

             // i = i + 1
// for(let i = 0 ; i <= 100; i++){
//     console.log("Es el numero : " + i);
// };

//1
//Del 20-100 de 5 en 5
//2
// Del 0 al -500 de -3 en -3
//3
// Del 500 al 0 de -10 en -10


for(let i = 0; i <= 10; i = i + 1){
    // console.log(i);
}


for(let a = 1; a <=100; a++){
    if(a % 3 === 0 && a % 5 ===0){
        console.log(a + ' : FizzBuzz');
    }else if(a % 3 === 0){
        console.log(a + ' : Fizz');
    }else if(a % 5 === 0){
        console.log(a + ' : Buzz');
    }else{
        console.log(a);
    }    
}