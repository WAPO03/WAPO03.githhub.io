var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";


function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
}

function draw() {
  background(220);
  
  // check which level to display based on gameState
  if (gameState == "L1") {
    levelOne();
  } 
  else if (gameState == "L2") {
    levelTwo(); 
  }
  else if (gameState == "L3") {
    levelThree(); 
  }
  else if (gameState == "L4") {
    levelFour();
  }
  else if (gameState == "L5") {
    levelFive();
  }
  
  text(("Score: " + score), width/2, 40);
}

function levelOne() {
  text("Level 1", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  // move the ball and update score if the player catches it
  if (distToBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  // move to level 2 if player reaches score of 5
  if (score >= 5) {
    gameState = "L2";
    ballSize = 30;
  }
  
  // display ball and line
  ellipse(ballx, bally, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
}

function levelTwo() {
  background(200, 100, 0);
  text("Level 2", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  // move the ball and update score if the player catches it
  if (distToBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  // move to level 3 if player reaches score of 10
  if (score >= 10) {
    gameState = "L3";
    ballSize = 20;
  }
  
  // display bouncing ball and line
  ballx += random(-5, 5);
  bally += random(-5, 5);
  ellipse(ballx, bally, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
}

function levelThree() {
  background(200, 100, 200);
  text("Level 3", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  // move the ball and update score if the player catches it
  if (distToBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  // move to level 4 if player reaches score of 15
  if (score >= 15) {
    gameState = "L4";
    ballSize = 15;
  }
  
  // display shrinking ball and line
  ellipse(ballx, bally, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
}

function levelFour() {
  background(0, 100, 200);
text("Level 4", width/2, height-20);
var distToBall = dist(ballx, bally, mouseY, mouseX); // reverse control

// move the ball and update score if the player catches it
if (distToBall < ballSize/2) {
  ballx = random(width);
  bally = random(height);
  score = score + 1;
}

// move to level 5 if player reaches score of 20
if (score >= 20) {
  gameState = "L5";
  ballSize = 10;
}

// display ball and line
ellipse(ballx, bally, ballSize, ballSize);
line(ballx, bally, mouseY, mouseX); // reverse control
}
function levelFive() {
  background(0);
  text("Level 5", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);

  // move the ball and update score if the player catches it
  if (distToBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }

  // increase the speed of the ball
  ballx += random(-10, 10);
  bally += random(-10, 10);

  // check for boundary conditions
  if (ballx > width - ballSize/2) {
    ballx = width - ballSize/2;
  }
  if (ballx < ballSize/2) {
    ballx = ballSize/2;
  }
  if (bally > height - ballSize/2) {
    bally = height - ballSize/2;
  }
  if (bally < ballSize/2) {
    bally = ballSize/2;
  }

  // move to game over screen if player reaches score of 25
  if (score >= 25) {
    gameState = "GAMEOVER";
  }

  // display ball and line
  fill(255);
  ellipse(ballx, bally, ballSize, ballSize);
  stroke(255);
  line(ballx, bally, mouseX, mouseY);
}
function gameOver() {
  background(0);
  textAlign(CENTER);
  textSize(40);
  fill(255);
  text("Game Over", width/2, height/2 - 40);
  textSize(20);
  text("Your score was " + score, width/2, height/2);
  textSize(30);
  restartButton.show();
}

function restartGame() {
  ballx = 300;
  bally = 300;
  ballSize = 40;
  score = 0;
  gameState = "L1";
  restartButton.hide();
}

let restartButton;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);

  restartButton = createButton('Restart');
  restartButton.position(width/2 - restartButton.width/2, height/2 + 20);
  restartButton.mousePressed(restartGame);
  restartButton.hide();
}

function draw() {
  background(220);
  
  // check which level to display based on gameState
  if (gameState == "L1") {
    levelOne();
  } 
  else if (gameState == "L2") {
    levelTwo(); 
  }
  else if (gameState == "L3") {
    levelThree(); 
  }
  else if (gameState == "L4") {
    levelFour();
  }
  else if (gameState == "L5") {
    levelFive();
  }
  else if (gameState == "GAMEOVER") {
    gameOver();
  }
  
  text(("Score: " + score), width/2, 40);
}
