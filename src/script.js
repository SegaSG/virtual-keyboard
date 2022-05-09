// add basic variables
const wrapper = document.createElement('div');
const container = document.createElement('div');
const keyboard = document.createElement('div');
const keyboardTitle = document.createElement('h1');
const keyboardBox = document.createElement('div');
const textarea = document.createElement('textarea');
const keyboardContent = document.createElement('div');
const keyboardRowFirst = document.createElement('div');
const keyboardRowSecond = document.createElement('div');
const keyboardRowThird = document.createElement('div');
const keyboardRowFourth = document.createElement('div');
const keyboardRowFifth = document.createElement('div');
const keyboardInfo = document.createElement('div');
const keyboardInfoTextLang = document.createElement('div');
const keyboardInfoTextWin = document.createElement('div');

const keys = new Map([
  ['ё', ['`', 'ё', '~']], ['1', ['1', '1', '!']], ['2', ['2', '2', '@']], ['3', ['3', '3', '#']], ['4', ['4', '4', '$']], ['5', ['5', '5', '%']], ['6', ['6', '6', '^']], ['7', ['7', '7', '&']], ['8', ['8', '8', '*']], ['9', ['9', '9', '(']], ['0', ['0', '0', ')']], ['-', ['-', '-', '_']], ['=', ['=', '=', '+']], ['backspace', ['backspace', 'backspace']],
  ['tab', ['tab', 'tab']], ['й', ['q', 'й']], ['ц', ['w', 'ц']], ['у', ['e', 'у']], ['к', ['r', 'к']], ['е', ['t', 'е']], ['н', ['y', 'н']], ['г', ['u', 'г']], ['ш', ['i', 'ш']], ['щ', ['o', 'щ']], ['з', ['p', 'з']], ['х', ['[', 'х', '{']], ['ъ', [']', 'ъ', '}']], ['\\', ['\\', '\\', '|']], ['del', ['del', 'del', 'delete']],
  ['caps lock', ['caps lock', 'caps lock']], ['ф', ['a', 'ф']], ['ы', ['s', 'ы']], ['в', ['d', 'в']], ['а', ['f', 'а']], ['п', ['g', 'п']], ['р', ['h', 'р']], ['о', ['j', 'о']], ['л', ['k', 'л']], ['д', ['l', 'д']], ['ж', [';', 'ж', ':']], ['э', ["'", 'э', '"']], ['enter', ['enter', 'enter']],
  ['shift', ['shift', 'shift', 'shiftLeft']], ['я', ['z', 'я']], ['ч', ['x', 'ч']], ['с', ['с', 'c']], ['м', ['v', 'м']], ['и', ['b', 'и']], ['т', ['n', 'т']], ['ь', ['m', 'ь']], ['б', [',', 'б', '<']], ['.', ['.', 'ю', '>']], ['/', ['/', '.', '?']], ['&#5169', ['&#5169', '&#5169', 'arrowUp']], [' shift', [' shift', ' shift', 'shiftRight']],
  ['ctrl', ['ctrl', 'ctrl', 'ctrlLeft']], ['win', ['win', 'win', 'meta']], ['alt', ['alt', 'alt', 'altLeft']], [' ', [' ', ' ']], [' alt', [' alt', ' alt', 'altRight']], ['&#5176', ['&#5176', '&#5176', 'arrowleft']], ['&#5167', ['&#5167', '&#5167', 'arrowdown']], ['&#5171', ['&#5171', '&#5171', 'arrowRight']], [' ctrl', [' ctrl', ' ctrl', 'ctrlRight']],
]);

let langEn = 0;

// add basic elements on page

