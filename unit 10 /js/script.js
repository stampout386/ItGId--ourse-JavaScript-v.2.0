// let a = 'Иван';
// let b = '37';
// let z7 = 'Овен';
// let c = ['Иван',37,'Овен'];
// let d = [];
// console.log(c[0]);
// console.log(c[1]);
// console.log(c[2]);
// console.log(c[5]);
// console.log(c);
// console.log(c.length);
// let zodiak = ['Козерог',1,1,19];
// let man = ['Ivan','male',176,93,'Ivanov'];
// console.log(zodiak);
// console.log(man);
// console.log('Длинна массива');
// console.log(zodiak.length);
// console.log(man.length);
// console.log(man[4]);
// man[0]= 'sergey';
// console.log(man);

let a = [1,2,3,4];
 console.log(a);

 let t = a[0]; //1 
 a[0]= a[a.length-1];
 a[a.length-1]= t;
 console.log(a);

console.log(a[5]);

// for (let i = 0; i < a.length; i++) {
//     document.querySelector('.out-1').innerHTML += a[i]+' ';
//     }

let out = '';
for (let i = 0; i < a.length; i++) {
    if (a[i]%2 == 0) {
        out += a[i]+' '; 
    }
}
 document.querySelector('.out-1').innerHTML = out;

 //max
 let b = [4,7,8,3,4,6,2,9,102,123,132,43,53];
 let max = b[0];
 for (let i = 0; i < b.length; i++) {
     if (b[i]> max){
         max = b[i];
     }
 }
console.log('max:'+ max);
// sum 
let sum = 0 ;
for (let i = 0; i < b.length; i++){
    sum = sum + b[i];
}
console.log(sum);


