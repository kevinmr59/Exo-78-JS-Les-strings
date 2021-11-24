let monTexte = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

// Completer le code suivant pour afficher la longueur de la variable monTexte

alert(monTexte.length);
let one = monTexte.indexOf('i')
console.log(one)


//Ajouter du code ci dessous pour réaliser la suite de l'exercice
let two =document.getElementById('position');
two.innerHTML= 'one';

let change = monTexte.toUpperCase();
let changeTwo =document.getElementById('chaineMaj')
changeTwo.innerHTML=change;
for (let i=0; i<change.length; i++){
    if (change.includes("A")){
        alert("lettre trouver")
    }
}









