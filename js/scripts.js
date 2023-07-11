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

  function handleDeleteLetter() {
    const currentWordArr = getCurrentWordArr();
    const removedLetter = currentWordArr.pop();

    guessedWords[guessedWords.length - 1] = currentWordArr;

    const lastLetterEl = document.getElementById(String(availableSpace - 1));

    lastLetterEl.textContent = "";
    availableSpace = availableSpace - 1;
  }

  let word;
  let guessedWordCount = 0;

  // Get new word
  (() => {
    fetch(
      `https://wordsapiv1.p.rapidapi.com/words/?random=true&lettersMin=5&lettersMax=5`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
          "x-rapidapi-key": "23ca795de1mshddbbfdcbd33460ep1eb4bbjsn104aa55a0e4d",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        word = res.word;
      })
      .catch((err) => {
        console.error(err);
      });
  })();

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

  function handleSubmitWord() {
    const currentWordArr = getCurrentWordArr();
    if (currentWordArr.length !== 5) {
      window.alert("Word must be 5 letters");
    }

    const currentWord = currentWordArr.join("");

    fetch(`https://wordsapiv1.p.rapidapi.com/words/${currentWord}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
        "x-rapidapi-key": "23ca795de1mshddbbfdcbd33460ep1eb4bbjsn104aa55a0e4d",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw Error();
        }

        const firstLetterId = guessedWordCount * 5 + 1;
        const interval = 200;
        currentWordArr.forEach((letter, index) => {
          setTimeout(() => {
            const tileColor = getTileColor(letter, index);

            const letterId = firstLetterId + index;
            const letterEl = document.getElementById(letterId);
            letterEl.classList.add("animate__flipInX");
            letterEl.style = `background-color:${tileColor};border-color:${tileColor}`;
          }, interval * index);
        });

        guessedWordCount += 1;

        if (currentWord === word) {
          window.alert("Congratulations!");
        }

        if (guessedWords.length === 6) {
          window.alert(`Sorry, you have no more guesses! The word is ${word}.`);
        }

        guessedWords.push([]);
      })
      .catch(() => {
        window.alert("Word is not recognised!");
      });
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

  function getTileColor(letter, index) {
    const isCorrectLetter = word.includes(letter);

    if (!isCorrectLetter) {
      return "rgb(58, 58, 60)";
    }

    const letterInThatPosition = word.charAt(index);
    const isCorrectPosition = letter === letterInThatPosition;

    if (isCorrectPosition) {
      return "rgb(83, 141, 78)";
    }

    return "rgb(181, 159, 59)";
  }

})