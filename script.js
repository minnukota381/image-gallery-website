$(document).ready(function() {

  $('#dark-mode-toggle').click(function() {
    $('body').toggleClass('dark-mode');
    var darkModeEnabled = $('body').hasClass('dark-mode');
    if (darkModeEnabled) {
      $(this).html('<i class="fas fa-sun"></i>');
    } else {
      $(this).html('<i class="fas fa-moon"></i>');
    }
  });

  $('.image-container img').click(function() {
    var src = $(this).attr('src');
    $('.modal-body img').attr('src', src);
  });
});