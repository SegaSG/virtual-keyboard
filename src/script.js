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
  ['ё', ['`', 'ё', '~']], ['1', ['1', '1', '!']], ['2', ['2', '2', '@']], ['3', ['3', '3', '#']], ['4', ['4', '4', '$']], ['5', ['5', '5', '%']], ['6', ['6', '6', '^']], ['7', ['7', '7', '&']], ['8', ['8', '8', '*']], ['9', ['9', '9', '(']], ['0', ['0', '0', ')']], ['-', ['-', '-', '_']], ['=', ['=', '=', '+']], ['backspace', ['backspace', 'backspace', 'backspace']],
  ['tab', ['tab', 'tab', 'tab']], ['й', ['q', 'й', 'q']], ['ц', ['w', 'ц', 'w']], ['у', ['e', 'у', 'e']], ['к', ['r', 'к', 'r']], ['е', ['t', 'е', 't']], ['н', ['y', 'н', 'y']], ['г', ['u', 'г', 'u']], ['ш', ['i', 'ш', 'i']], ['щ', ['o', 'щ', 'o']], ['з', ['p', 'з', 'p']], ['х', ['[', 'х', '{']], ['ъ', [']', 'ъ', '}']], ['\\', ['\\', '\\', '|']], ['del', ['del', 'del', 'del']],
  ['caps lock', ['caps lock', 'caps lock', 'caps lock']], ['ф', ['a', 'ф', 'a']], ['ы', ['s', 'ы', 's']], ['в', ['d', 'в', 'd']], ['а', ['f', 'а', 'f']], ['п', ['g', 'п', 'g']], ['р', ['h', 'р', 'h']], ['о', ['j', 'о', 'j']], ['л', ['k', 'л', 'k']], ['д', ['l', 'д', 'l']], ['ж', [';', 'ж', ':']], ['э', ["'", 'э', '"']], ['enter', ['enter', 'enter', 'enter']],
  ['shift', ['shift', 'shift', 'shift']], ['я', ['z', 'я', 'z']], ['ч', ['x', 'ч', 'x']], ['с', ['с', 'c', 'с']], ['м', ['v', 'м', 'v']], ['и', ['b', 'и', 'b']], ['т', ['n', 'т', 'n']], ['ь', ['m', 'ь', 'm']], ['б', [',', 'б', '<']], ['.', ['.', 'ю', '>']], ['/', ['/', '.', '?']], ['&#5169', ['&#5169', '&#5169', '&#5169']], [' shift', [' shift', ' shift', 'shift']],
  ['ctrl', ['ctrl', 'ctrl', 'ControlLeft']], ['win', ['win', 'win', 'meta']], ['alt', ['alt', 'alt', 'AltLeft']], [' ', [' ', ' ']], [' alt', [' alt', ' alt', 'AltRight']], ['&#5176', ['&#5176', '&#5176', '&#5176']], ['&#5167', ['&#5167', '&#5167', '&#5167']], ['&#5171', ['&#5171', '&#5171', '&#5171']], [' ctrl', [' ctrl', ' ctrl', 'ControlRight']],
]);

