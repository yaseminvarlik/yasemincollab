  $(document).ready(function () {

var distance = $('.pull_s_one').offset().top,
    $window = $(window);
  // var distanceTwo = $('.pull_four').offset().top;


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
//   $window.scroll(function() {
//     if ( $window.scrollTop() >= distanceTwo) {
//         $(".pull_four").css('opacity', 0);
//     }
//     if ( $window.scrollTop() < distanceTwo ) {
//         $(".pull_four").css('opacity', 1);
//     }
// });

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


