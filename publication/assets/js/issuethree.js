  $(document).ready(function () {

  var distance = $('.img_fount').offset().top,
    $window = $(window);
    var distanceOne = $('.pull_m_one').offset().top;
    var distanceTwo = $('.pull_m_two').offset().top;
    var distanceThree = $('.pull_m_four').offset().top;



  $('.urinal, .author_m_name, .pull_m_one').addClass("filt");
  $(window).scroll(function(){
  $('.pull_m_one').removeClass("filt");
});

  $window.scroll(function() {
    if ( $window.scrollTop() >= distanceOne ) {
        $(".pull_m_one").css('opacity', 0);
    }
    if ( $window.scrollTop() < distanceOne ) {
        $(".pull_m_one").css('opacity', 1);
    }
});
  $window.scroll(function() {
    if ( $window.scrollTop() >= distance ) {
        $(".img_fount").css('opacity', 0);
    }
    if ( $window.scrollTop() < distance ) {
        $(".img_fount").css('opacity', 1);
    }
});
  $window.scroll(function() {
    if ( $window.scrollTop() >= distanceTwo) {
        $(".pull_m_two").css('opacity', 0);
    }
    if ( $window.scrollTop() < distanceTwo ) {
        $(".pull_m_two").css('opacity', 1);
    }
});
  $window.scroll(function() {
    if ( $window.scrollTop() >= distanceThree) {
        $(".pull_m_four").css('opacity', 0);
    }
    if ( $window.scrollTop() < distanceThree ) {
        $(".pull_m_four").css('opacity', 1);
    }
});
$('.pull_m_one').addClass("filt_one");
$('.pull_m_two').addClass("filt_two");
$('.pull_m_three').addClass("filt_three");
$('.pull_m_four').addClass("filt_four");
$('.img_broke').addClass("filt_five");
$('.img_gold').addClass("filt_six");
$('.pull_m_five').addClass("filt_seven");


  $(window).on("scroll", function() {
  var scrollHeight = $(document).height();
  var scrollPosition = $(window).height() + $(window).scrollTop();
  if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
      // when scroll to bottom of the page
      $('.urinal, .author_m_name').removeClass("filt");
       $('.pull_m_one').removeClass("filt_one");
      $('.pull_m_two').removeClass("filt_two");
      $('.pull_m_three').removeClass("filt_three");
      $('.pull_m_four').removeClass("filt_four");
      $('.pull_m_five').removeClass("filt_seven");
      $('.img_broke').removeClass("filt_five");
      $('.img_gold').removeClass("filt_six");
      $('.par_three').css('opacity', 0);
      $('.end_note').removeClass("opac");

  };

});
    });


