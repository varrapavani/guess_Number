// Assume rangeStart and rangeEnd are always greater than 0.
// rangeStart is always less than rangeEnd.
function isEqualToSecret(userNumber, secretNumber) {
  if (userNumber > secretNumber) {
    console.log(userNumber + 'Too high! Try a smaller number.');
    return false;
  }

  if (userNumber < secretNumber) {
    console.log(userNumber + 'Too low! Try a higher number.');
    return false;
  }

  if (userNumber === secretNumber) {
    console.log("Bravo! You've nailed it. The number was " + secretNumber + '!');
    return true;
  }
}

function getUserNumber() {
  const userNumber = +prompt('Guess a Secret Number : ');

  if (userNumber + '' === 'NaN') {
    console.log('Invalid input! Please enter a number.');
    return getUserNumber();
  }
  return userNumber;
}

function takeUserGuesses(secretNumber, maxAttempts) {
  console.log('Take a guess! (Remaining attempts: ' + maxAttempts + ')');

  if (maxAttempts === 0) {
    console.log("Oh no! You've used all your attempts. Better luck next time!");
    return '';
  }
  const userNumber = getUserNumber();
  const isSecretNumber = isEqualToSecret(userNumber, secretNumber);

  if (!isSecretNumber) {
    return takeUserGuesses(secretNumber, maxAttempts - 1);
  }
  return '';
}

function playGame(rangeStart, rangeEnd, maxAttempts) {
  const range = rangeEnd - rangeStart;
  const secretNumber = Math.round(Math.random() * range) + rangeStart;
 
  takeUserGuesses(secretNumber, maxAttempts);

  if (confirm('Do you want to play again')) {
    playGame(rangeStart, rangeEnd, maxAttempts)
  } else {
    console.log('Goodbye');
  }
}

function startGame(rangeStart, rangeEnd, maxAttempts) {
  console.log('Welcome to Guess the Number!');
  console.log('The secret number is between ' + rangeStart + ' and ' + rangeEnd + '. You have ' + maxAttempts + ' attempts to find it.\n');

  playGame(rangeStart, rangeEnd, maxAttempts);
}

startGame(10, 20, 6);
