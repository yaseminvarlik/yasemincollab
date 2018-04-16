  $(document).ready(function () {

  $('.urinal, .author_m_name').addClass("filt");
  $(window).scroll(function(){
  $('.pull_one, .pull_two, .pull_three').removeClass("filt");
});

//   $window.scroll(function() {
//     if ( $window.scrollTop() >= distance ) {
//         $(".pull_one, .img_fc").css('opacity', 0);
//     }
//     if ( $window.scrollTop() < distance ) {
//         $(".pull_one, .img_fc").css('opacity', 1);
//     }
// });
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
      $('.urinal, .author_m_name').removeClass("filt");
      $('.par_three').css('opacity', 0);

  };

});
    });


