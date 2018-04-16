  $(document).ready(function () {
  var filterVal = 'blur(5px)';
  var filterN= 'blur(0)';
  var filterTitle= 'blur(10px)';


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

});


