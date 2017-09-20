document.addEventListener('DOMContentLoaded', () => {
  var minutes = document.getElementById('minutes'),
      seconds = document.getElementById('seconds');
  minutes.innerHTML = '00';
  seconds.innerHTML = '05';
});

var countOn = false;

var counter = setInterval(function(){
    if (countOn) {
      var minutes = document.getElementById('minutes'),
          seconds = document.getElementById('seconds'),
          newSecond = seconds.innerHTML - 1,
          newMinute = minutes.innerHTML - 1;

      if (newSecond === -1) {
        if (newMinute === -1) {
          alert('time up!');
          clearInterval(counter);
        } else if (newMinute < 10) {
          minutes.innerHTML = '0' + newMinute;
        } else {
          minutes.innerHTML = newMinute;
        }
        seconds.innerHTML = '59';
      } else if (newSecond < 10){
        seconds.innerHTML = '0' + newSecond;
      } else {
        seconds.innerHTML = newSecond;
      }
    }
  }, 1000);

function countdown() {
  countOn = true;
}

function pause() {
  clearInterval(counter);
  countOn = !countOn;
}

function setTime(min, sec) {
  clearInterval(counter);
  var minutes = document.getElementById('minutes'),
      seconds = document.getElementById('seconds');

  minutes.innerHTML = min;
  seconds.innerHTML = sec;
}
