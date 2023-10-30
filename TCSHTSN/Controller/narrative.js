var prev = 0;
$(".navitem").click(function(){
    $('.navitem').removeClass('active');
    $(this).addClass('active');
})

$(window).on('scroll', function(){
  var scrollTop = $(window).scrollTop();
  $('.nav').toggleClass('hidden', scrollTop > prev);
  prev = scrollTop;
});

$('.ui.dropdown')
  .dropdown()
;
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 400);
});

$(document).ready(function() {
  setTimeout(function(){
    $("#相關資訊").addClass("hovered");
  }, 2000);
});

$( "section" ).hover(function() {
  $( this ).addClass( "hovered" );
});
