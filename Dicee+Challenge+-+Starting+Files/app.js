const number = 6
var player1_choose = Math.floor(Math.random() * number + 1);
var player2_choose = Math.floor(Math.random() * number + 1);
var player1 = document.querySelector('.img1');
var player2 = document.querySelector('.img2');

player1.setAttribute("src", "./images/dice"+player1_choose+".png");
player2.setAttribute("src", "./images/dice"+player2_choose+".png");

if(player1_choose > player2_choose){
    document.querySelector('h1').textContent = "Player 1 Wins! 🙌"
}
else if(player2_choose > player1_choose){
    document.querySelector('h1').textContent = "Player 2 Wins! 🙌"
}else{
    document.querySelector('h1').textContent = "Draws! 🙌"
}