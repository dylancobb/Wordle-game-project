document.addEventListener("DOMContentLoaded", () => {
  // create 6x5 game board
  (() => {
    const gameBoard = document.querySelector("#board");
    const MAX_ATTEMPTS = 6;

    // Create word grid
    for (let i = 0; i < MAX_ATTEMPTS; i++) {
      for (let j = 0; j < 5; j++) {
        const square = document.createElement('div');
        square.classList.add("square");
        square.setAttribute("id", i * 5 + j + 1);
        gameBoard.appendChild(square);
      }
    }

  })();
})