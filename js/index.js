$(function() {

  var counter = 0;

  $(document.body).on('click', function() {
    bgaudio.play();
  });

  $('table').on('click', 'td', function() {
    var thisElement = $(this);
    if (counter === 5){
      showDots();
      counter++;
      return false;
    } else if (counter === 6) {
      showHorizonLine();
      return false;
    }
    if (!this.className) {
      playAudio('audio/no.mp3');
    } else if (thisElement.hasClass('todo')) {
      counter++;
      thisElement.removeClass('todo').addClass("opened tooth");
      playAudio('audio/yeah.mp3');
    }
  });

  function playAudio(url) {
    var audio = new Audio(url);
    audio.play();
  }

  function showDots() {
    $('i.hide').removeClass('hide');
    $('span.hide').removeClass('hide');
  }

  function showHorizonLine() {
    $('table').addClass('done');
  }

});