const keysValues = Array.from(keys);
function addElements() {
  wrapper.className = 'wrapper';
  container.className = 'container';
  keyboard.className = 'keyboard';
  keyboardTitle.className = 'keyboard__title';
  keyboardTitle.innerHTML = 'Virtual Keyboard';
  keyboardBox.className = 'keyboard__box';
  textarea.className = 'keyboard__box-text';
  keyboardContent.className = 'keyboard__content';
  keyboardRowFirst.className = 'keyboard__row';
  keyboardRowSecond.className = 'keyboard__row';
  keyboardRowThird.className = 'keyboard__row';
  keyboardRowFourth.className = 'keyboard__row';
  keyboardRowFifth.className = 'keyboard__row';
  keyboardInfo.className = 'keyboard__info';
  keyboardInfoTextLang.className = 'keyboard__info-text';
  keyboardInfoTextLang.innerHTML = 'Switch languages: left shift + left alt';
  keyboardInfoTextWin.className = 'keyboard__info-text';
  keyboardInfoTextWin.innerHTML = 'Keyboard for Windows';

  document.body.append(wrapper);
  document.querySelector('.wrapper').append(container);
  document.querySelector('.container').append(keyboard);
  document.querySelector('.keyboard').append(keyboardTitle);
  document.querySelector('.keyboard').append(keyboardBox);
  document.querySelector('.keyboard').append(keyboardContent);
  document.querySelector('.keyboard__box').append(textarea);

  document.querySelector('.keyboard__content').append(keyboardRowFirst);
  for (let i = 0; i < 14; i += 1) {
    const key = document.createElement('div');
    key.className = 'key';
    key.innerHTML = keysValues[i][1][langEn];
    keyboardRowFirst.append(key);
    if (i === 13) {
      key.className = 'key key-backspace';
    }
    if (i === 0) {
      key.className = 'key capital-letter';
    }
    if (i > 0 && i < 13) {
      key.className = 'key key-symbol';
    }
  }

  document.querySelector('.keyboard__content').append(keyboardRowSecond);
  for (let i = 14; i < 29; i += 1) {
    const key = document.createElement('div');
    key.className = 'key capital-letter';
    key.innerHTML = keysValues[i][1][langEn];
    keyboardRowSecond.append(key);
    if (i === 14) {
      key.className = 'key key-tab';
    }
    if (i === 28) {
      key.className = 'key key-del';
    }
  }
  
  document.querySelector('.keyboard__content').append(keyboardRowThird);
  for (let i = 29; i < 42; i += 1) {
    const key = document.createElement('div');
    key.className = 'key capital-letter';
    key.innerHTML = keysValues[i][1][langEn];
    keyboardRowThird.append(key);
    if (i === 29) {
      key.className = 'key key-caps';
    }
    if (i === 41) {
      key.className = 'key key-enter';
    }
  }  

  document.querySelector('.keyboard__content').append(keyboardRowFourth);
  for (let i = 42; i < 55; i += 1) {
    const key = document.createElement('div');
    key.className = 'key capital-letter';
    key.innerHTML = keysValues[i][1][langEn];
    keyboardRowFourth.append(key);
    if (i === 42) {
      key.className = 'key key-shift';
    }
    if (i === 54) {
      key.className = 'key key-shift';
    }
    if (i === 52) {
      key.className = 'key key-symbol';
    }
    if (i === 51) {
      key.className = 'key key-symbol';
    }
    if (i === 50) {
      key.className = 'key key-symbol';
    }
  }  

  document.querySelector('.keyboard__content').append(keyboardRowFifth);
  for (let i = 55; i < 64; i += 1) {
    const key = document.createElement('div');
    key.className = 'key';
    key.innerHTML = keysValues[i][1][langEn];
    keyboardRowFifth.append(key);
    if (i === 55) {
      key.className = 'key key-ctrl';
    }
    
    if (i === 56) {
      key.className = 'key key-win';
    }
    if (i === 57) {
      key.className = 'key key-alt';
    }
    if (i === 58 ) {
      key.className = 'key key-space';
    }
    if (i === 59) {
      key.className = 'key key-alt';
    }
    if (i === 60) {
      key.className = 'key key-left';
    }
    if (i === 61) {
      key.className = 'key key-down';
    }
    if (i === 62) {
      key.className = 'key key-right';
    }
    if (i === 63) {
      key.className = 'key key-ctrl';
    }
  }  

  document.querySelector('.keyboard').append(keyboardInfo);
  document.querySelector('.keyboard__info').prepend(keyboardInfoTextLang);
  document.querySelector('.keyboard__info').append(keyboardInfoTextWin);
}
addElements();

const arraySymbols = document.querySelectorAll('.key-symbol');
const keysArray = document.querySelectorAll('.key');

// implement text printing in textarea 

class Foc {
  constructor(field) {
    this.field = field;
  }
  textFoc() {
    this.field.focus();
  }
}

