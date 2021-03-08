// Message using throughout file
const enterNumText = `Please enter a number greater than zero`;

// for restarting the game
let retartGame = true;

// For storing range of the number to be guessed
let rangeNum;

// For storing number to be guessed
let randomNum;

// For storing the number of attempts left
let attempts;

// For storing the users guess
let guess;

// users response to play again or not
let playAgain;

// starting alert message
alert(`Welcome to "GUESS THAT NUMBER!" Please click "OK" to start the game.`);

// game retarts as long as restart game has a value of true
while (retartGame) {
  // Ask the user to enter a number to set the upper bound for the random number that will be created

  rangeNum = parseInt(prompt(`Please enter a maxium number for the range`));

  // Verifies the users entry for a range  number is a number greater than 0(NOTE: all numbers positive and negative have a default boolean value of true, except for 0which has a default value of false. Also NaN has a default value of false)
  while (!rangeNum || rangeNum < 1) {
    rangeNum = parseInt(prompt(enterNumText));
    
  }

  // Created the random number using the range number entered by the user
  randomNum = Math.floor(Math.random() * rangeNum) + 1;

  // prompts user to enter a number of attempts allowed
  attempts = parseInt(prompt(`Please entere a number of attempts allowed`));

  // Verifies the user's entry for a number of attempts allowed greater than zero
  while (!attempts || attempts < 1) {
    attempts = parseInt(prompt(enterNumText));
  }

  // Asks user to enter a guess in the range that they set from above
  guess = prompt(`Please enter a guess between 1 and ${rangeNum}. You have ${attempts} attempt(s) left:`);

  // continues looping until the user guesses the correct number or runs out of attempts (Loops until a BREAK keyword is run)
  while (true) {
      if (guess === "I am inevitable"){
          alert(`The number doesn't matter you're inevitable....${randomNum}`)
          prompt(`Please enter a guess between 1 and ${rangeNum}. You have ${attempts} attempt(s) left:`)
      }
    // Tries converting user guess to a number
    guess = parseInt(guess);

    // Verifies the users guess is a number greater than 0 and within the range they set
    while (!guess || guess < 1 || guess > rangeNum) {
      guess = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`));
    }

    // removes a an attempt
    attempts--;

    // checks if user guessed corerctly, if so the game ends
    if (guess === randomNum) {
      alert(`CONGRATULATIONS YOU GUESSED THE NUMBER: ${randomNum}`);

      break;

      //   Checks if user has any attempts left if not the game ends and message is displayed
    } else if (attempts === 0) {
      alert(
        `Sorry but you have run out of attempts too bad \n  The number was ${randomNum}`
      );
      break;

      //   Checks if users guess was too low and returns a prompt of too low
    } else if (guess < randomNum) {
      guess = prompt(`Too low. You have ${attempts} attempt(s) left`);

      //   Checks if users guess was too high and returns a prompt of too high
    } else {
      guess = prompt(`Too high. You have ${attempts} attempt(s) left`);
    }
  }
  playAgain = prompt(`Would you like to play again? Y for Yes. N for No`)

  while (true){

    // Checks if user answer is no(N) or (n)
if (playAgain.toUpperCase() === "N"){
    // Alerts user that game is over. Game Does not restart
alert(`Thanks for playing`);
retartGame = false;
break;
    }else if ((playAgain.toUpperCase() === "Y")){
        // the game restarts 
        break;
    }else {
        playAgain = prompt(`Please enter Y or N:`);
    
    }

  }
 
}
