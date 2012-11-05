$('.login').click(function() {
  Modal.show('#login-modal');
});

$('.signup').click(function() {
  Modal.show('#signup-modal');
});

$('.block .delete').click(function() {
  var $that = $(this).parent('.block');
  $that.fadeOut();
  Modal.show('#delete-modal');
  $('a.undo').click(function() {
    $that.fadeIn();
    Modal.hide('#delete-modal');
  });
});

$('.block-title').click(function() {
  Modal.show('#block-modal');
});