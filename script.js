'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener
  ('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // Quando não tem input
    if (!guess) {
      document.querySelector('.message').textContent = 'No number!';

      // Ganhou
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = 'Correct Number!';
      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      // Quando chute é muito alto
    } else if (guess > secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = 'Too high!';
        score--;
        document.querySelector('.score').textContent = score;

      } else {
        document.querySelector('.message').textContent = 'You lost the game! :(';
        document.querySelector('.score').textContent = 0;
      }

      // Quando chute é muito baixo
    } else if (guess < secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = 'Too low!';
        score--;
        document.querySelector('.score').textContent = score;

      } else {
        document.querySelector('.message').textContent = 'You lost the game! :(';
        document.querySelector('.score').textContent = 0;
      }
    }
  });

/// Challenge
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;


  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
