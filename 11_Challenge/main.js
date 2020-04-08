//Inputs
let name = document.getElementById('name');
let adress = document.getElementById('adress');
let phone = document.getElementById('phone');
let pizza = document.getElementById('pizza');

//Text answer
let nameText = document.getElementById('nameText')
let adressText = document.getElementById('adressText')
let phoneText = document.getElementById('phoneText')
let pizzaText = document.getElementById('pizzaText')

//Button
let button = document.getElementById('button')

//Card
let card = document.getElementById('card')
 

console.log(card.classList);
 
const order = () =>{
    nameText.innerHTML = name.value
    adressText.innerHTML = adress.value
    phoneText.innerHTML = phone.value

    card.classList.remove('customCard')

    let answerPizza = pizza.value.toLowerCase()
    
    if(answerPizza === 'sin'){
        pizzaText.innerHTML = ':D'
    }else if(answerPizza === 'con'){
        pizzaText.innerHTML = 'D:'
    }else{
        pizzaText.innerHTML = 'Datos incorrectos'
    }


}

button.addEventListener('click', order)

