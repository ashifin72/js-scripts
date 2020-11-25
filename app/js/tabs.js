window.addEventListener('DOMContentLoaded', function () {

  // 'use strict';
// Tabs start
  // получаем елементы
  let tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  // скрваем все табы кроме а
  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  // функция для открытия таба с номером b
  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show')
    }
  }

  // определяем по клику на каком табе было дейсвие event.target и открываем его
  info.addEventListener('click', function (event) {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          // останавливаем перебор
          break;
        }
      }
    }
  });
  // Tabs end

});
