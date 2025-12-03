// Создаем скрипт по нажатиюкнопки для mobail nav

// Находим кнопку on ID

const btn = document.querySelector('#btn-nav');
// Находим тег изображения самой кнопки
const img_btn_open = document.querySelector('#img-btn-open');
// Находим блок с навигацией для mobile
const mobileNav = document.querySelector('#mobile-nav');
// Нахдим header
const header = document.querySelector('#header');




// Вешаем события клика на кнопку!

btn.addEventListener('click',function(){


  // Добовляем класы элементам для управления свойствами
  btn.classList.toggle('open');
  mobileNav.classList.toggle('open');
  header.classList.toggle('header-mobile-bg');
  // Запрешяем body скролить по оси y 
  document.body.classList.toggle('no-scroll');

  // пишем условия для класса open по смене иконки

  if(btn.classList.contains('open')){

    img_btn_open.src = './img/icon-nav-close-svg/NAV_CLOSE.svg';

  }else{

    img_btn_open.src = './img/nav-open-svg/NAV_OPEN.svg';
    
  }

  

});