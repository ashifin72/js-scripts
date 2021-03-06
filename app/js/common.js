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

  //Timer
  let deadline = '2020-11-28';

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor(t / (1000 * 60 * 60));

    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    }
  }

  // дописываем ноль для чисел меньше 10
  function addingZero(a) {
    if (a < 10) {
      a = '0' + a;
    }
    return a;
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        // запускаем таймер с интервалом 1 секунда
        timeInterval = setInterval(updateCloc, 1000);

    function updateCloc() {
      let t = getTimeRemaining(endtime);
      // Выводим данные в поля верски
      hours.textContent = addingZero(t.hours);
      minutes.textContent = addingZero(t.minutes);
      seconds.textContent = addingZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    }
  }

  setClock('timer', deadline);
  // Timer end

});
