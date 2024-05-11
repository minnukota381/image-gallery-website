$(document).ready(function() {
  // Toggle dark mode
  $('#dark-mode-toggle-small, #dark-mode-toggle-large').click(function() {
    $('body').toggleClass('dark-mode');
    let darkModeEnabled = $('body').hasClass('dark-mode');
    if (darkModeEnabled) {
      $('#dark-mode-toggle-small, #dark-mode-toggle-large').html('<i class="fas fa-sun"></i>');
    } else {
      $('#dark-mode-toggle-small, #dark-mode-toggle-large').html('<i class="fas fa-moon"></i>');
    }
  });

  // Open modal when image is clicked
  $('.image-container img').click(function() {
    let src = $(this).attr('src');
    $('#modal-image').attr('src', src);
    $('#exampleModal').modal('show');
  });

  // Close modal when close button is clicked
  $('.close-modal').click(function() {
    // No need to manually hide the modal
  });
});