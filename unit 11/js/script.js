const a = [1,2,3,4,5,6,7,8,9];
const b = ['a','b','c','d','e','f'];

// .push добавляет элементы в конец массива
console.log(a.length);
console.log(a.push(10));
console.log(a);
console.log(b.push('j','k'));
console.log(b);

// .pop удаляет элементы в конце массива ,
console.log('pop');
console.log(b);
b.pop();
console.log(b.pop());
console.log(b.pop());
console.log(b);

// удалить элемент внутри массива
delete a[3];
console.log(a);

a.splice(3,3);

console.log(a);
 
a.splice(3,3, 'hi');

console.log(a);
// shift unshift  добавляет и удаляет  эелементы в начало массивов
