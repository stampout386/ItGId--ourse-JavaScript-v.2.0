//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
//     1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.

let div1 = document.querySelector('.out-1');
document.querySelector('.b-1').onclick = t1;
function t1() {
    let out1 = '';
    let k = 1;
    while (k < 51 ){
       out1+= k + ' ';
       k++;
    }
    
   div1.innerHTML = out1;
}




//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
//     2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла  while.

let div2 = document.querySelector('.out-2');
let out2 = '';
document.querySelector('.b-2').onclick = t2;
function t2() {
    
    let k = 2;
     while(k < 123){
       out2 += k+' ';
       k = k+2;
     }
   div2.innerHTML = out2;
}



//  Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
//     25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла  while.

let div3 = document.querySelector('.out-3');
let out3 = '';
document.querySelector('.b-3').onclick = t3;
function t3() {
    let k = 25;
     while(k > 6){
       out3 += k+' ';
       k--;
     }
   div3.innerHTML = out3;
}



//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
//     77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла  while.

let div4 = document.querySelector('.out-4');
document.querySelector('.b-4').onclick = t4;
let out4 = '';
function t4() {
    let k = 77;
    while (k > 34) {
        out4+= k+'_';
        k= k-3;
    }
    div4.innerHTML = out4;
}




//  Task 5
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
//     1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла  while.

let div5 = document.querySelector('.out-5');
let out5 = '';
document.querySelector('.b-5').onclick = t5;
function t5() {
   let k = 1 ; 
   while (k < 18) {
       if (k%2 == 0){
           out5+= k+'_**';
           k++;
       } else{
           out5+= k+'_*';
           k++
       }   
   }
   div5.innerHTML = out5;
}




//  Task 6
// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
// ******
// ******
// ******
// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br.
// Количество строк (итераций, повторений) цикла  while вводит пользователь в i-6.
let i6 = document.querySelector('.i-6');
let div6 = document.querySelector('.out-6');
let out6 = '';
document.querySelector('.b-6').onclick = t6;
function t6() {
    let input = i6.value;
    let k = 0 ;
    while (k < input) {
        out6+= '******<br>';
        k++;
    }
    div6.innerHTML = out6;
}




//  Task 7
// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки b-7 должна запускаться функция f7, которая выводит в out-7 числа от введенного пользователем до нуля включительно.
// Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4 3 2 1
// Задача решается с помощью цикла  while.
let i7 = document.querySelector('.i-7');
let div7 = document.querySelector('.out-7');
document.querySelector('.b-7').onclick = t7;
let out7 = '';
function t7() {
    let k = i7.value;
    while (k > -1) {
        out7 += k+' ';
        k--;
    }
    div7.innerHTML = out7;
}




//  Task 8
// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки b-8  должна запускаться функция f8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// Задача решается с помощью цикла  while.
let i81 = document.querySelector('.i-81');
let i82 = document.querySelector('.i-82');
let div8 = document.querySelector('.out-8');
let out8 ='';
document.querySelector('.b-8').onclick = t8;
function t8() {
    let a = +i81.value;
    let b = +i82.value;
    let c = b+1;
    
    while (a < c) {
        out8 += a+' ';
        a++
    }
    div8.innerHTML = out8;
}




//  Task 9
// Есть input i-91 и i-92 куда пользователь может ввести числа.
// По нажатию кнопки b-9 должна запускаться функция f9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл  while.
let i91 = document.querySelector('.i-91');
let i92 = document.querySelector('.i-92');
let div9 = document.querySelector('.out-9');

document.querySelector('.b-9').onclick = t9;
function t9() {
  let out9 = '';
  let a = +i91.value;
  let b = +i92.value;
  if (a < b) {
    let c = a;
    let d = b;
    while ( c < d+1) {
        out9 += c+' ';
        c++;
    } 
}

     if ( a > b) {
        let c = b;
        let d = a;
        while (c < d+1) {
            out9 += c+' ';
            c++;
    }
}
  
            div9.innerHTML = out9;
}




//  Task 10
// Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно.
// Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).

let div10 = document.querySelector('.out-10');
let out10 = '';
document.querySelector('.b-10').onclick = t10;
function t10() {
    let k = 1950;
    while (k < 2001) {
        out10 += k+' ';
        k = k + 2;
    }
    div10.innerHTML = out10;
}



//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// вывести в out-11 содержимое каждого блока. Разделитель - пробел.
//     В результате должно получиться так:
//     one 3 4 two

let div11 = document.querySelector('.out-11');
let out11 = '';
document.querySelector('.b-11').onclick = t11;
function t11() {
let div =  document.querySelectorAll('.div-11')
let k = 0 ;
while (k < div.length) {
    out11 += div[k].innerHTML+' ';
    k++;
    
}
div11.innerHTML = out11;

}



//  Task 12
// Кнопка b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’

document.querySelector('.b-12').onclick = t12;
function t12() {
    let div = document.querySelectorAll('.div-12');
    let k = 0;
    while (k< div.length) {
        div[k].style.background = 'orange';
        k++;
    }
}



//  Task 13
// Кнопка b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...
document.querySelector('.b-13').onclick = t13;
function t13() {
    let input = document.querySelectorAll('.i-13');
    let k = 0;
    while (k<input.length) {
        input[k].value = k+1;
        k++;
    }
}



//  Task 14
// Кнопка b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.

let div14 = document.querySelector('.out-14');
document.querySelector('.b-14').onclick = t14;
function t14() {
    let input = document.querySelectorAll('.i-14');
    let k = 0 ;
    while (k < input.length) {
        if (input[k].checked) {
            div14.innerHTML = input[k].value;
            
        }
        k++;
    }

}



//  Task 15
// Кнопка b-15 запускает функцию t15  Функция должна выводить следующую последовательность в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл  while. Разделитель пробел.
let div15 = document.querySelector('.out-15');
let out15 = '';
document.querySelector('.b-15').onclick = t15;
function t15() {
    let k = 0 ;
    while (k<11) {
        out15+= (10-k)+' '+ k +' ';
        k++;
    }
    div15.innerHTML  = out15;
}


