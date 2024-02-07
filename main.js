let square = document.querySelector(".grid");
document.addEventListener("DOMContentLoaded", function () {
  createBoard(44);
});

function createBoard(size) {
  square.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  square.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}
