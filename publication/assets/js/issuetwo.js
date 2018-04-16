  $(document).ready(function () {

  var distance = $('.pull_s_one').offset().top,
    $window = $(window);
  var distanceTwo = $('.pull_s_three').offset().top;
  var distanceThree = $('.pull_s_four').offset().top;
  var distanceFour = $('.pull_s_five').offset().top;


  $('.statue, .author_s_name, .pull_s_one').addClass("filt");
  $(window).scroll(function(){
  $('.pull_s_one').removeClass("filt");
});

  $window.scroll(function() {
    if ( $window.scrollTop() >= distance ) {
        $(".pull_s_one, .img_stat").css('opacity', 0);
    }
    if ( $window.scrollTop() < distance ) {
        $(".pull_s_one, .img_stat").css('opacity', 1);
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
  $(window).on("scroll", function() {
  var scrollHeight = $(document).height();
  var scrollPosition = $(window).height() + $(window).scrollTop();
  if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
      // when scroll to bottom of the page
      $('.statue, .author_s_name').removeClass("filt");
      $('.par_two').css('opacity', 0);

  };

});
    });


