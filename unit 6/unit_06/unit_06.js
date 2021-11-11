//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>
let div1 = document.querySelector('.out-1')
document.querySelector('.b-1').onclick = t1;
function t1() {
    let out1 = '';
    for (let i = 0; i < 3 ; i++) {
        for (let k = 0; k < 3; k++) {
            out1+= '*';
        }
        out1+='_';
    }
    div1.innerHTML= out1;
}



//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.</p>
let div2 = document.querySelector('.out-2');
document.querySelector('.b-2').onclick = t2;
function t2() {
    let out2 = '';
    for (let i= 0 ; i < 3; i++){
        out2+= (i+1)+'<br>';
        for (let k = 0; k < 1 ; k++) {
            out2+= '*_*_*_<br>';
            
        }
    }
     div2.innerHTML = out2;
}




//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.</p>
let div3 = document.querySelector('.out-3')
document.querySelector('.b-3').onclick = t3;
function t3() {
    let out3 = '';
    for (let i= 0 ; i < 4; i++){
        
        for (let k = 0; k < 1 ; k++) {
            out3+= '*_*_*_';
            
        }
        out3+='<br>';
    }
    div3.innerHTML = out3;
}



//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5
// </pre>
let div4 = document.querySelector('.out-4')
document.querySelector('.b-4').onclick = t4;
function t4() {
   let out4 = '';
        for (let i = 0; i < 3; i++) {
            out4 += (i+1)+'_';
            for (let k = 0; k < 5; k++) {
                out4 += (k+1)+' '; 
            }
            
        }
   div4.innerHTML = out4;
}




//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>
let div5 = document.querySelector('.out-5');
document.querySelector('.b-5').onclick = t5;
function t5() {
let out5 = '';
   for (let i = 0; i < 3; i++) {
       for (let k = 0; k < 6; k++) {
           if(k%2 == 0 ){
           out5 += 1 ;} else{
               out5 += 0;
           }
           
       }
       out5 += '<br>';
   }
   div5.innerHTML = out5;
}




//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>
let div6 = document.querySelector('.out-6');
document.querySelector('.b-6').onclick = t6;
function t6() {
   let out6= '';
   for (let i = 0; i < 3; i++) {
       for (let k = 0; k < 6; k++) {
          if (k == 0 || k == 4) {
              out6+= 1;
          } if (k == 1 || k == 3) {
              out6+= 0 ;
          } if (k == 2 || k == 5 ) { 
              out6+= 'x';
          }
           
       }
       out6 += '<br>'; 
   }
   div6.innerHTML = out6;
}




//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *
// **
// ***
// ****
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.</p>
let div7 = document.querySelector('.out-7');
document.querySelector('.b-7').onclick = t7;
function t7() {
    let out7 = '';
    for (let i = 1; i < 5; i++) {
        for (let k = 0; k < i; k++) {
            out7 +='*'; 
        }
        out7+='<br>';
    }
    div7.innerHTML = out7;
}




//  Task 8
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *****
// ****
// ***
// **
// *
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки. </p>
let div8 = document.querySelector('.out-8')
document.querySelector('.b-8').onclick = t8;
function t8() {
  let out8 = '';
  for (let i = 5; i > 0; i--) {
      for (let k = 0; k < i; k++) {
          out8 += '*';
          
      }
      out8 += '<br>';
  }
  div8.innerHTML = out8 ;
}




//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры</p>
let div9 = document.querySelector('.out-9');
document.querySelector('.b-9').onclick = t9;
function t9() {
    let out9 = '';
    for (let i = 1; i < 6; i++) {
        for (let k = 0; k < i ; k++) {
            out9 += (k+1)+' ';
        }
        out9 += '<br>';
    }
  div9.innerHTML = out9;
}


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 6.</p>
// <p>Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.</p>
let div10 = document.querySelector('.out-10');
document.querySelector('.b-10').onclick = t10;
function t10() {
    let out10 = '';
    for (let i = 0; i < 5; i++) {
        for (let k = 1; k < 11; k++) {
            if (i==0 && k < 10 ) {
                out10+= '0'+ k +' ';
            } else {
                out10 += (i*10)+k+' ';
            }
            
        }
        out10 += '<br>';
    }
    div10.innerHTML = out10;
}


