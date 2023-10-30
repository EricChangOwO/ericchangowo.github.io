/* 導航欄 ~~*/ 
var Now = document.getElementById(緣起);
var NavStauts;
var NavStautsJq;
function NavNow (IndexInner) {
    NavStauts = IndexInner;
    $('a').removeClass('NavActive');
    Now = document.getElementById(IndexInner);
    Now.className="NavActive";
    console.log("你現在正在瀏覽：" + IndexInner);
}
if( $(window).width() > 990 ){
    NavStauts = "緣起";
    NavNow('緣起');
} 
else{
    NavStauts = "緣起M";
    NavNow('緣起M');
}
$(window).bind("resize", function(){
    if(NavStauts[2] == "M"){
        if( $(window).width() > 990 ){
            NavNow(NavStauts[0] + NavStauts[1]);
        }
        else{
            NavNow(NavStauts);
        }
    }
    else{
        if( $(window).width() > 990 ){
            NavNow(NavStauts);
        }
        else{
            NavNow(NavStauts + "M");
        }
    }
});
/* ~~ 導航欄*/
$("li").click(function() {
    NavStautsJq = "#" + NavStauts[0] + NavStauts[1] + "Content"
    $('[id*=Content]').addClass('NotLooking');
    $(NavStautsJq).removeClass('NotLooking');
});
function SOPNAV(sop){
    $('.ABCD').addClass('NotLooking');
    $('.sopaabb').removeClass('sopActive');
    $('#' + sop).removeClass('NotLooking');
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("ABCD");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}