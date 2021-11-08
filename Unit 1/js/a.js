function removeButtonTemplate () {
  return `<button class = "remove-button">[x]</button>`
}

function renderButtons (parentPanes) {
  parentPanes.forEach(pane => {
    pane.insertAdjacentHTML('afterbegin' , removeButtonTemplate());

    const button = pane.querySelector('.remove-button');

    button.addEventListener('click',() => { pane.remove()}, {once: true});

  });
}

const panes = [...document.querySelectorAll('.pane')];
 
console.log(panes); 

renderButtons(panes);




// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function(){
//     this.value += +prompt('Сколько нужно добавить ?', 0 )
//   }

// }

// let accumulator = new Accumulator(100);

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value)

// class User {
//   constructor(name , age) {
//      this.name = name;
//      this.age = age;
  
//   }
//   isAdult(){
//     return this.age >= 18;
//   }
// }


// const user = new User('Mik', 17);
// const user2 = new User('Area', 23);

// alert(user === user2); 

function listItemTemplate({name}){
  return `<li>${name}</li>`
}

function listTemplate({items =[]}) {
  return `<ul>${items.map(name=>listItemTemplate({name})).join('')}</ul>`
}


function menuContainerTemplate({ title = 'Menu' , listMenuTemplate = ''}) {
  return `
   <div data-component="MenuContainer" class= "menu">
     <span class='title'>${title}</span>
     ${listMenuTemplate}
   </div>
  
  `;
}

class Menu {
  constructor({title,items, parent}){
    this._title = title;
    this._items = items;
    this._parent = parent
    
  }
  
  get _container(){
    return this._parent.querySelector('[data-component="MenuContainer"]');
  }
  
  render() {
    this._parent.innerHTML = menuContainerTemplate({
      title: this._title,
      listMenuTemplate: listTemplate({items: this._items}),
    });
    
    this._container.addEventListener('click', () => this._onMenuClick());
  }
  _onMenuClick(){
    this._container.classList.toggle('open');
  }
}

 const menu = new Menu ({
  title: 'Menu',
  items: ['1','23','fgd','fdg'],
  parent: document.querySelector('#app-root')
});

menu.render();

