window.onload = function() {
  var thisTable = document.getElementsByTagName('table')[0];
  thisTable.addEventListener('click', function(e) {
    var target = e.target;
    if (target.tagName.toLowerCase() === 'td' && target.className.indexOf("todo") > -1) {
      target.className = "opened tooth";
    }
  });
};