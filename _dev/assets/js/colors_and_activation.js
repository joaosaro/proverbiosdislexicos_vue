(function(el) {
  var initActive = document.getElementsByClassName("color-item")[el];

  initActive.className += " active";
})(0);

var color = window.getComputedStyle(document.body).getPropertyValue('--color').trim();
