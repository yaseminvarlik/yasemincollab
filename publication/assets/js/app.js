  $(document).ready(function () {
 	var filterVal = 'blur(5px)';
 	var filterN= 'blur(0)';
	$('.one').mouseover(function () {
 	$('.img_one').css('filter',filterVal)
  	.css('webkitFilter',filterVal)
  	.css('mozFilter',filterVal)
  	.css('oFilter',filterVal)
  	.css('msFilter',filterVal);
  	$('.one').mouseleave(function () {
 	$('.img_one').css('filter', filterN)
 		.css('webkitFilter',filterN)
  		.css('mozFilter',filterN)
  		.css('oFilter',filterN)
  		.css('msFilter',filterN);
 	});
 });
	$('.two').mouseover(function () {
 	$('.img_two').css('filter',filterVal)
  	.css('webkitFilter',filterVal)
  	.css('mozFilter',filterVal)
  	.css('oFilter',filterVal)
  	.css('msFilter',filterVal);
  	$('.two').mouseleave(function () {
 	$('.img_two').css('filter', filterN)
 		.css('webkitFilter',filterN)
  		.css('mozFilter',filterN)
  		.css('oFilter',filterN)
  		.css('msFilter',filterN);
  	});
  });
	$('.three').mouseover(function () {
 	$('.img_three').css('filter',filterVal)
  	.css('webkitFilter',filterVal)
  	.css('mozFilter',filterVal)
  	.css('oFilter',filterVal)
  	.css('msFilter',filterVal);
  	$('.three').mouseleave(function () {
 	$('.img_three').css('filter', filterN)
 		.css('webkitFilter',filterN)
  		.css('mozFilter',filterN)
  		.css('oFilter',filterN)
  		.css('msFilter',filterN);
  	});
  });
});
