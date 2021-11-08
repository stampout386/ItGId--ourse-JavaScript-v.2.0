// Task 1
console.log("Михаил");

//task 2
console.log('02'); // как ввели так и осталось так как это строка
console.log(02); // ноль убрался так как это число 

//task 3 
console.log('Добро '+'пожаловать'+' на курс');

//task 4 
// alert(2019);

// task 5 
//alert(2019-200);

//task 6
document.getElementById('one').innerHTML = 'Hello world';

//task 7 
document.getElementById('two').innerHTML = 12*12;

//task 8 
document.querySelector('.one').innerHTML = 'Hello world';

//task 9 
document.querySelector('#sp').innerHTML = 'world'; // добавил span id=sp и обратился по айди

//task 10 
document.querySelector('.three').innerHTML = '<h3>Hello live</h3>';

//task 11
document.querySelector('.four').innerHTML += '<h4>оглавление</h4>'+ '<p>первый урок</p>';

//task 12
let a = document.querySelector('.five');
a.innerHTML = 3.1415; // дробные числа пишутся через точку

//task 13
let div7 = document.querySelector('.seven');
div7.innerHTML = '<img src="https://cdn4.iconfinder.com/data/icons/food-and-drink-flat-gradient/32/cone_ice_cream_food_drink_sweet-512.png" alt=""></img>';

//task 14
let z1 = 6;
let z2 = 3;
document.querySelector('.nine').innerHTML = z1*z2;

//task 15 
y1 = 6;
y2 = 3;
document.querySelector('.ten').innerHTML = y1/y2;

//task 16
x1 = 'Hello';
x2 = 5 ;
document.querySelector('.eleven').innerHTML = x1+x2; //  сплюсовало как две строки

//task 17 
let d1 = document.querySelector('.test-1');
console.log(d1); // в консоли получили html  код этого div : <div class="test-1"></div>

//task 18 
let d2 = document.querySelector('.test-2');
console.log(d2); // в консоли получили html  код этого div : <div class="test-2"></div>

d2 = 5;
console.log(d2); // в консоли получили измененную переменную d2 равную 5 

//task 19 
let divS3 = document.querySelector('.s3');
console.log(divS3);// в консоли  div s3
divS3 = document.querySelector('.s4');
console.log(divS3); // в консоли div s4 

//task 20 
// document.querySelector('body').innerHTML =''; 
// все тело стало пустым 

