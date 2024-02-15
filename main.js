let square = document.querySelector(".grid");

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
    div.addEventListener("mouseover", function () {
      div.style.backgroundColor = "red"; // Change the background color on hover
    });
  }
  
}

function gridSize() {
  let input = prompt("Enter the size of the grid (1-100)");
  let message = document.querySelector(".message");
  if (input === "" || input < 1 || input > 100 || input === null) {
    if (input === "") console.log("empty");
    message.innerHTML = "Please enter a number between  (1-100)";
  } else {
    message.textContent = `size of the board: ${input}x${input}`;
    console.log(input);
    
    return input;
  }
}
