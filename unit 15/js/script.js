let a = new Set;
a.add(1);
a.add(2);
a.add('hello');
a.add('1');
console.log(a);
console.log(a[0]); ////set!!!!
console.log(a.lenght) ///////no
console.log(a.size);// количество элементов
console.log(a.has(2));
for (const iterator of a) {
    console.log(iterator);
}