// // 1 task 2 block

// // let salaries = {
// //      John: 1000,
// //      Ann: 1600,
// //      Pete: 1300,
// //     month: 'December',
// //     currency: 'USD',
// //     isPayed: false
// //   }
// console.log(Window.screenX);

// let salaries = {
//     John: 1000,
//     Ann: 1600,
//     Pete: 1300,
//     Bob: NaN,
//     Peter: Infinity,
//     Ivan: -Infinity,
//     month: 'December',
//     currency: 'USD',
//     isPayed: false
//   };

// function sumSalary(obj) {
//     let sumPay = 0;
//     for (const key in obj) {
//         if (isFinite(obj[key])) {
//                sumPay += obj[key];
//         }
//     }
//     console.log(sumPay);
//     return sumPay;
// }

// sumSalary(salaries);

// console.log(isFinite(salaries.Peter));
// // function opp(obj) {
// //     let a = {};
// //     for (const key in obj) {
// //         if (typeof obj[key] === 'number'){
// //             a[key] = obj[key];
// //         }
// //     }
// //     console.log(a);
// //     let b = {};
// //     for (const key in a) {
// //         if (isNaN(a[key]) === false ){
// //              b[key] = a[key];
// //         }
// //     }
// //     console.log(b);
// // }

// // opp(salaries);


// // // задача 2 блок 2
// function isEmpty(obj) {
//     for (let key in obj){
//         return false;
//     }
//         return true;
//   }
  
//   let schedule = {};
  
//   alert( isEmpty(schedule) ); // true
  
//   schedule["8:30"] = "подъём";
  
//   alert( isEmpty(schedule) ); // false

  
// // // задача 3 блок 2

// let calculator = {
//     a: null,
//     b: null,
//     read(a, b) {
//        this.a = a;
//        this.b = b;
//     },
//     sum() {
//        return this.a + this.b;
//     },
//     mul() {
//        return this.a * this.b;
//     }

//   };
  
//   calculator.read(10394854, 1000000);
//   console.log(calculator.sum()); // 8
//   console.log(calculator.mul()); // 15
//   calculator.read(4, 6);
//   console.log(calculator.sum()); // 8
//   console.log(calculator.mul());


// 1 задача 3 модуль 

// let vasya = { name: 'Вася', age: 25 };
// let petya = { name: 'Петя', age: 30 };
// let masha = { name: 'Маша', age: 28 };

// let users = [ vasya, petya, masha ];

// function namify(users) {
  
//     return users.map(({name}) => name);

// }



// // namify(users);
//  names = namify(users); // ['Вася', 'Петя', 'Маша']
// console.log(names);


// // 2 задача 3 модуль 
// let bolt = [5,7,10,54,23,]

// function filterRange(arr, a, b) {
//     return arr.filter(item => (a <= item && item <= b));
// }


//  alert(filterRange(bolt, 6, 15));
//alert(fil);
// console.log(bolt);

// 3 задача 3 модуль 
// function camelize(str) {
//     let a = str.split('-');
//     for (let i = 1; i < a.length; i++) {
//         // a[i][0].toUpperCase();
//         console.log(a[i][0].toUpperCase());
        
//     }
// }

// camelize('background-color') == 'backgroundColor';
// camelize('list-style-image') == 'listStyleImage';
// camelize('-webkit-transition') == 'WebkitTransition';


// 4 задача 3 модуль 

// let user1 = {
//     "balance": "$1,825.65",
//     "picture": "https://placehold.it/32x32",
//     "age": 21,
//     "name": "Golden Branch",
//     "gender": "male",
//     "greeting": "Hello, Golden Branch! You have 7 unread messages.",
//     "favouriteFruit": "banana"
//   };

// let user2 = {
//     "balance": "$1,200.56",
//     "picture": "https://placehold.it/32x32",
//     "age": 19,
//     "name": "Popka Eblanov",
//     "gender": "male",
//     "greeting": "Hello, Golden Branch! You have 7 unread messages.",
//     "favouriteFruit": "banana"
//   }; 

