const button = document.getElementById('criar-carta');
const paragraph = document.getElementById('carta-gerada');
const input = document.getElementById('carta-texto');
const counter = document.getElementById('carta-contador');
// const sp =  document.getElementsByTagName('span');

const words = () => input.value.split(' ');

const styleAndSizeGroup = () => {
  const style = ['newspaper', 'magazine1', 'magazine2'];
  const size = ['medium', 'big', 'reallybig'];
  return `${style[parseInt(Math.random() * 3, 10)]} ${size[parseInt(Math.random() * 3, 10)]}`;
};

const rotationAndTiltGroup = () => {
  const rotation = ['rotateleft', 'rotateright'];
  const tilt = ['skewleft', 'skewright'];
  return `${rotation[parseInt(Math.random() * 2, 10)]} ${tilt[parseInt(Math.random() * 2, 10)]}`;
};

const selectClass = () => `${rotationAndTiltGroup()} ${styleAndSizeGroup()}`;

const createSpan = (text) => {
  const element = document.createElement('span');
  element.innerText = text;
  element.className = selectClass();
  paragraph.appendChild(element);
};

const generateLetter = () => words().forEach((word) => createSpan(word));

const inputCheck = () => {
  const { value } = input;
  if (!value || /^\s+$/.test(value)) return true;
};

const wordsNumbers = () => { counter.innerText = words().length; };

const test = (e) => {
  console.log(e);
  const { target } = e;
  if (target.tagName === 'SPAN') {
    target.className = '';
    target.className = selectClass();
  }
};

const spansEventClick = () => { paragraph.onclick = (e) => test(e); };

const clearLetter = () => {
  const spans = document.querySelectorAll('#carta-gerada span');
  spans.forEach((element) => paragraph.removeChild(element));
};

const inputMessage = () => { paragraph.innerText = 'Por favor, digite o conteúdo da carta.'; };

const chama = () => {
  if (paragraph.children) {
    clearLetter(); generateLetter(); wordsNumbers(); spansEventClick();
  } else {
    generateLetter(); wordsNumbers(); spansEventClick();
  }
};

const textValidation = () => (inputCheck() ? inputMessage() : chama());

const events = () => {
  button.addEventListener('click', textValidation);
};

events();
