  $(document).ready(function () {
 	var filterVal = 'blur(5px)';
 	var filterN= 'blur(0)';
  var filterTitle= 'blur(10px)';
  var distance = $('.pull_one').offset().top,
    $window = $(window);
  var distanceTwo = $('.pull_two').offset().top;


	$('.one').mouseover(function () {
 	$('.img_one').css('filter',filterVal)
  	.css('-webkitFilter',filterVal);
  	$('.one').mouseleave(function () {
 	$('.img_one').css('filter', filterN)
 		.css('-webkitFilter',filterN);
 	});
 });
	$('.two').mouseover(function () {
 	$('.img_two').css('filter',filterVal)
  	.css('-webkitFilter',filterVal);
  	$('.two').mouseleave(function () {
 	$('.img_two').css('filter', filterN)
 		.css('-webkitFilter',filterN);
  	});
  });
	$('.three').mouseover(function () {
 	$('.img_three').css('filter',filterVal)
  	.css('-webkitFilter',filterVal);
  	$('.three').mouseleave(function () {
 	$('.img_three').css('filter', filterN)
 		.css('-webkitFilter',filterN);
  	});
  });
  $('.bull, .author_name, .pull_one, .pull_two, .pull_three, .statue, .author_s_name').addClass("filt");
  $(window).scroll(function(){
  $('.pull_one, .pull_two, .pull_three').removeClass("filt");
});

  $window.scroll(function() {
    if ( $window.scrollTop() >= distance ) {
        $(".pull_one").css('opacity', 0);
    }
    if ( $window.scrollTop() < distance ) {
        $(".pull_one").css('opacity', 1);
    }
});
  $window.scroll(function() {
    if ( $window.scrollTop() >= distanceTwo) {
        $(".pull_two").css('opacity', 0);
    }
    if ( $window.scrollTop() < distanceTwo ) {
        $(".pull_two").css('opacity', 1);
    }
});
    });


