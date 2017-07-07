$('#create-facebook-bt').on('click', function() {
  $('.modal-facebook').addClass('is-open').fadeIn();
  createCanvas('fb-canvas', color);
});

$('.modal-facebook .cancel').on('click', function() {
  $('.modal-facebook').removeClass('is-open').fadeOut();
});
