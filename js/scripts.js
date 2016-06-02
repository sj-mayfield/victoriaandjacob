//Javascrip Victoria and Jacob
//Gallery controls
$(window).load(function(){
      $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
    });

$(".flexslider").on("mouseenter", function() {
      $("#pause").show();
}).on("mouseleave", function() {
      $("#pause").hide();
});

//Music fade in
$('.bc').load(function(){
$('#wrapper').fadeIn(1000);
});

//Add ACTIVE clas to menu
$(document).ready(function($){
	var url = window.location.href;
	$('.menu ul li a[href="'+url+'"]').addClass('active');
})