const focus = new Foc(textarea);
focus.textFoc();

keyboardContent.addEventListener('click', (e) => {
  if (e.target.classList.contains('key')) {
    if (e.target.innerHTML === 'backspace') {
      textarea.value = textarea.value.slice(0, -1);
    } else if (e.target.innerHTML === 'del') {
      textarea.value = textarea.value.slice(0, -1);
    } else if (e.target.innerHTML === 'tab') {
      textarea.value += '    ';
    } else if (e.target.innerHTML === 'enter') {
      textarea.value += '\n';
    } else if (e.target.innerHTML === 'alt' || e.target.innerHTML === 'alt' || e.target.innerHTML === 'shift' || e.target.innerHTML === 'shift' || e.target.innerHTML === 'caps lock' || e.target.innerHTML === 'ctrl' || e.target.innerHTML === 'ctrl' || e.target.innerHTML === 'win' || e.target.innerHTML === 'shift') {
      textarea.value += '';
    } else {
      textarea.value += e.target.innerHTML;
    }
  }
});

textarea.addEventListener('keydown', (e) => {
  keysArray.forEach((item, index) => {
    if (e.key.toUpperCase() === item.innerHTML.toUpperCase()) {
      if (item.innerHTML === 'backspace') {
        e.preventDefault();
        textarea.value = textarea.value.slice(0, -1);
      } else if (item.innerHTML === 'del') {
        e.preventDefault();
        textarea.value = textarea.value.slice(0, -1);
      } else if (item.innerHTML === 'tab') {
        e.preventDefault();
        textarea.value += '    ';
      } else if (item.innerHTML === 'enter') {
        e.preventDefault();
        textarea.value += '\n';
      } else if (item.innerHTML === 'alt' || item.innerHTML === 'alt' || item.innerHTML === 'shift' || item.innerHTML === 'caps lock' || item.innerHTML === 'Ctrl' || item.innerHTML === 'ctrl' || item.innerHTML === 'win' || item.innerHTML === 'shift') {
        textarea.value += '';
      } else {
        e.preventDefault();
        e.currentTarget.value += item.innerHTML;
      }
    } else if (e.key.toUpperCase() === keysValues[index][1][0].toUpperCase()) {
      if (item.innerHTML === 'backspace') {
        e.preventDefault();
        textarea.value = textarea.value.slice(0, -1);
      } else if (item.innerHTML === 'del') {
        e.preventDefault();
        textarea.value = textarea.value.slice(0, -1);
      } else if (item.innerHTML === 'tab') {
        e.preventDefault();
        textarea.value += '    ';
      } else if (item.innerHTML === 'enter') {
        e.preventDefault();
        textarea.value += '\n';
      } else if (item.innerHTML === 'alt' || item.innerHTML === 'alt' || item.innerHTML === 'shift' || item.innerHTML === 'CapsLock' || item.innerHTML === 'ctrl' || item.innerHTML === 'ctrl' || item.innerHTML === 'win' || item.innerHTML === 'shift') {
        textarea.value += '';
      } else {
        e.preventDefault();
        e.currentTarget.value += item.innerHTML;
      }
    } else if (e.key.toUpperCase() === keysValues[index][1][1].toUpperCase()) {
      if (item.innerHTML === 'backspace') {
        e.preventDefault();
        textarea.value = textarea.value.slice(0, -1);
      } else if (item.innerHTML === 'del') {
        e.preventDefault();
        textarea.value = textarea.value.slice(0, -1);
      } else if (item.innerHTML === 'tab') {
        e.preventDefault();
        textarea.value += '    ';
      } else if (item.innerHTML === 'enter') {
        e.preventDefault();
        textarea.value += '\n';
      } else if (item.innerHTML === 'alt' || item.innerHTML === 'alt' || item.innerHTML === 'shift' || item.innerHTML === 'caps lock' || item.innerHTML === 'ctrl' || item.innerHTML === 'ctrl' || item.innerHTML === 'win' || item.innerHTML === 'shift') {
        textarea.value += '';
      } else {
        e.preventDefault();
        e.currentTarget.value += item.innerHTML;
      }
    } else if (e.key === keysValues[index][1][2]) {
      if (item.innerHTML === 'backspace') {
        e.preventDefault();
        textarea.value = textarea.value.slice(0, -1);
      } else if (item.innerHTML === 'del') {
        e.preventDefault();
        textarea.value = textarea.value.slice(0, -1);
      } else if (item.innerHTML === 'tab') {
        e.preventDefault();
        textarea.value += '    ';
      } else if (item.innerHTML === 'enter') {
        e.preventDefault();
        textarea.value += '\n';
      } else if (item.innerHTML === 'alt' || item.innerHTML === 'alt' || item.innerHTML === 'shift' || item.innerHTML === 'caps lock' || item.innerHTML === 'ctrl' || item.innerHTML === 'ctrl' || item.innerHTML === 'win' || item.innerHTML === 'shift') {
        textarea.value += '';
      } else {
        e.preventDefault();
        e.currentTarget.value += item.innerHTML;
      }
    }
  });
});

