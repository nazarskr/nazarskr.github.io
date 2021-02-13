const question = document.getElementById('question');
const answer = document.getElementById('answer');
const letters = 'абвгґдеєжзиіїйклммнопрстуфхцчшщьюя';
setTimeout(() => {
  question.setAttribute('style', 'display:block');
}, 4000);
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
    question.removeEventListener('click');
  }, 3000);
});
