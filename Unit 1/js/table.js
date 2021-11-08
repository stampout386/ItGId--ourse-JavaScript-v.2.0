// /**
//  * Компонент, который реализует таблицу
//  * с возможностью удаления строк
//  *
//  * Пример одного элемента, описывающего строку таблицы
//  *
//  *      {
//  *          name: 'Ilia',
//  *          age: 25,
//  *          salary: '1000',
//  *          city: 'Petrozavodsk'
//  *      }
//  *
//  */
// //  let rows = [
// //     {
// //         name: 'Вася',
// //         age: 25,
// //         salary: 1000,
// //         city: 'Самара'
// //     },
// //     {
// //         name: 'Петя',
// //         age: 30,
// //         salary: 1500,
// //         city: 'Москва'
// //     }
// //   ];


// // class UserTable {
// //     constructor(rows) {
    
       
// //      }

// //      elem(){
       
// //        const table =  document.createElement('table');
// //        const row = `<tr>
// //     <td>${this.name}</td>
// //     <td>${this.age}</td>
// //     <td>${this.salary}</td>
// //     <td>${this.city}</td>
// //     <td><button>X</button></td>
// //     </tr>`
// //        const thead = `<thead><tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr></thead><tbody>${row}</tbody>`;
// //        table.innerHTML = thead;
// //        document.body.append(table);


// //     }
// //   }
  
// // const tab = new UserTable(rows);
// // tab.elem();

//  let rows = [
//     {
//         name: 'Вася',
//         age: 25,
//         salary: 1000,
//         city: 'Самара'
//     },
//     {
//         name: 'Петя',
//         age: 30,
//         salary: 1500,
//         city: 'Москва'
//     },
//     {
//         name: 'Валера',
//         age: 43,
//         salary: 134565,
//         city: 'Мурманск'
//     }

//   ];

// class UserTable {
//     constructor(rows) {
//       this.elem = document.createElement('table');  // создаем таблицу
 
//       this.elem.innerHTML = `    
//         <thead>
//             <tr>
//               <td>Имя</td>
//               <td>Возраст</td>
//               <td>Зарплата</td>
//               <td>Город</td>
//               <td></td>
//             </tr>
//         </thead>
//       `;                              // добавляем в таблицу шапку
 
//     //   let tbody = this.elem.querySelector('tbody');
 
//       let tableInner = rows.map(row => {
//         let cellsWithData = Object.values(row) // для каждого значения из объекта row
//           .map(value => `<td>${value}</td>`) // обернуть его в <td>
//           .join(''); // полученный массив <td>...</td> объединить в одну строку
 
//         return `
//             <tr>
//               ${cellsWithData}
//               <td><button>X</button></td>
//             </tr>
//           `; // возвращаем верстку одной строки
    
//       }).join('');
 
//       this.elem.innerHTML += `          
//         <tbody>
//           ${tableInner}
//         <tbody>
//       `; // оборачиваем полученные строчки в tbody     и добавляем в таблицу тбоди
 
//       this.elem.addEventListener('click', (event) => this.onClick(event));   //навешиваем событие на всю таблицу
//     }
 
//     onClick(event) {
//       if (event.target.tagName != 'BUTTON') {       // если не кнопка тогда ничего не происходит 
//         return;
//       }
 
//       let tr = event.target.closest('tr');    // иначе берется блидайший родительски тр 
 
//       tr.remove();    // и удаляется
//     } 
 
//   }
 
//   let table = new UserTable(rows);
//   document.body.append(table.elem);
  

// //   class Artsioms {
// //       constructor(age, penisLength){
// //          this.age = age;
// //          this.penisLength = penisLength;
// //       }

// //       ShowPenisLength(){
// //           alert(`Длина писюна Артема : ${this.penisLength}`)
// //       }
// //   }
// //   const a1 = new Artsioms(30,5);
// //   const a2 = new Artsioms(12,7);
// //   const a3 = new Artsioms(15,8);
// //   const a4 = new Artsioms(64,2);
// //   const a5 = new Artsioms(25,1);

