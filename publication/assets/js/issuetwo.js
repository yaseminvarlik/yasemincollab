  $(document).ready(function () {

  var distance = $('.img_stat').offset().top,
    $window = $(window);
  var distanceOne = $('.pull_s_one').offset().top;
  var distanceTwo = $('.pull_s_three').offset().top;
  var distanceThree = $('.pull_s_four').offset().top;
  var distanceFour = $('.pull_s_five').offset().top;



  $('.statue, .author_s_name, .pull_s_one').addClass("filt");
  $(window).scroll(function(){
  $('.pull_s_one').removeClass("filt");
});

  $window.scroll(function() {
    if ( $window.scrollTop() >= distance ) {
        $(".img_stat").css('opacity', 0);
    }
    if ( $window.scrollTop() < distance ) {
        $(".img_stat").css('opacity', 1);
    }
});
  $window.scroll(function() {
    if ( $window.scrollTop() >= distanceOne ) {
        $(".pull_s_one").css('opacity', 0);
    }
    if ( $window.scrollTop() < distanceOne ) {
        $(".pull_s_one").css('opacity', 1);
    }
});
  $window.scroll(function() {
    if ( $window.scrollTop() >= distanceTwo) {
        $(".pull_s_three").css('opacity', 0);
    }
    if ( $window.scrollTop() < distanceTwo ) {
        $(".pull_s_three").css('opacity', 1);
    }
});

$window.scroll(function() {
    if ( $window.scrollTop() >= distanceThree) {
        $(".pull_s_four").css('opacity', 0);
    }
    if ( $window.scrollTop() < distanceThree) {
        $(".pull_s_four").css('opacity', 1);
    }
});
$window.scroll(function() {
    if ( $window.scrollTop() >= distanceFour) {
        $(".pull_s_five").css('opacity', 0);
    }
    if ( $window.scrollTop() < distanceFour) {
        $(".pull_s_five").css('opacity', 1);
    }
});
$('.pull_s_one').addClass("filt_one");
$('.pull_s_two').addClass("filt_two");
$('.pull_s_three').addClass("filt_three");
$('.img_w').addClass("filt_four");
$('.pull_s_four').addClass("filt_five");
$('.img_bart').addClass("filt_six");
$('.pull_s_five').addClass("filt_seven");
$('.pull_s_six').addClass("filt_eight");
$('.pull_s_seven').addClass("filt_nine");

  $(window).on("scroll", function() {
  var scrollHeight = $(document).height();
  var scrollPosition = $(window).height() + $(window).scrollTop();
  if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
      // when scroll to bottom of the page
      $('.statue, .author_s_name').removeClass("filt");
      $('.pull_s_one').removeClass("filt_one");
      $('.pull_s_two').removeClass("filt_two");
      $('.pull_s_three').removeClass("filt_three");
      $('.pull_s_four').removeClass("filt_five");
      $('.pull_s_five').removeClass("filt_seven");
      $('.pull_s_six').removeClass("filt_eight");
      $('.pull_s_seven').removeClass("filt_nine");
      $('.img_bart').removeClass("filt_six");
      $('.img_w').removeClass("filt_four");
      $('.par_two').css('opacity', 0);
      $('.end_note').removeClass("opac");

  };

});
    });


