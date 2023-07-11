# Wordle Game

This repository contains my implementation of the Wordle word game. The goal of this project is to recreate the game, focusing on specific user stories as part of a coding challenge.

## Project Overview 🗺️

The Wordle game is a word-guessing game where the player tries to guess a five-letter word within a limited number of attempts. The game provides feedback on the correctness of the guess by highlighting correct letters in the correct positions (green) and correct letters in the wrong positions (yellow).

## User Stories 👥

In order to tackle this challenge, I broke down the development tasks into the following user stories in typical Agile fashion:

1. Display Game Interface
    - 1a. Mobile-Friendly Design
2. Validate Player Guess
3. Check Guess against the Target Word
4. Track Remaining Attempts
5. Provide Game Over Condition
6. Allow Restarting the Game
7. Same Daily Word For All Users

## Development Process 🛠️

To start working on the project, I followed these steps:

1. Created a new GitHub repository to host the project.
2. Created separate issues on the repository for each user story.
3. Prioritized the user stories and selected one to focus on for the take-home challenge, with a mind to work on additional user stories if time permits.
4. Started implementing the selected user story, making incremental commits along the way.
5. Documented the process, challenges, and decisions in this README file.

## Progress 📈

- Project created.
- README created.
- Folder structure and tentative boilerplate code implemented.
- Plan of action worked out in the form of the above README 😊
- Basic layout, fonts and colour scheme implemented, largely following the original app's appearance.
- Created the 6x5 grid to display player guesses.
- Created the keyboard interface.

### User Story 1: Display Game Interface 1️⃣

- The basic layout of the original app consists of a centered container with a 6x5 grid where player guesses appear, with a title/menu bar above and a keyboard below which displays currently correctly/incorrectly guessed letters. Following this model I began by creating a centered flex container to hold the game UI, and created the 6x5 grid using JavaScript DOM manipulation. After this was styled correctly, I created the keyboard interface in HTML, as there was no getting around the manual labelling of each individual key! 😅

### User Story 2: Validate Player Guess 2️⃣

- For this user story I had to use the [WordsAPI](https://www.wordsapi.com/) and a fairly lengthy JavaScript function. I built the function first without the API using test variables holding placeholder words to check against, before implementing the API.
- The API generates the secret word for the player to guess, and is also used to check whether their guesses are "real words" or not.

### User Story 3: Check Guess Against The Target Word 3️⃣

- Along with implementing the WordsAPI, I added tests for whether a given letter is in the secret word, and, if so, whether the player's guess places the letter in the correct position. Tiles' colours are then changed when the row is accepted as a "real" word based on the results of these tests.

### User Story 4: Track Remaining Attempts 4️⃣

- This story was simple to implement. A counter counts down, and when it reaches zero, you have no more guesses. Not much more to say!

### User Story 5: Provide Game Over Condition 5️⃣

- If the player guesses the correct word, or if the remaining guesses counter reaches 0, the game ends.
- If they fail to guess the correct word before running out of guesses, an alert will tell them what the correct answer was.

### Next Steps ⏩

- Add ability to restart the game.
- Add rotating tile animations.
- Deploy to AWS.

## Conclusion 🎬

This was a great challenge! The things I found most useful from the exercise were:
- Getting more experience working with APIs—my last project with Founders and Coders introduced me to the basics, and this really helped consolidate what I learned.
- Practice breaking down a substantial project into user stories and figuring out how to tackle each piece individually.