//  implement animation on shift click
document.addEventListener('keydown', (ev) => {
  if (ev.key === 'Shift') {
    arraySymbols.forEach((item, index) => {
      item.innerHTML = keysValues[index + 1][1][2];
    });
  }
});

document.addEventListener('keyup', (evn) => {
  if (evn.key === 'Shift') {
    arraySymbols.forEach((item, index) => {
      item.innerHTML = keysValues[index + 1][1][1];
    });
  }
});

// implement animation when pressing the keyboard

document.addEventListener('keyup', (e) => {
  keysArray.forEach((item, index) => {
    function keyAnimation() {
      item.classList.remove('animate-keyboard');
    }
    if (e.code === keysValues[index][1][2] || e.key === keysValues[index][1][2]) {
      item.classList.add('animate-keyboard');
      item.addEventListener('animationend', keyAnimation, false);
    } else if (e.key.toUpperCase() === item.innerHTML.toUpperCase()) {
      item.classList.add('animate-keyboard');
      item.addEventListener('animationend', keyAnimation, false);
    } else if (e.key.toUpperCase() === keysValues[index][1][0]) {
      item.classList.add('animate-keyboard');
      item.addEventListener('animationend', keyAnimation, false);
    } else if (e.key.toUpperCase() === keysValues[index][1][1].toUpperCase()) {
      item.classList.add('animate-keyboard');
      item.addEventListener('animationend', keyAnimation, false);
    }
  });
});

document.addEventListener('keydown', (e) => {
  keysArray.forEach((item, index) => {
    if (e.code === keysValues[index][1][2]) {
      item.style.backgroundColor = 'yellow';
    } else if (e.key.toUpperCase() === item.innerHTML.toUpperCase()) {
      item.style.backgroundColor = 'yellow';
    } else if (e.key.toUpperCase() === keysValues[index][1][0]) {
      item.style.backgroundColor = 'yellow';
    } else if (e.key.toUpperCase() === keysValues[index][1][1].toUpperCase()) {
      item.style.backgroundColor = 'yellow';
    }
  });
});

document.addEventListener('keyup', (e) => {
  keysArray.forEach((item, index) => {
    if (e.code === keysValues[index][1][2]) {
      item.style.backgroundColor = '#FFFFFF';
    } else if (e.key.toUpperCase() === item.innerHTML.toUpperCase()) {
      item.style.backgroundColor = '##FFFFFF';
    } else if (e.key.toUpperCase() === keysValues[index][1][0]) {
      item.style.backgroundColor = '#FFFFFF';
    } else if (e.key.toUpperCase() === keysValues[index][1][1].toUpperCase()) {
      item.style.backgroundColor = '#FFFFFF';
    }
  });
});

// implement animation on mouse click
document.addEventListener('click', (e) => {
  function keyAnimation() {
    e.target.classList.remove('animate-keyboard');
  }
  if (e.target.classList.contains('key')) {
    e.target.classList.add('animate-keyboard');
    e.target.addEventListener('animationend', keyAnimation, false);
  }
});

document.addEventListener('mousedown', (e) => {
  if (e.target.classList.contains('key')) {
    e.target.style.background = 'yellow';
  }
});

document.addEventListener('mouseup', (e) => {
  if (e.target.classList.contains('key')) {
    e.target.style.backgroundColor = '#FFFFFF';
  }
});
