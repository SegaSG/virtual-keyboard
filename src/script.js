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