let langCur = 0;
if (localStorage.getItem('record')) {
  const lang = localStorage.getItem('record');
  langCur = lang;
}
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
  keyboardInfoTextLang.innerHTML = 'Switch languages: left ctrl + left alt';
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
    key.className = 'key key-symbol';
    key.innerHTML = keysValues[i][1][langCur];
    keyboardRowFirst.append(key);
    if (i === 13) {
      key.className = 'key key-backspace key-symbol';
    }
    if (i === 0) {
      key.className = 'key capital-letter key-symbol';
    }
    if (i > 0 && i < 13) {
      key.className = 'key key-symbol';
    }
  }

  document.querySelector('.keyboard__content').append(keyboardRowSecond);
  for (let i = 14; i < 29; i += 1) {
    const key = document.createElement('div');
    key.className = 'key capital-letter key-symbol';
    key.innerHTML = keysValues[i][1][langCur];
    keyboardRowSecond.append(key);
    if (i === 14) {
      key.className = 'key key-tab key-symbol';
    }
    if (i === 25) {
      key.className = 'key key-symbol';
    }
    if (i === 26) {
      key.className = 'key key-symbol';
    }
    if (i === 27) {
      key.className = 'key key-symbol';
    }
    if (i === 28) {
      key.className = 'key key-del key-symbol';
    }
  }

  document.querySelector('.keyboard__content').append(keyboardRowThird);
  for (let i = 29; i < 42; i += 1) {
    const key = document.createElement('div');
    key.className = 'key capital-letter key-symbol';
    key.innerHTML = keysValues[i][1][langCur];
    keyboardRowThird.append(key);
    if (i === 29) {
      key.className = 'key key-caps key-symbol';
    }
    if (i === 41) {
      key.className = 'key key-enter key-symbol';
    }
  }

  document.querySelector('.keyboard__content').append(keyboardRowFourth);
  for (let i = 42; i < 55; i += 1) {
    const key = document.createElement('div');
    key.className = 'key capital-letter key-symbol';
    key.innerHTML = keysValues[i][1][langCur];
    keyboardRowFourth.append(key);
    if (i === 42) {
      key.className = 'key key-shift key-symbol';
    }
    if (i === 50) {
      key.className = 'key capital-letter key-symbol';
    }
    if (i === 51) {
      key.className = 'key capital-letter key-symbol';
    }
    if (i === 52) {
      key.className = 'key key-symbol';
    }
    if (i === 54) {
      key.className = 'key key-shift key-symbol';
    }
  }

  document.querySelector('.keyboard__content').append(keyboardRowFifth);
  for (let i = 55; i < 64; i += 1) {
    const key = document.createElement('div');
    key.className = 'key';
    key.innerHTML = keysValues[i][1][langCur];
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
    if (i === 58) {
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
textarea.focus();
keyboardContent.addEventListener('click', (e) => {
  if (e.target.classList.contains('key')) {
    if (e.target.innerHTML === 'backspace') {
      textarea.value = textarea.value.slice(0, -1);
    } else if (e.target.innerHTML === 'del') {
      textarea.value = textarea.value.slice(textarea.value, 0);
    } else if (e.target.innerHTML === 'tab') {
      textarea.value += '    ';
    } else if (e.target.innerHTML === 'enter') {
      textarea.value += '\n';
    } else if (e.target.innerHTML === 'alt' || e.target.innerHTML === ' alt' || e.target.innerHTML === 'shift' || e.target.innerHTML === ' shift' || e.target.innerHTML === 'caps lock' || e.target.innerHTML === ' ctrl' || e.target.innerHTML === 'ctrl' || e.target.innerHTML === 'win' || e.target.innerHTML === ' shift') {
      textarea.value += '';
    } else {
      textarea.value += e.target.innerHTML;
    }
  }
});
textarea.focus();
textarea.addEventListener('keydown', (e) => {
  keysArray.forEach((item, index) => {
    if (e.key.toUpperCase() === item.innerHTML.toUpperCase()) {
      if (item.innerHTML === 'backspace') {
        e.preventDefault();
        textarea.value = textarea.value.slice(0, -1);
      } else if (item.innerHTML === 'del') {
        e.preventDefault();
        textarea.value = textarea.value.slice(textarea.value, 0);
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
        textarea.value = textarea.value.slice(textarea.value, 0);
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
        textarea.value = textarea.value.slice(textarea.value, 0);
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
        textarea.value = textarea.value.slice(textarea.value, 0);
      } else if (item.innerHTML === 'tab') {
        e.preventDefault();
        textarea.value += '    ';
      } else if (item.innerHTML === 'enter') {
        e.preventDefault();
        textarea.value += '\n';
      } else if (item.innerHTML === 'alt' || item.innerHTML === ' alt' || item.innerHTML === 'shift' || item.innerHTML === 'caps lock' || item.innerHTML === 'ctrl' || item.innerHTML === ' ctrl' || item.innerHTML === 'win' || item.innerHTML === ' shift') {
        textarea.value += '';
      } else {
        e.preventDefault();
        e.currentTarget.value += item.innerHTML;
      }
    }
  });
});

//  implement animation on shift click
document.addEventListener('keydown', (target) => {
  if (target.key === 'Shift') {
    arraySymbols.forEach((item, index) => {
      item.innerHTML = keysValues[index][1][2];
    });
  }
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'Shift') {
    arraySymbols.forEach((item, index) => {
      item.innerHTML = keysValues[index][1][1];
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
      item.style.background = '#FFFFFF';
    } else if (e.key.toUpperCase() === item.innerHTML.toUpperCase()) {
      item.style.background = '#FFFFFF';
    } else if (e.key.toUpperCase() === keysValues[index][1][0]) {
      item.style.background = '#FFFFFF';
    } else if (e.key.toUpperCase() === keysValues[index][1][1].toUpperCase()) {
      item.style.background = '#FFFFFF';
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
    e.target.style.backgroundColor = 'yellow';
  }
});

document.addEventListener('mouseup', (e) => {
  if (e.target.classList.contains('key')) {
    e.target.style.backgroundColor = '#FFFFFF';
  }
});

// implement animation on capslock click
const capitalLettersArray = document.querySelectorAll('.capital-letter');
document.addEventListener('keydown', (e) => {
  if (e.code === 'CapsLock') {
    capitalLettersArray.forEach((item) => {
      if (item.innerHTML !== item.innerHTML.toUpperCase()) {
        item.innerHTML = item.innerHTML.toUpperCase();
      } else {
        item.innerHTML = item.innerHTML.toLowerCase();
      }
    });
  }
});

keyboardContent.addEventListener('click', (e) => {
  if (e.target.innerHTML === 'caps lock') {
    capitalLettersArray.forEach((item) => {
      if (item.innerHTML !== item.innerHTML.toUpperCase()) {
        item.innerHTML = item.innerHTML.toUpperCase();
      } else {
        item.innerHTML = item.innerHTML.toLowerCase();
      }
    });
  }
});

// implement switch languages (en/ru)
function changeBtn() {
  keysArray.forEach((item, index) => {
    (item.innerHTML = keysValues[index][1][langCur]);
  });
}

document.onkeydown = function changeLang(event) {
  if (event.code === 'ControlLeft') {
    document.onkeyup = function showLang(target) {
      if (target.code === 'AltLeft') {
        if (langCur === 0 || langCur === null || langCur === '0') {
          langCur = 1;
        } else {
          langCur = 0;
        }
        localStorage.setItem('record', langCur);
        changeBtn();
      } else {
        document.onkeyup = null;
      }
    };
  }
};
