// Task 1
// При нажатии кнопки b-1 срабатывает функция f1. Функция должна прочитать содержимое i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в out-1.
let i1 = document.querySelector('.i-1');
let div1 = document.querySelector('.out-1')
document.querySelector('.b-1').onclick = f1;

function f1(){
    let a1 = i1.value;
    let div1 = document.querySelector('.out-1')
    if (a1 == 4) {
        div1.innerHTML = 'true';
    } else {
        div1.innerHTML ='false';
    }

}


// Task 2
// Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в out-2 число, которое больше. Вариант равенства переменных не рассматриваем.

let a21 = 32;
let a22 = 45;
let div2 = document.querySelector('.out-2');
document.querySelector('.b-2').onclick = f2;
function f2(){
    if (a21>a22) {
        div2.innerHTML = a21;
    } else {
        div2.innerHTML = a22;
    }

}


// Task 3
// Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает функция f3. Функция должна вычитать содержимое i-31 и i-32 в переменные и сравнить их, вывести в  out-3 большее число.
//     Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.
let i31 = document.querySelector('.i-31');
let i32 = document.querySelector('.i-32');
let div3 = document.querySelector('.out-3');
document.querySelector('.b-3').onclick = f3;
function f3(){
    let a3 = +i31.value;
    let b3 = +i32.value;
    if( a3 > b3){
        div3.innerHTML = a3;
    } else{
        div3.innerHTML = b3;
    }

}

// Task 4. Создайте на странице input[type=number] с классом i-4, куда пользователь может ввести год своего рождения. Есть кнопка b-4 которая запускает функцию f4. Функция должна вывести в  .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.
let i4 = document.querySelector('.i-4');
let div4 = document.querySelector('.out-4');

document.querySelector('.b-4').onclick = f4;
function f4(){
 let a4 = +i4.value;
 let b4 = 2020 - a4;
 if ( b4 >= 18) {
     div4.innerHTML = 1;
 } else {
     div4.innerHTML = 0;
 }
}


// Task 5. Создайте на странице input[type=number] с классом i-5, куда пользователь может ввести число. Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в  .out-5 символ m если число меньше нуля, 0 если число равно нулю и 1 если больше.
let i5 = document.querySelector('.i-5');
let div5 = document.querySelector('.out-5');

document.querySelector('.b-5').onclick = f5;
function f5(){
    let a5 = +i5.value;
    if (a5 < 0 ) {
        div5.innerHTML = 'm';
    } else if (a5 == 0 ) {
        div5.innerHTML = 0;
    } else if(a5 > 0){
       div5.innerHTML = 1;
    }

}



// Task 6. Создайте на странице input[type=number] с классом i-6, куда пользователь может ввести число. Есть кнопка b-6 которая запускает функцию f6. Функция должна вывести в  .out-6  слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). Если остаток равен нулю  - четное, нет - нечетное.
let i6 = document.querySelector('.i-6');
let div6 = document.querySelector('.out-6')
document.querySelector('.b-6').onclick = f6;
function f6(){
 let a6 = +i6.value;
 let b6 = a6 % 2;
 if (b6 == 0 ) {
     div6.innerHTML = 'even';
 } else {
     div6.innerHTML = 'odd';
 }
}


// Task 7.
// Даны 2 input - i-71 и i-72, оба - input[type=number]. При нажатии кнопки b-7 срабатывает функция f7. Функция должна число из i-71 возвести в степень i-72, вывести результат в  out-7. Для возведения в степень можно использовать **, или Math.pow.
let i71 = document.querySelector('.i-71');
let i72 = document.querySelector('.i-72');
let div7 = document.querySelector('.out-7');

document.querySelector('.b-7').onclick = f7;
function f7(){
    let a7 = +i71.value;
    let b7 = +i72.value;
    //let c7 = a7**b7;
    div7.innerHTML = Math.pow(a7,b7); // || div7.innerHTML = c7 ;
}

// Task 8.
// Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее  нажатии срабатывает функция f8. Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с ‘1’, ‘2’, ‘3’. И если число выбрано - 1, то вывести в out-8 строку one, если 2 - two, если 3 - three.
let s8 = document.querySelector('.s-8');
let div8 = document.querySelector('.out-8');

document.querySelector('.b-8').onclick = f8;
function f8(){
    let num = +s8.value;
 switch (num) {
     case 1:
         div8.innerHTML = 'one';
         break;
     case 2:
         div8.innerHTML = 'two';
         break;
     case 3:
         div8.innerHTML = 'tree';
         break;
    }
 }



// Task 9
//     Создайте на странице input[type=number] с классом i-9, куда пользователь может ввести номер квартиры. Есть кнопка b-9 которая запускает функцию f9. Функция должна вывести в  .out-9 номер подъезда, в котором находится квартира.
//      если от 1 до 32 - то вывести цифру 1
//     если от 33 до 43 - то вывести 2
//     если от 44 до 64 - то 3.
//     В противном случае, вывести 0.

