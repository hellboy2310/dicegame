function rolldice(){
  document.querySelector(".img1").setAttribute("src", "images/dice6.png");

  var player1 = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
   var randomplayer1 = (Math.floor(Math.random() * player1.length)+1);



if (randomplayer1 == 1)
{
  document.querySelector(".img1").setAttribute("src","images/dice1.png");
}
if (randomplayer1 == 2)
{
  document.querySelector(".img1").setAttribute("src","images/dice2.png");
}
if (randomplayer1 == 3)
{
  document.querySelector(".img1").setAttribute("src","images/dice3.png");
}
if (randomplayer1 == 4)
{
  document.querySelector(".img1").setAttribute("src","images/dice4.png");
}
if (randomplayer1 == 5)
{
  document.querySelector(".img1").setAttribute("src","images/dice5.png");
}


document.querySelector(".img2").setAttribute("src","images/dice6.png");
var player2 = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var randomplayer2 = (Math.floor(Math.random()*player2.length)+1);


if (randomplayer2 == 1)
{
  document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
if (randomplayer2 == 2)
{
  document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
if (randomplayer2 == 3)
{
  document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
if (randomplayer2 == 4)
{
  document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
if (randomplayer2 == 5)
{
  document.querySelector(".img2").setAttribute("src","images/dice5.png");
}


if(randomplayer1>randomplayer2)
{
  document.querySelector("h1").innerHTML = "player1 wins";
}

if(randomplayer2>randomplayer1)
{
  document.querySelector("h1").innerHTML = "player2 wins";
}

if(randomplayer1 == randomplayer2){
  document.querySelector("h1").innerHTML = "draw!";
}


}
rolldice();
