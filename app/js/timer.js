window.addEventListener('DOMContentLoaded', function () {

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
