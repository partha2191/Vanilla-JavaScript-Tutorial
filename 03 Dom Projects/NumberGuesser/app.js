// Game values
let min = 1, 
    max = 10,
    winningNum = getRandomNum(min, max),
    guessLeft = 3;

// UI elements
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num');
      maxNum = document.querySelector('.max-num');
      guessInput = document.querySelector('#guess-input');
      guessBtn = document.querySelector('#guess-btn');
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', (e) => {
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
})

guessBtn.addEventListener('click', () => {
  // console.log('Submitted..');
  const guess = parseInt(guessInput.value);
  // Validate
  if(isNaN(guess) || guess < min || guess > max) {
    sendMessage(`Please enter a number between ${min} and ${max}`, 'red');
  } else {
    if(guess == winningNum) {
      gameOver(true, `${winningNum} is correct, You WON!`, 'green');
    } else {
      guessLeft -= 1;
      if(guessLeft == 0) {
        gameOver(false, `Game over, you lost. The correct number was ${winningNum}`, 'red');
      } else {
        guessInput.style.borderColor = 'red';
        guessInput.value = '';
        sendMessage(`${guess} is not correct, ${guessLeft} guesses left `, 'red');
      }
    }
  }
});

function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  sendMessage(msg);

  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

function getRandomNum(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

function sendMessage(error, color) {
  message.style.color = color;
  message.textContent = error;
}

