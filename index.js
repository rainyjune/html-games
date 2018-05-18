window.onload = function() {

  // Click to play the background audio, for Chrome.
  document.body.addEventListener('click', function() {
    bgaudio.play();
  }, true);

  var thisTable = document.getElementsByTagName('table')[0];
  thisTable.addEventListener('click', function(e) {
    e.stopPropagation()
    var target = e.target;
    if (target.tagName.toLowerCase() === 'td') {
      if (target.className.indexOf("todo") > -1) {
        target.className = "opened tooth";
        playAudio('audio/yeah.mp3');
      } else if (target.className === "") {
        playAudio('audio/no.mp3');
      }
    }
  });

  function playAudio(url) {
    var audio = new Audio(url);
    audio.play();
  }
};