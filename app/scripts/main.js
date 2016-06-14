$(document).ready(function ( event ) {
  $('#theme-selector').on( 'change keyup', function() {
      var selected = this.value;
      $('body').removeClass();
      $('body').addClass(selected);
  });
});
