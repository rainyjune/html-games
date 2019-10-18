$(function() {
  $(".peach").each(function(index, element) {
    $(element).data('tippy', tippy(element, {
      maxWidth: 900,
      trigger: 'click',
      interactive: true
    })).on('click', function() {
      var el = $(this);
      if (el.hasClass('dropdown')) return false;
      if (el.hasClass('tips')) {
        el.removeClass('tips').addClass('dropdown').data('tippy').destroy();
        document.getElementById('bgaudio').play();
      } else {
        el.addClass('tips').data('tippy').show();
      }
    });
  });
});