  $(document).ready(function () {

  var distance = $('.pull_m_one').offset().top,
    $window = $(window);
    var distanceTwo = $('.pull_m_two').offset().top;
    var distanceThree = $('.pull_m_four').offset().top;

  $('.urinal, .author_m_name, .pull_m_one').addClass("filt");
  $(window).scroll(function(){
  $('.pull_m_one').removeClass("filt");
});

  $window.scroll(function() {
    if ( $window.scrollTop() >= distance ) {
        $(".pull_m_one, .img_fount").css('opacity', 0);
    }
    if ( $window.scrollTop() < distance ) {
        $(".pull_m_one, .img_fount").css('opacity', 1);
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

  $(window).on("scroll", function() {
  var scrollHeight = $(document).height();
  var scrollPosition = $(window).height() + $(window).scrollTop();
  if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
      // when scroll to bottom of the page
      $('.urinal, .author_m_name').removeClass("filt");
      $('.par_three').css('opacity', 0);

  };

});
    });


