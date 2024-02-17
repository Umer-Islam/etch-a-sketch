let square = document.querySelector(".grid");
let color = 'black'
document.addEventListener("DOMContentLoaded", function () {
  createBoard(4);
  let play = document.querySelector("#play");
  play.addEventListener("click", function () {
    let size = gridSize();
    console.log(`output of gridSize(): ${size}`);
    createBoard(size);
  });
});

function createBoard(size) {
  square.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  square.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  let divs = size * size;
  for (let i = 0; i < divs; i++) {
    let div = document.createElement("div");
    square.appendChild(div);
    // div.style.border = "solid black .1px";
    div.addEventListener("mouseover", colorDiv);
  }
  
}

function gridSize() {
  let input = prompt("Enter the size of the grid (1-100)");
  let message = document.querySelector(".message");
  if (input === "" || input < 1 || input > 100 || input === null) {
    if (input === "") console.log("empty");
    message.innerHTML = "Please enter a number between  (1-100)" ;
    message.style.color = 'red'
    message.style.backgroundColor= '#555555'
    message.style.fontFamily = 'Verdana'
  } else {
    message.textContent = `size of the board: ${input}x${input}`;
    message.style.color = 'yellowgreen'
    message.style.backgroundColor = 'gray'
    // message.style.display = 'inline-block'

    console.log(input);
    
    return input;
  }
}

function colorDiv(color){
  
      if(color === "random"){
          this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
      }
      else{
          this.style.backgroundColor = 'black'
      }
  
}

function resetBoard(){
  let divs = document.querySelectorAll("div")
  divs.forEach((div) => div.style.backgroundColor = "white")
}