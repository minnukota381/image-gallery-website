$(document).ready(function() {
  $('#dark-mode-toggle-small, #dark-mode-toggle-large').click(function() {
    $('body').toggleClass('dark-mode');
    let darkModeEnabled = $('body').hasClass('dark-mode');
    if (darkModeEnabled) {
      $('#dark-mode-toggle-small, #dark-mode-toggle-large').html('<i class="fas fa-sun"></i>');
    } else {
      $('#dark-mode-toggle-small, #dark-mode-toggle-large').html('<i class="fas fa-moon"></i>');
    }
  });

  $('.image-container img').click(function() {
    let src = $(this).attr('src');
    $('#modal-image').attr('src', src);
    $('#exampleModal').modal('show');
  });

  $('.close-modal').click(function() {
  });
});