// //   a5.ShowPenisLength();

// let row = {
//     name: 'Валера',
//     age: 43,
//     salary: 134565,
//     city: 'Мурманск'
// }

// console.log(Object.values(row));
// let product = {
//     name: "Laab kai chicken salad", // название товара
//     price: 10, // цена товара
//     category: "salads", // категория, к которой он относится, нам это понадобится чуть позже
//     image: "laab_kai_chicken_salad.png", // название картинки товара
//     id: "laab-kai-chicken-salad" // уникальный идентификатор товара, нужен для добавления товара в корзину
// }

// class ProductCard {
//     constructor(product) {
//       this.name = product.name;
//       this.price = `€${product.price.toFixed(2)}`;
//       this.category = product.category;
//       this.image = product.image;
//       this.id = product.id;
//       this.elem = document.createElement('div');
//       this.elem.classList.add('card');
//       this.elem.innerHTML = `
//     <div class="card__top">
//       <img src="/assets/images/products/${this.image}" class="card__image" alt="product">
//       <span class="card__price">${this.price}</span>
//     </div>
//     <div class="card__body">
//       <div class="card__title">${this.name}</div>
//       <button type="button" class="card__button">
//         <img src="/assets/images/icons/plus-icon.svg" alt="icon">
//       </button>
//     </div>
//       `
//     }
//   }

// let productCard = new ProductCard(product);
// document.body.append(productCard.elem);


// const ribbonInner = document.querySelector('.ribbon__inner');
// console.log(ribbonInner)

// console.log(ribbonInner.clientHeight);
// console.log(ribbonInner.clientWidth);
// console.log(ribbonInner.scrollLeft);
// console.log(ribbonInner.scrollWidth);
// document.querySelector('.bt1').addEventListener('click', () => {
//   console.log('work')
//   console.log(ribbonInner.scrollLeft);
// })
// let config = {
//   steps: 5, // количество шагов слайдера, начинаются с нуля, т.е. шаги в этом случае будут 0-1-2-3-4
//   value: 0 // начальное значение, текущий выбранный шаг
// }

// class StepSlider {
//   constructor(config){
//      this.steps = config.steps;
//      this.value = config.value;
//      this.elem = this._render();
     
     


//   }
//   _render(){
//     return document.querySelector('.container').innerHTML = `<div class="slider">

//     <!--Ползунок слайдера с активным значением-->
//     <div class="slider__thumb">
//       <span class="slider__value">0</span>
//     </div>
  
//     <!--Полоска слайдера-->
//     <div class="slider__progress"></div>
  
//     <!-- Шаги слайдера (вертикальные чёрточки) -->
//     <div class="slider__steps">
//        ${this._renderSliderSteps()}
//     </div>
//   </div>`
//   }

//  _renderSliderSteps(){
//     let stepsSpan = '';
//     for (let i = 0; i < this.steps; i++) {
//       stepsSpan += `<span></span>`
//       }
//       console.log(stepsSpan);
//       return stepsSpan;
//   }

// _sliderClick(){
//   this.elem.addEventListener('click', this._onClick)
// }

// _onClick = () => {

// }

// }

//  let step = new StepSlider(config);
//  step.elem;


//  let div1 = document.createElement('div');
//  document.querySelector('.container').append(div1);
// div1.innerHTML = 'dlgfjfdlgjdfg';




const cartman = document.querySelector('.cartman');
cartman.ondragstart = (e)=>{
  e.preventDefault()
};

cartman.addEventListener('pointerdown', ()=>{
   cartman.style.position = 'absolute';

     const onMove = (event)=>{


     const cartmanHalfW = cartman.offsetWidth/2;
     const cartmanHalfH = cartman.offsetHeight/2;
     cartman.style.left =`${event.pageX-cartmanHalfW}px`
     cartman.style.top = `${event.pageY-cartmanHalfH}px`
     }

document.addEventListener('pointermove', onMove); 
document.addEventListener('pointerup', ()=>{
   document.removeEventListener('pointermove', onMove)
},{once : true});
     
});
