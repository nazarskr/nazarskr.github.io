const fixedContainer = document.getElementById('fixed-container');
const question = document.getElementById('question');
const answer = document.getElementById('answer');
const close = document.getElementById('close');
const letters = 'абвгґдеєжзиіїйклммнопрстуфхцчшщьюя';
setTimeout(() => {
  fixedContainer.setAttribute('style', 'display:flex');
}, 5000);
question.addEventListener('click', () => {
  const randomizer = setInterval(() => {
    let word = '';
    for (let i = 0; i < 7; i++) {
      word += letters[Math.floor(Math.random() * 30)];
    }
    answer.innerHTML = word;
  }, 100);

  setTimeout(() => {
    clearInterval(randomizer);
    answer.innerHTML = 'Сумочка!';
    question.setAttribute('class', 'decrease');
    answer.setAttribute('class', 'increase');
  }, 3000);
});

close.addEventListener('click', () => {
  fixedContainer.setAttribute('style', 'display:none');
});
