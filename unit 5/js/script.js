// for
// while
//for (старт , работаем пока верно , изменение счетчика){}

// for (let i = 0 ; i < 6 ; i++){
  
//   console.log(i);
  
// }
// let div = document.querySelectorAll('.one');
// console.log(div);


// for (let i = 0 ; i < div.length ; i++){
//     console.log(div[i]);
//     div[i].style.backgroundColor = 'red';
//     div[i].onclick = two;
//   }

// function two (){
//     console.log('work');
// }
// let b = document.getElementsByClassName('one');
// let c = document.getElementsByTagName('div');

// console.log(c);

// for (let i = 0; i < b.length; i++) {
//     b[i].style.border = '3px solid black';
    
// }
document.querySelector('button').onclick = () => {
    let r = document.querySelectorAll('input[type ="radio"]');
    console.log(r);
    for (let i = 0 ; i< r.length; i++){
        if(r[i].checked){
            console.log(r[i].value);
        
        }
    }
}

let out = '' ;
for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i == 6 ) continue;
    out += i + ' ';
    //if (i == 6 ) break;
      if (i == 6 ) continue;
}
document.querySelector('#out').innerHTML = out;