//   let user3 = {
//     "balance": "$1,345.56",
//     "picture": "https://placehold.it/32x32",
//     "age": 23,
//     "name": "hui morzhov",
//     "gender": "male",
//     "greeting": "Hello, Golden Branch! You have 7 unread messages.",
//     "favouriteFruit": "banana"
//   }; 
// // Массив пользователей
// let users = [user1, user2, user3];

// function showSalary(users, age){
//    let results = '';
//    for (let i = 0; i < users.length; i++) {
//        if (users[i].age <= age){
//              results += `${users[i].name}, ${users[i].balance}\n`
//        }
       
//    }
//    return results;
// }

// let result = showSalary(users, 24);
// alert(result);


// function showSalary(users, age){
//     let results = '';
//     users.map(item => {
//         if(item.age <= age){
//             results += `${item.name}, ${item.balance}\n`;
//         }
//     });
//     return results;
// }

// let result = showSalary(data, 40);
// alert(result);
// document.querySelector('.container').innerHTML = result;
// let user1 = {
//     "balance": "$1,825.65",
//     "picture": "https://placehold.it/32x32",
//     "age": 21,
//     "name": "Golden Branch",
//     "gender": "male",
//     "greeting": "Hello, Golden Branch! You have 7 unread messages.",
//     "favouriteFruit": "banana"
//   };

// let user2 = {
//     "balance": "$1,200.56",
//     "picture": "https://placehold.it/32x32",
//     "age": 19,
//     "name": "Popka Eblanov",
//     "gender": "male",
//     "greeting": "Hello, Golden Branch! You have 7 unread messages.",
//     "favouriteFruit": "banana"
//   }; 

//   let user3 = {
//     "balance": "$1,345.56",
//     "picture": "https://placehold.it/32x32",
//     "age": 23,
//     "name": "hui morzhov",
//     "gender": "male",
//     "greeting": "Hello, Golden Branch! You have 7 unread messages.",
//     "favouriteFruit": "banana"
//   }; 
// // Массив пользователей
// let users = [user1, user2, user3];

// function showSalary(users, age){
//   let filt = users.filter(item => item.age <= age );

//   return filt.map(item => `${item.name}, ${item.balance}`).join('\n');
  

// }



// function showSalary(users, ageIn){
//     return users
//     .filter(({age}) => age <= ageIn)
//     .map(({name, balance}) => `${name}, ${balance}`)
//     .join('\n');
  
//   }


//   let result = showSalary(users, 20);
// alert(result);

// 3 задача 3 блок

// function camelize(str){
//    return str
//    .split('-')
//    .map((item, index) => index == 0 ? item : item[0].toUpperCase + item.slice(1))
//    .join('');

    
// }

// camelize("list-style-image")

// 5 задача 3 блок
let inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';

// function getMinMax(str){
  
//  let sp = str.split(/[\s,]+/)
//   console.log(sp);
//  let spM = sp.map(item => isFinite(item) ? item : '');
  
//   let result = {
//      min : Math.max(...spM),
//      max : Math.min(...spM),
//  };
//  console.log(result)

//   let spMm = spM.map(item => isFinite(item) ? item : false)
//   console.log(spMm);
// }

// getMinMax(inputData);

// let inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';

// const REGEX = /[\s,]+/;

// function getMinMax(str){
//     const strNumber = str.split(REGEX).filter(item =>  isFinite(item));
//     console.log(strNumber);
    
    
//     return {
//         min : Math.min(...strNumber),
//         max : Math.max(...strNumber),
//     }

// }

// console.log(getMinMax(inputData));


// console.log(document.body);


// 4 модуль задача 1



// function makeFriendsList(friends) {
//     let ul = document.createElement('ul');
//     friends.map(({firstName, lastName}) => {
//         let li = document.createElement('li');
//         li.innerHTML = `${firstName} ${lastName}`;
//         ul.append(li);
//     });
//     return ul;
// }

// // console.log(makeFriendsList(friends));


// // 4 модуль 2 задача

// let table = document.querySelector('table');

// function makeDiagonalRed(table) {

//     for (let i = 0; i < table.rows.length; i++) {
        
//         let row = table.rows[i];
//         row.cells[i].style.backgroundColor = 'red';
        
