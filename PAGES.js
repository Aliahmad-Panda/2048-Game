//Function to create the Display of the Menu
function MENU() {
  background(121, 80, 132);
  textAlign(CENTER, CENTER);
  strokeWeight(1);
  fill(121, 69, 69);
  if (mouseX > 100 && mouseX < 300 && mouseY > 100 && mouseY < 175) {
    //If command to make box highlight.
    strokeWeight(3);
    stroke(255, 255, 255);
  }
  rect(100, 100, 200, 75); //Start game button
  strokeWeight(1); //Making other stuff back to normal
  stroke(0);

  //Writing Text
  textSize(24);
  fill(255);
  text("Welcome to the 2048 Game", 200, 50);
  textAlign(LEFT);
  textSize(16);
  if (mouseX > 100 && mouseX < 300 && mouseY > 100 && mouseY < 175) {
    fill(255, 255, 255);
  } else {
    fill(255);
  }
  text("Start game", 155, 140);
  fill(121, 69, 69);
  if (mouseX > 100 && mouseX < 300 && mouseY > 200 && mouseY < 275) {
    //If command to make box highlight.
    strokeWeight(3);
    stroke(255, 255, 255);
  }
  rect(100, 200, 200, 75);
  strokeWeight(1); //Making other stuff back to normal
  stroke(0);
  if (mouseX > 100 && mouseX < 300 && mouseY > 200 && mouseY < 275) {
    fill(255, 255, 255);
  } else {
    fill(255);
  }
  text("Instructions", 155, 240);
  strokeWeight(1); //Making other stuff back to normal
  stroke(0);

  fill(225);
  textSize(12);
  text("A game brought to you by", 135, 350);
  text("  Abdullah Khan  And  Ali           Ahmad ", 100, 375);
  textSize(11);
  text("@Copywrite Protected", 285, 395);
}

//Function to create the Display of the Instructions
function INSTRUCTIONS() {
  //background(200, 0, 200);
  background(128, 0, 128);

  // Display instructions for the 2048 game
  strokeWeight(0.5);
  fill(0);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Instructions for 2048:", width / 2, height / 2 - 150);
  textSize(16);
  text("Use the arrow keys to move the tiles.", width / 2, height / 2 - 100);
  textSize(12);
  text(
    "When two tiles with the same number touch, they merge into one!",
    width / 2,
    height / 2 - 50
  );
  text(
    "Try to create a tile with the number 2048 to win the game!",
    width / 2,
    height / 2
  );
  text(
    "A new random number will be generated every move",
    width / 2,
    height / 2 + 50
  );
  text(
    "The new genrated number will be highlighted",
    width / 2,
    height / 2 + 100
  );
  // BACK BUTTON
  fill(0, 100, 200);
  if (mouseX > 100 && mouseX < 300 && mouseY > 320 && mouseY < 380) {
    //If command to make box highlight.
    strokeWeight(3);
    stroke(0, 255, 0);
  }
  rect(100, 320, 200, 50);
  strokeWeight(1); //Making other stuff back to normal
  stroke(0);
  textAlign(CENTER, CENTER);
  fill(255);
  if (mouseX > 100 && mouseX < 300 && mouseY > 320 && mouseY < 380) {
    //If command to make box highlight.
    strokeWeight(3);
    fill(255, 0, 0);
  }
  text("BACK", 200, 345);
  let a = createA(
    "https://www.youtube.com/embed/xMHJGd3wwZk",
    "TO instantly Win"
  );
  a.position(250, 375);
  strokeWeight(1); //Making other stuff back to normal
  stroke(0);
}

//Function to create the Display of the Game lost page
function LOST() {
  background(0);
  fill(255, 0, 0);
  textSize(24);
  text("GAME OVER", 200, 125);
  text("Score :", 175, 200);
  text(score, 250, 200);
  fill(255);
  rect(100, 250, 200, 80);
  fill(255, 0, 0);
  text("Restart", 200, 290);
}

//Function to create the Display of the Game won
function WON() {
  background(0, 100, 0);
  fill(0);
  textSize(30);
  textAlign(CENTER, CENTER);
  text("Congratulations", 200, 75);
  text("You     Have     finally", 200, 125);
  text("Wasted a lot of time", 200, 175);
  text("You get absolutely nothing", 200, 225);
  fill(0);
  rect(100, 250, 200, 80);
  fill(231, 84, 203);
  text("Restart", 200, 290);
}

//Function to create the Display of the GameMode panel
function GAMEMODE(){
  background(121, 80, 132);
  textAlign(CENTER, CENTER);
  strokeWeight(1);
  fill(121, 69, 69);
  if (mouseX > 100 && mouseX < 300 && mouseY > 100 && mouseY < 175) {
    //If command to make box highlight.
    strokeWeight(3);
    stroke(255, 255, 255);
  }
  rect(100, 100, 200, 75); //Start game button
  strokeWeight(1); //Making other stuff back to normal
  stroke(0);

  //Writing Text
  textSize(24);
  fill(255);
  text("Choose the game mode", 200, 50);
  textAlign(LEFT);
  textSize(16);
  if (mouseX > 100 && mouseX < 300 && mouseY > 100 && mouseY < 175) {
    fill(255, 255, 255);
  } else {
    fill(255);
  }
  textSize(24);
  text("Classical", 150, 130);
  textSize(16);
  text("4x4", 185, 160);
  fill(121, 69, 69);
  if (mouseX > 100 && mouseX < 300 && mouseY > 200 && mouseY < 275) {
    //If command to make box highlight.
    strokeWeight(3);
    stroke(255, 255, 255);
  }
  rect(100, 200, 200, 75);
  strokeWeight(1); //Making other stuff back to normal
  stroke(0);
  if (mouseX > 100 && mouseX < 300 && mouseY > 200 && mouseY < 275) {
    fill(255, 255, 255);
  } else {
    fill(255);
  }
  textSize(24);
  text("5X5", 180, 235);
  strokeWeight(1); //Making other stuff back to normal
  stroke(0);
}
