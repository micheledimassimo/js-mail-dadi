console.log('JS collegato');

const fistNumDiv = document.querySelector('div#first-num')
//faccio generare il PRIMO numero random
let numbOne = document.getElementById('first-num');
numbOne = Math.floor(Math.random() * 6) + 1;
console.log('Primo numero', numbOne)

//creo un nuovo div 
let newDiv = document.createElement('div');

//do le classi al div
newDiv.classList.add("dice");

//aggiungo elemento
newDiv.innerHTML = numbOne;
fistNumDiv.append(newDiv);

//SECONDO NUMERO
const secondNumDiv = document.querySelector('div#second-num')
//faccio generare il primo numero random
let numbTwo = document.getElementById('second-num');
numbTwo = Math.floor(Math.random() * 6) + 1;
console.log('Secondo numero', numbTwo)

//creo un nuovo div 
let newDivTwo = document.createElement('div');

//do le classi al div
newDivTwo.classList.add("dice");

//aggiungo elemento
newDivTwo.innerHTML = numbTwo;
secondNumDiv.append(newDivTwo);

//confronto i due numeri generati 
if (numbOne > numbTwo) {
    document.getElementById('winner').innerHTML = 'Hai vinto tu!'
}
else if (numbOne == numbTwo) {
    document.getElementById('winner').innerHTML = 'Pareggio'
}
else {
    document.getElementById('winner').innerHTML = 'Hai Perso!'
}