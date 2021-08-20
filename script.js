$(function() {
  $('.head-list').click(function() {
    $(this).css('color', 'black')
  });
});

$(function() {
  $('.sports').hover(
    function() {
      $('.text').fadeIn();
    },
    function() {
      $('.text').fadeOut();
    }
  );
});