//     }
    
//   }

// // makeDiagonalRed(table);

// // 4 модуль 3 задача
// let table = document.querySelector('.js-teachers');



// function highlight(table){
//     const tr = Array.from(table.rows);
//     console.log(tr);
    
//     for (let i = 1; i < tr.length; i++) {

//         const td = Array.from(tr[i].cells);
//         const tdData = td[3].dataset.available;

//         if(td[3].hasAttribute('data-available')){
             
//             if ( tdData === 'false') {
//                 tr[i].classList.add('unavailable')
//             } else  {
//                 tr[i].classList.add('available')
//             } 
//         } else {
//             tr[i].setAttribute('hidden', false);
//         }
        
        
       
//         if ( td[2].innerHTML === 'm') {
//             tr[i].classList.add('male');
//         } else {
//             tr[i].classList.add('female')
//         }

//         if (td[1].innerHTML < 18 ) {
//             tr[i].style = "text-decoration: line-through";
//         }

//         console.log(tr[i]);
//     }


// }

// highlight(table);

// function highlight(table) {
//     const tr = table.rows;

//     for (let i = 1; i < tr.length; i++) {
//         const tds = tr[i].cells;
        
        
//         if (tds[3].hasAttribute('data-available')){
//               tds[3].dataset.available === 'false' ? tr[i].classList.add('unavailable') : tr[i].classList.add('available')
//         } else {
//             tr[i].setAttribute('hidden', false)
//         };

//           tds[2].innerHTML === 'm' ? tr[i].classList.add('male') : tr[i].classList.add('female');
//           tds[1].innerHTML < 18 ? tr[i].style = "text-decoration: line-through" : null;
//           console.log(tr[i]);
//     }
// }

// highlight(table);

// let data = [[45, 12],[55,21],[19, -2],[104, 20]];
// let data1 = [[3, 12],[55,1],[91, -2],[54, 23]]
// let data2 = [[59, 12],[55,-1],[12, -2],[12, 12]];
// function openOrSenior(data){
//     console.log(data.map(item => item[0] >= 55 && item[1] > 7 ? "Senior" : "Open"))
    
// };

// openOrSenior(data)
// openOrSenior(data1)
// openOrSenior(data2)



// function XO(str) {
  
//   let strArr = str.toUpperCase().split('');
  
//   if ( strArr.includes('O')|| strArr.includes('X')) {
//     let numO = 0;
//     let numX = 0;
//     strArr.forEach(item => {
//         if( item === 'O'){
//             numO++ ;

//         }
//         if(item === 'X'){
//             numX++;
//         }
        
//     })
//     console.log(numO)
//     console.log(numX)
//     return numO === numX ? true : false;

//   } else { 
//       return true;
      

//   };
  

 
// }

// console.log(XO('xo'))
// console.log(XO("xxOo"))
// console.log(XO("xxxm"))
// console.log(XO("Oo"))
// console.log(XO("ooom"))



// function friend(friends){
//     return friends.filter(item => item.length === 4)
//   }

// console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]))


// function nbYear(p0, percent, aug, p) {
//     let years = 0 ;
//    for (let i = 0; p0 < p; i++) {
       
//        p0 = p0 + p0 * percent/100 + aug 
       
//        years++ ;
       
//    }
//    return years;
// }

// console.log(nbYear(1500000, 2.5, 10000, 2000000));

// function divisors(integer) {
//     let arr = [];
    
//   for (let i = 0; i < integer; i++) {
//       if (integer%i === 0 && i != 1){
//       arr.push(i);
//         } 
//     }
//     if (arr.length === 0){
//         return `${integer} is prime`
//     }  
//       return arr;
// };

// console.log(divisors(12));

// function descendingOrder(n){
//    const numArr = n.toString().split('');
//    function so (a,b){
//     if (a < b) return 1; 
//     if (a == b) return 0;
//     if (a > b) return -1;
//    }
//    return numArr.sort(so).join(''); 
// }
// function descendingOrder(n){
//     const numArr = n.toString().split('')
//     console.log(numArr.sort().reverse().join(''));
// }


//   console.log(descendingOrder(4534123654));



