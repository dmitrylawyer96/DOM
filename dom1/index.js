'use strict';

// № 1. Задача на селектори:
// Для сторінки з вебінару (лінк на гіт) напишіть селектори для наступних елементів:
// - для елементу з текстом 'Навігація по DOM дереву'
// - для першого елементу <section>
// - для елементу списку з текстом 'Пункт 5'
// - для елементу з класом 'hatredLevelBlock'
// Кожен селектор має бути унікальним (тобто всі мають бути створені за допомогою різних методів) 
// і має бути присвоєний якійсь змінній.
// Приклад:
//  let spanWithClass = document.querySelector('.hatredLevelCounter');

// селектори для:
// елементу з текстом 'Навігація по DOM дереву':
let navTitle = document.getElementById('header-two');
console.log(navTitle);
// першого елементу <section>:
let firstSection = document.getElementsByTagName('section')[0];
console.log(firstSection);
// елементу списку з текстом 'Пункт 5':
let fifthListItem = document.querySelectorAll('li')[4];
console.log(fifthListItem);
// елементу з класом 'hatredLevelBlock':
let hatredLevelBlock = document.getElementsByClassName('hatred-level-block')[0];
console.log(hatredLevelBlock);

// ========================================================================================







// 9. DOM - ВЕБІНАР

// 1
function f() {
  console.log(this); // ?
}

let user = {
  g: f.bind(null)
}

// user.g()

// a) null + + +
// b) this
// c) user
// d) function f() {}

// 2
function sayMyName() {
  console.log(this.name)
}

const someFunc = sayMyName
  .bind({name: "Яна"})
  .bind({name: "Світлана"});

// someFunc()

// a) Яна, Світлана
// b) Яна +
// c) Світлана +
// d) Error 

// 3
const whoAmI = {
  name: "Аліна",
  dFunction: function() {
      console.log(this.name) // this = whoAmI
  },
  aFunction: () => {
      console.log(this.name) // this = window
  }
};

// whoAmI.dFunction(); // 1 ?
// whoAmI.aFunction(); // 2 ?


// a) 1 - undefined, 2 - undefined
// b) 1 - Аліна, 2 - undefined +
// c) 1 - Аліна, 2 - Аліна + +
// d) 1 - undefined, 2 - Аліна +

const toy = {
  firstName: 'Winnie',
  lastName: 'the Pooh',
  getToyName: function() {
      const fullName = this.firstName + ' ' + this.lastName;
      return fullName;
  }
}

const toyName = function(snack, unlike) {
  console.log(this.getToyName() + ' loves ' + snack + ' and doesn\'t like ' + unlike) // this = toy
}

// toyName.apply(toy); // ?

// a) Winnie the Pooh loves undefined and doesn't like undefined
// b) Winnie the Pooh loves honey and doesn't like bees + + +
// c) undefined undefined loves undefined and doesn't like undefined
// d) Winnie the Pooh loves honey and don't like bees

const section = document.querySelector('.first-section');
// console.log(section.hasAttribute('class'));
// console.log(section.getAttribute('id'));

section.setAttribute('id', 'main-section');
// section.removeAttribute('id');

// console.log(section.attributes);

const parag = document.querySelector('p');
// console.log(parag.dataset);

// console.log(parag.nodeType);
// console.log(parag.childNodes[0].nodeType);
// console.log(document.nodeType);

// console.log(parag.nodeName)
// console.log(section.nodeName)
// console.log(parag.childNodes[0].data)
// console.log(parag.childNodes[0].nodeValue)

const div = document.querySelector('#test');
div.textContent = parag.textContent;
// console.log(parag.textContent);
// console.log(parag.innerHTML);
// localStorage.setItem('russophobiaLevel', 1); 

// Події
let redBtn = document.querySelector('.red-btn'); // отримуємо кнопку
let counter = localStorage.getItem('russophobiaLevel') || 0; // отримуємо дані з локалсторджа або записуємо 0

let hatredLevel = document.querySelector('.hatred-level-counter'); // отримуємо каунтер
hatredLevel.textContent = counter + '👿'; // записуємо значення каунтера + емоджі в спан

function updateAndShowRussophobiaLevel(event) { 
  event.stopPropagation();
counter++; // збільшуємо каунтер на + 1
  console.log(`Current russophobia level: ${counter}`);
  console.log(`It is not high enough! 👿`);
  localStorage.setItem('russophobiaLevel', counter); // записуємо в локалсторедж каунтер
  hatredLevel.textContent = counter+'👿'; // змінюємо контент спану
}

function showSectionClick() {
  console.log('showSectionClick')
}

const secondSection = document.querySelector('.second-section');

// secondSection.addEventListener('click', showSectionClick);
// redBtn.addEventListener('click', updateAndShowRussophobiaLevel);

// for(let elem of document.querySelectorAll('*')) {
//     elem.addEventListener("click", e => console.log("Capturing:", elem.tagName), true);
//   }

const form = document.querySelector('form');
console.log(form)
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.target)
  console.log(data.get('email'))
});


// dispatchEvent

let btn = document.querySelector('.red-btn');

btn.addEventListener('click', function (event) {
  console.log('Mouse Clicked');
  console.log('event is Trusted -->', event.isTrusted);
});

let clickEvent = new Event('click');
btn.dispatchEvent(clickEvent);
