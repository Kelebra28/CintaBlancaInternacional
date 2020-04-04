//Variables especiales

//Arreglo

let arreglo = [];

             // 0         1             2           3 
let flores = ["Rosas", "Margaritas", "Tulipanes", "GiraSol"];

// console.log(flores);

flores[4] = "Orquidea" 

// console.log(flores);

// console.log(flores[2]);

//  .push() *----> Agrega un elemento a la ultima posicion

flores.push("RosasRojas");

// console.log(flores);

//   .pop()  ----> Borrar el ultimo elemento

flores.push(true)
// console.log(flores);

flores.pop()
// console.log(flores);

//  .splice()  ---> Borrar elementos espesificos
flores.splice(3)
// console.log(flores);


//Objetos

let persona = {
    nombre: "Ricardo",
    edad: 21,
    tel: "541231869465",
    direccion: "CDMX",
    familia: true,
    musica: ["Salsa", "Cumbia", "Reggeteon", "Metal"],
    peliculas : {
        terror : false,
        romanticas : ["Titanic" , "Romeo y Julieta",["Prueba1", {
            dato1 : "Soy un crack"
        }]] 
    }  
}

console.log(persona.nombre);
console.log(persona.musica[2]);
console.log(persona.peliculas.romanticas[1]);
console.log(persona.peliculas.romanticas[2][1].dato1);