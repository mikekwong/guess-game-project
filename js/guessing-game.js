/*

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "testem".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/

const generateWinningNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const shuffle = array => {
  let m = array.length,
    t,
    i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
};

class Game {
  constructor() {}
  playersGuess() {}
  pastGuesses() {
    return [];
  }
  winningNumber() {
    generateWinningNumber();
  }
}

// let game = new Game();
// console.log(game.pastGuesses.length);
