$(function() {
  $(".peach").on('click', function() {
    var element = $(this);
    if (element.hasClass('dropdown')) return false;
    if (element.hasClass('tips')) {
      element.removeClass('tips').addClass('dropdown');
    } else {
      element.addClass('tips');
      tippy(this, {
        trigger: 'click',
        interactive: true
      }).show();
    }
  });
});