var court,court_img;
var ball,ball_img;
var topwall1,topwall2,leftwall,rightwall;
var playerPaddle;

function preload(){
court_img = loadImage("court.jpeg");
ball_img = loadImage("ball.png");

}

function setup() {
  createCanvas(400,400);
 
  // Background for the Game
  
 
  // Walls
  topwall1 = createSprite(75,5,150,10);
  topwall1.shapeColor = "white";

  topwall2 = createSprite(325,5,150,10);
  topwall2.shapeColor = "white";
 
  leftwall = createSprite(5,200,10,450);
  leftwall.shapeColor = "white";

  rightwall = createSprite(400,200,20,500)
  rightwall.shapeColor = "white";

  // Ball which will be used
  ball = createSprite(200,350);
  ball.scale = 0.08;
  ball.addImage(ball_img);


  // Player paddle to control the ball
  playerPaddle = createSprite(200,395,100,10);

  // Gamestate TBA


  createEdgeSprites();
}

function draw() 
{
  background(court_img);

  ball.velocityX = ball.velocityY + 0.25; 
  ball.velocityY = ball.velocityX + 0.25;
  textSize(20);

  //if(gameState === )



  ball.collide(topwall1);
  ball.collide(topwall2);
  ball.collide(leftwall);
  ball.collide(rightwall);

  ball.bounceOff(playerPaddle);


  playerPaddle.x = World.mouseX;

  if(playerPaddle.x < 60){
    playerPaddle.x = 60;
  }

  if(playerPaddle.x > 340){
    playerPaddle.x = 340;
  }

  drawSprites();
}

function mousePressed(){
  ball.velocityX = 4; 
  ball.velocityY = -3;

  //gamestate = "play";
}

function reset(){
  ball.velocityX = 0;
  ball.velocityY = 0;

  ball.x = 200;
  ball.y = 370;
}



