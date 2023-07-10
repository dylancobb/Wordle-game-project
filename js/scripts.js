document.addEventListener('DOMContentLoaded', () => {

  // create 6x5 game board
  (() => {
    const gameBoard = document.getElementById('board');
    const MAX_ATTEMPTS = 6;

    // Create grid
    for (let i = 0; i < MAX_ATTEMPTS; i++) {
      for (let j = 0; j < 5; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('id', i * 5 + j + 1);
        gameBoard.appendChild(square);
      }
    }

  })();

  // receive input from keyboard
  const keys = document.querySelectorAll('.keyboard-row button');
  for (let i = 0; i < keys.length; i++) {
    keys[i].onclick = ({ target }) => {
      const letter = target.getAttribute("data-key");

      if (letter === "enter") {
        handleSubmitWord();
        return;
      }

      if (letter === "del") {
        handleDeleteLetter();
        return;
      }

      updateGuessedWords(letter);
    };
  }

  let guessedWords = [[]];
  let availableSpace = 1;

  let word;
  let guessedWordCount = 0;

  function getCurrentWordArr() {
    const numberOfGuessedWords = guessedWords.length;
    return guessedWords[numberOfGuessedWords - 1];
  }

  function updateGuessedWords(letter) {
    const currentWordArr = getCurrentWordArr();

    if (currentWordArr && currentWordArr.length < 5) {
      currentWordArr.push(letter);

      const availableSpaceEl = document.getElementById(String(availableSpace));

      availableSpace = availableSpace + 1;
      availableSpaceEl.textContent = letter;
    }
  }

})