let i9 = document.querySelector('.i-9');
let div9 = document.querySelector('.out-9');

document.querySelector('.b-9').onclick = f9;
function f9(){
    let a9 = +i9.value;
    if ( a9 >=1 && a9 <=32) {
        div9.innerHTML = 1;
    } else if (a9 > 32 && a9 <=43) {
        div9.innerHTML = 2;
    } else if ( a9 > 43 && a9 <=64) {
        div9.innerHTML = 3;
    } else {
        div9.innerHTML = 0;
    }

}



// Task 10
// Дан select s-100. По нажатию кнопки, выведите value выбранного option в out-10.
let s10 = document.querySelector('.s-100');
let div10 = document.querySelector('.out-10');

document.querySelector('.b-10').onclick = f10;
function f10(){
  let a10 = s10.value;

  switch (a10) {
    case "6":
        div10.innerHTML = '6';
        break;
    case "7":
        div10.innerHTML = '7';
        break;
    case "11":
        div10.innerHTML = '11';
        break;
    case "9":
            div10.innerHTML = '9';
            break;
 }
}



// Task 11
// Дан select s-110. По изменению состояния select (событие onchange) выведите value выбранного option в out-11.
let s11 = document.querySelector('.s-110');
let div11 = document.querySelector('.out-11');
document.querySelector('.s-110').onchange = f11;
function f11(){
  let a11 = s11.value;
  switch (a11) {
    case "6":
        div11.innerHTML = '6';
        break;
    case "7":
        div11.innerHTML = '7';
        break;
    case "11":
        div11.innerHTML = '11';
        break;
    case "9":
        div11.innerHTML = '9';
        break;
 }
}

// Task 12
// Дан input i-120. По нажатию кнопки получите значение из input  в переменную, а затем выведите в out-12 typeof полученной переменной. Typeof позволяет определить тип данных. Обратите внимание, данная задача уже решена, нужно убрать комментарии и изучить работу.

let i120 = document.querySelector('.i-120');

document.querySelector('.b-12').onclick = f12;
function f12(){
    let v = i120.value;
    document.querySelector('.out-12').innerHTML = (typeof v);

}   // typeof выводит строку, указывающую тип 



// Task 13
// Дан input i-130. В отличие от предыдущего задания - input type number. По нажатию кнопки получите значение из input  в переменную, а затем выведите в out-13 typeof полученной переменной. Typeof позволяет определить тип данных. Если вы правильно все сделали - то удивительно, но тип данных будет string! Подумайте почему так?
let i130 = document.querySelector('.i-130');

document.querySelector('.b-13').onclick = f13;

function f13(){
    let a13 = i130.value;
    document.querySelector('.out-13').innerHTML = (typeof a13);
}  // потому что импут все равно принимает строку , что бы принимал число перед i130.value надо поставить плюс




// Task 14
// Дан input i-141 и input-142, type=number.  Дан select s-143, который содержит две операции - +, -, *, / . Дана кнопка b-14, при нажатии на которую срабатывает функция f14. Функция выводит в out-14 результат операций выбранной в 3-м select к числам введенным в первом и втором input. Например выбрано 1 13 +, нужно вывести результат операции 1+13 т.е.  14.
let i141 = document.querySelector('.i-141');
let i142 = document.querySelector('.i-142');
let s143 = document.querySelector('.s-143');
let div14 = document.querySelector('.out-14');

document.querySelector('.b-14').onclick = f14;
function f14(){
  let a14 = +i141.value;
  let b14 = +i142.value;
  let s14 = s143.value;
  //let a141 = a14+b14;
//   let a142 = a14-b14;
//   let a143 = a14*b14;
//   let a144 = a14/b14;
  switch (s14) {
      case '+': 
        
        div14.innerHTML = a14+b14 ;
          break;
      case '-': 
        div14.innerHTML = a14-b14;
          break;    
      case '*':
        div14.innerHTML = a14*b14;
          break;
      case '/':
        div14.innerHTML = a14/b14;
  }
}


// Task     15
// Дан select s-151 и s-152, каждый из которых содержит 1 и 0.  Дан select s-153, который содержит две операции - && и || . Дана кнопка b-15, при нажатии на которую срабатывает функция f15. Функция выводит в out-15 результат логических операций выбранных в 3 select к числам выбранным в первом и втором select. Например выбрано 1 1 &&, нужно вывести результат операции 1&&1 т.е. 1 или 0.
let s151 = document.querySelector('.s-151');
let s152 = document.querySelector('.s-152');
let s153 = document.querySelector('.s-153');

let div15 = document.querySelector('.out-15');
document.querySelector('.b-15').onclick = f15;
function f15(){
 let a15 = s151.value;
 let b15 = s152.value;
 let c15 = s153.value;
 switch (c15) {
     case '&&':
         div15.innerHTML = a15&&b15;
         break;
     case '||':
         div15.innerHTML = a15||b15;
 }
}


