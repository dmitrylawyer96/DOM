'use strict';

//  № 2. Задача на обробники подій, роботу зі сховищами та атрибутами/вмістом

//     Напишіть html код який містить кнопку якраз посередині (вертикально і горизонтально) сторінки.

//     В початковому стані - на кнопці має бути текст 'Turn off', фон сторінки має стати світлий.

//     Після натиснення - на кнопці має бути текст 'Turn on', фон сторінки має стати темний.

//     Під кнопкою має з'явитись текстове повідомлення 'Last turn off: 
//     `{DD-MM-YYYY HH:MM:SS}`', де `{DD-MM-YYYY HH:MM:SS}` - це формат часу для виведення

//     Після повторного натиснення - на кнопці має бути текст 'Turn off', фон сторінки має стати світлий.

//     Під кнопкою має з'явитись текстове повідомлення 'Last turn on: 
//     `{DD-MM-YYYY HH:MM:SS}`', де `{DD-MM-YYYY HH:MM:SS}` - це формат часу для виведення

//     Стан кнопки та повідомлення останню зміну стану має зберігатись після перезавантаження/закриття сторінки.
//     Логіку роботи реалізуйте в окремому js-файлі.



// Функція window.onload викликається при завантаженні сторінки 
// та перевіряє збережені значення стану кнопки та часу за допомогою локального сховища (localStorage)
window.onload = function() {
  if (localStorage.getItem('buttonState') === 'on') {
    document.body.style.backgroundColor = '#fff';
    document.getElementById('toggleButton').innerHTML = 'Turn off';
    // document.getElementById('lastState').innerHTML = 'Last turn on: ' + localStorage.getItem('lastTime');
  } else {
    document.body.style.backgroundColor = '#333';
    document.getElementById('toggleButton').innerHTML = 'Turn on';
    // document.getElementById('lastState').innerHTML = 'Last turn off: ' + localStorage.getItem('lastTime');
  }
}

function toggleButton() {
  let button = document.getElementById('toggleButton');
  let lastState = document.getElementById('lastState');
  if (button.innerHTML === 'Turn off') {
    document.body.style.backgroundColor = '#333';
    button.innerHTML = 'Turn on';
    lastState.innerHTML = 'Last turn off: ' + getCurrentTime();
    localStorage.setItem('buttonState', 'off');
    localStorage.setItem('lastTime', lastState.innerHTML);
  } else {
    document.body.style.backgroundColor = '#fff';
    button.innerHTML = 'Turn off';
    lastState.innerHTML = 'Last turn on: ' + getCurrentTime();
    localStorage.setItem('buttonState', 'on');
    localStorage.setItem('lastTime', lastState.innerHTML);
  }
}

function getCurrentTime() {
  let date = new Date();
  let formattedDate = ('0' + date.getDate()).slice(-2) + 
  '-' + ('0' + (date.getMonth() + 1)).slice(-2) + 
  '-' + date.getFullYear() + 
  ' ' + ('0' + date.getHours()).slice(-2) + 
  ':' + ('0' + date.getMinutes()).slice(-2) + 
  ':' + ('0' + date.getSeconds()).slice(-2);
  
  return formattedDate;
}
