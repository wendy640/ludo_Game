var randomDice1 = Math.floor(Math.random()*6)+1;
var imageSrc1 = "images/dice" + randomDice1 + ".png";
document.querySelectorAll(".img1")[0].setAttribute("src" , imageSrc1);


var randomDice2 = Math.floor(Math.random()*6)+1;
var imageSrc2 = "images/dice" + randomDice2 + ".png";
console.log(imageSrc2);
document.querySelector(".pic").setAttribute("src" , imageSrc2);

if (randomDice1 === randomDice2) {
   document.querySelector("h1").innerHTML = "Draws";
}else if (randomDice1 > randomDice2) {
   document.querySelector("h1").innerHTML="Player 1 Wins";
}else{
   document.querySelector("h1").innerHTML="Player 2 Wins";
}