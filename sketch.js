let grid;
let grid_new;
let score = 0;
let Size;
let State = {
  menu: true,
  instructions: false,
  game: false,
  ending: false,
  gameMode: false
};
function draw() {
  if (State.menu) {
    MENU();
  } else if (State.instructions) {
    INSTRUCTIONS();
  } else if (State.gameMode){
    GAMEMODE();
  }
}
//The First function that gets Called
function setup() {
  //Creating the canvas and opening the Menu page
  createCanvas(400, 400);
  MENU();
}

//Function to add a new random number into a empty spot on the Grid
function addNumber() {
  //CHecking empty positions is out game grid and then inserting a random
  //value in 1 random spot(form the aviable ones).
  let options = [];
  for (let i = 0; i < Size; i++) {
    for (let j = 0; j < Size; j++) {
      if (grid[i][j] === 0)
        options.push({
          x: i,
          y: j,
        });
    }
  }
  if (options.length > 0) {
    let spot = random(options);
    grid[spot.x][spot.y] = randomGenrate();
    grid_new[spot.x][spot.y] = 1;
  }
}

//Function to draw the game and display the numbers
function drawGrid() {
  background(255);
  let w = width / Size;
  let h = height / Size;
  for (let i = 0; i < Size; i++) {
    for (let j = 0; j < Size; j++) {
      let val = grid[i][j];
      if (grid_new[i][j] == 1) {
        stroke(200, 0, 200);
        strokeWeight(16);
        grid_new[i][j] = 0;
      } else {
        strokeWeight(4);
        stroke(0);
      }
      if (val != 0) {
        fill(colorsSizes[val].color);
      } else {
        noFill();
      }

      rect(i * w, j * h, w, h, 30);
      if (val !== 0) {
        textAlign(CENTER, CENTER);
        textSize(colorsSizes[val].size);
        noStroke();
        fill(0);
        text(val, i * w + w / 2, j * h + h / 2);
      }
    }
  }
}

//Function to slide a row such that the zeroes(empty places) goes on one //side
function slide(row) {
  let arr = row.filter((val) => val);
  let missing = Size - arr.length;
  let zeros = Array(missing).fill(0);
  arr = zeros.concat(arr);
  return arr;
}

//Function to combine same Numbers into one
function combine(row) {
  for (let i = Size-1; i > 0; i--) {
    let a = row[i];
    let b = row[i - 1];
    if (a === b) {
      row[i] = a + b;
      score += row[i];
      row[i - 1] = 0;
    }
  }
  return row;
}

//Function to transpose the Grid.
function transposeGrid(grid) {
  let newGrid = blankGrid();
  for (let i = 0; i < Size; i++) {
    for (let j = 0; j < Size; j++) {
      newGrid[i][j] = grid[j][i];
    }
  }
  return newGrid;
}

//Function to Flip the Grid
function flipGrid(grid) {
  for (let i = 0; i < Size; i++) {
    grid[i].reverse();
  }
  return grid;
}

//Function to return a copy of the given Grid
function copyGrid(grid) {
  let extra = blankGrid();
  for (let i = 0; i < Size; i++) {
    for (let j = 0; j < Size; j++) {
      extra[i][j] = grid[i][j];
    }
  }
  return extra;
}

//Fucntion that checks whether the given two arrays are equal or not
function compare(a, b) {
  for (let i = 0; i < Size; i++) {
    for (let j = 0; j < Size; j++) {
      if (a[i][j] !== b[i][j]) {
        return true;
      }
    }
  }
  return false;
}

//Function that returns a Blank Grid
function blankGrid() {
  let blank = [];
  for(let i = 0;i<Size;i++){
    blank[i] = [];
    for(let j = 0; j<Size; j++){
      blank[i][j] = 0;
    }
  }  
  return blank;
}

//Funtion to perform 1 move.
function keyPressed() {
  if (State.game) {
    let flipped = false;
    let rotated = false;
    let played = true;
    switch (keyCode) {
      case DOWN_ARROW:
        // do nothing
        break;
      case UP_ARROW:
        grid = flipGrid(grid);
        flipped = true;
        break;
      case RIGHT_ARROW:
        grid = transposeGrid(grid);
        rotated = true;
        break;
      case LEFT_ARROW:
        grid = transposeGrid(grid);
        grid = flipGrid(grid);
        rotated = true;
        flipped = true;
        break;
      default:
        played = false;
    }

    if (played) {
      let past = copyGrid(grid);
      for (let i = 0; i < Size; i++) {
        grid[i] = operate(grid[i]);
      }
      let changed = compare(past, grid);
      if (flipped) {
        grid = flipGrid(grid);
      }
      if (rotated) {
        grid = transposeGrid(grid);
      }
      if (changed) {
        addNumber();
      }
      drawGrid();

      let gamewon = isGameWon();
      let gameover = isGameOver();
      if (gameover) {
        if (gamewon) {
          WON();
        } else LOST();

        State.ending = true;
      }
    }
  }
}

//Function to perform move in one direction
function operate(row) {
  row = slide(row);
  row = combine(row);
  row = slide(row);
  return row;
}

function isGameWon() {
  let Maxnumber = MaxValue();
  if(Maxnumber >= 2048){
    return true;
  }
  return false;
}

//Function that checks if the game is over or not
function isGameOver() {
  for (let i = 0; i < Size; i++) {
    for (let j = 0; j < Size; j++) {
      if (grid[i][j] == 0) {
        return false;
      }
      if (i !== Size-1 && grid[i][j] === grid[i + 1][j]) {
        return false;
      }
      if (j !== Size-1 && grid[i][j] === grid[i][j + 1]) {
        return false;
      }
    }
  }
  State.game = false;
  return true;
}

//Function that returns the max value in the grid
function MaxValue() {
  let largestValue = 0;
  for (let i = 0; i < Size; i++) {
    for (let j = 0; j < Size; j++) {
      if (grid[i][j] > largestValue) {
        largestValue = grid[i][j];
      }
    }
  }
  return largestValue;
}

//Function to navigate through the Menu
function mousePressed() {
  if (State.menu) {
    if (mouseX > 100 && mouseX < 300 && mouseY > 100 && mouseY < 175) {
      State.menu = false;
      State.gameMode = true;
    } else if (mouseX > 100 && mouseX < 300 && mouseY > 200 && mouseY < 275) {
      INSTRUCTIONS();
      State.instructions = true;
      State.menu = false;
    }
  }
  else if (State.instructions) {
    if (mouseX > 100 && mouseX < 300 && mouseY > 300 && mouseY < 350) {
      MENU();
      State.menu = true;
      State.instructions = false;
      //noLink();
    }
  }
  else if (State.ending) {
    if (mouseX > 100 && mouseX < 300 && mouseY > 250 && mouseY < 330) {
      score = 0;
      grid = blankGrid();
      //State.game = false;
      State.ending = false;
      State.menu = true;
      MENU();
    }
  }
  else if (State.gameMode) {
    if (mouseX > 100 && mouseX < 300 && mouseY > 100 && mouseY < 175) {
      State.gameMode = false;
      Size = 4;
      GAME();
      State.game = true;
    }
    if (mouseX > 100 && mouseX < 300 && mouseY > 200 && mouseY < 275) {
      State.gameMode = false;
      Size = 5;
      GAME();
      State.game = true;
    }
  }
}

//Function to start the game.
function GAME() {
  grid = blankGrid();
  grid_new = blankGrid();
  addNumber();
  addNumber();
  drawGrid();
}
