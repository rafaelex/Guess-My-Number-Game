/*The purpose of "use strict" is to indicate that the code should be executed in "strict mode". With strict mode, you can not, for example, use undeclared variables. 
The numbers in the table specify the first browser version that fully supports the directive. You can use strict mode in all your programs. BY W3schools*/

/* The strict mode is no longer required since the release of ES2015, which fixes most of JavaScript's confusing behavior with a more robust syntax.
 It's just good to know because you might find it in legacy projects that still used it. By https://sebhastian.com/*/

'use strict';

//Shortcut for Emojies:
//WINDOWS 10: Windows + .
//macOS: CMD + CTRL + space

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
  console.log(message);
  if (message === '📈 Too High!' || message === '📉 Too Low!') {
    document.querySelector('.message').style.color = '#f1184c';
    document.querySelector('.message').style.fontSize = '2rem';
  } else {
    document.querySelector('.message').style.color = '#fff';
  }
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When the score is greater than 0
  if (score >= 1) {
    if (!guess) {
      displayMessage('⛔ No number entered!');
    } else if (guess === secretNumber) {
      displayMessage('Correct Result 🎉');
      displayNumber(secretNumber);
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '20rem';

      if (highscore < score) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess !== secretNumber) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');

      if (score < 1) {
        displayMessage('💣 You Lost!');
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayNumber('?');
  document.querySelector('.guess').value = '';
});
