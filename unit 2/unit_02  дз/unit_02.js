// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
let a = 7;
let b = 9;
console.log(a * b);

// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.
// document.querySelector('.out-2').textContent =
let c = 7;
let d = 9;
document.querySelector('.out-2').textContent = c / d;

// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.
// document.querySelector('.out-3').textContent =
let e = 3;
let f = 5;
document.querySelector('.out-3').textContent = e + f;

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.
// document.querySelector('.out-4').textContent =
let e1 = '3';
let f1 = 5;
document.querySelector('.out-4').textContent = e1 + f1; // сработала конкатенация оба значения прочитало как строки и соеденило

// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.

// document.querySelector('.out-5').textContent =

e2 = 3;
f2 = 0;
document.querySelector('.out-5').textContent = e2 / f2;

// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.

// document.querySelector('.out-6').textContent =

e3 = 3;
f3 = 'Hello';
document.querySelector('.out-6').textContent = e3 + f3;

// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.

// document.querySelector('.out-7').textContent =
e4 = 3;
f4 = 'Hello';
document.querySelector('.out-7').textContent = e4 * f4;

// Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.
let input8 = document.querySelector('.input8');
document.querySelector('.b-8').onclick = t8;

function t8() {
    let b8 = input8.value;
    console.log(b8);
}

// Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу,  что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.
let input9 = document.querySelector('.i-9');
let div9 = document.querySelector('.out-9');
document.querySelector('.b-9').onclick = t9;

function t9() {
    let b9 = input9.value;
    div9.innerHTML = b9;
}

// Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.
let input10 = document.querySelector('.i-10');
let div10 = document.querySelector('.out-10');
document.querySelector('.b-10').onclick = t10;

function t10() {
    let b10 = +input10.value;
    div10.innerHTML = b10 * 10;
}

// Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу в .out-11 число, которое ввел пользователь и к нему добавленное число 10.
let input11 = document.querySelector('.i-11');
let div11 = document.querySelector('.out-11');
document.querySelector('.b-11').onclick = t11;

function t11() {
    let b11 = +input11.value;
    let a11 = 10;
    div11.innerHTML = b11 + a11;
}

// Task 12.
// Создайте два input (i-12_1 и i-12_2) и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в .out-12 строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.
let in12_1 = document.querySelector('.i-12_1');
let in12_2 = document.querySelector('.i-12_2');
let div12 = document.querySelector('.out-12');
document.querySelector('.b-12').onclick = t12;

function t12() {
    let a12 = in12_1.value;
    let b12 = in12_2.value;
    div12.innerHTML = 'Hello' + ' ' + a12 + ' ' + b12;
}

// Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу в .out-13.
let in13_1 = document.querySelector('.i-13_1');
let in13_2 = document.querySelector('.i-13_2');
let div13 = document.querySelector('.out-13');
document.querySelector('.b-13').onclick = t13;

function t13() {
    let a13 = +in13_1.value;
    let b13 = +in13_2.value;
    div13.innerHTML = a13 + b13;
}

// Task 14.
// Создайте input .i-14 и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.

// document.querySelector('.i-14').value =

let in14 = document.querySelector('.i-14');
document.querySelector('.b-14').onclick = t14;

function t14() {
    in14.value = 'Hello';
}

// Task 15.
// Создайте input i-15 и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.

let y = document.querySelector('.i-15');
y.style.border = '2px solid red'; // получили красную рамку инпута в 2 пикселя

// Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел по нажатию кнопки b-16
let in16_1 = document.querySelector('.i-16-1');
let in16_2 = document.querySelector('.i-16-2');
let div16 = document.querySelector('.out-16');
document.querySelector('.b-16').onclick = t16;
function t16() {
    let a16 = +in16_1.value;
    let b16 = +in16_2.value;
    div16.innerHTML = a16 + b16;
}

// Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в out-17. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
let in17 = document.querySelector('.i-17');
div17 = document.querySelector('.out-17');
document.querySelector('.b-17').onclick = t17;
function t17() {
    let t = in17.value;
    t = parseInt(t);
    div17.innerHTML = t;
}

// Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
let in18 = document.querySelector('.i-18');
div18 = document.querySelector('.out-18');

document.querySelector('.b-18').onclick = t18;

function t18() {
    let t = in18.value;
    t = parseFloat(t);
    div18.innerHTML = t;
}

// Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!
let in19_1 = document.querySelector('.i-19-1');
let in19_2 = document.querySelector('.i-19-2');
let div19 = document.querySelector('.out-19');

document.querySelector('.b-19').onclick = t19;

function t19() {
    let a19 = +in19_1.value;
    let b19 = +in19_2.value;
    div19.innerHTML = a19 + b19;
}

// Task 20
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.
let in20_1 = document.querySelector('.i-20-1');
let in20_2 = document.querySelector('.i-20-2');
let in20_3 = document.querySelector('.i-20-3');
let in20_4 = document.querySelector('.i-20-4');
div20 = document.querySelector('.out-20');

document.querySelector('.b-20').onclick = t20;

function t20() {
    let a20 = in20_1.value;
    let b20 = in20_2.value;
    let c20 = +in20_3.value;
    let d20 = in20_4.value;

    if (c20 == 0) {
        f20 = 'лет';
    }
    if (
        (c20 > 1 && c20 < 5) ||
        (c20 > 21 && c20 < 25) ||
        (c20 > 31 && c20 < 35) ||
        (c20 > 41 && c20 < 45) ||
        (c20 > 51 && c20 < 55) ||
        (c20 > 61 && c20 < 65) ||
        (c20 > 71 && c20 < 75) ||
        (c20 > 81 && c20 < 85) ||
        (c20 > 91 && c20 < 95)
    ) {
        f20 = 'года';
    }
    if (
        (c20 >= 5 && c20 < 21) ||
        (c20 >= 25 && c20 < 31) ||
        (c20 >= 35 && c20 < 41) ||
        (c20 >= 45 && c20 < 51) ||
        (c20 >= 55 && c20 < 61) ||
        (c20 >= 65 && c20 < 71) ||
        (c20 >= 75 && c20 < 81) ||
        (c20 >= 85 && c20 < 91) ||
        (c20 >= 95 && c20 < 101)
    ) {
        f20 = 'лет';
    }
    if (
        c20 == 1 ||
        c20 == 21 ||
        c20 == 31 ||
        c20 == 41 ||
        c20 == 51 ||
        c20 == 61 ||
        c20 == 71 ||
        c20 == 81 ||
        c20 == 91 ||
        c20 == 101
    ) {
        f20 = 'год';
    } else {
        f20 = 'лет';
    }

    div20.innerHTML =
        'Уважаемый' +
        ' ' +
        a20 +
        ' ' +
        b20 +
        ',' +
        ' ' +
        'ваш возраст' +
        ' ' +
        c20 +
        ' ' +
        f20 +
        ',' +
        ' ' +
        'по професии вы' +
        ' ' +
        d20 +
        '.';
}
let a = 0;
