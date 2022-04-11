$( document ).ready(function() { 
//Scroll Animation
AOS.init({
  duration: 1200,
});

//Sticky Header 
$(window).bind('scroll', function(e){
	if ($(this).scrollTop() > 1) {
		$("header").addClass("fixed-header");
	} else {
		$("header").removeClass("fixed-header");
	}
});

//Mobile Menu
$("button.navbar-toggler").click(function(){
	$(".navbar-toggler").toggleClass("active");
	$("html").toggleClass("overflow-hidden");
	$("header").toggleClass("header-open");
}); 
});
