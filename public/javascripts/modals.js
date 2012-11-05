var Modal = Modal || {};

Modal.show = function(selector) {
  var modal = this;
  var $modal = $(selector);
  $modal.show();
  $modal.on('click' , function(e) {
    if(e.target.className == 'close') {
      modal.hide($modal);
    }
  });
};

Modal.hide = function(selector){
  var modal = this;
  var $modal = $(selector);
  $modal.fadeOut();
}