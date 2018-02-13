// $(document).ready(function () {
// 	$('#circle').mouseover(function () {
//  	$('.title_name').css('opacity', '1');
// 	});
// 	$('#circle_one').mouseover(function () {
// 		$('.body_text').css('opacity', '1');
// 	});
// 	$('#circle_two').mouseover(function () {
// 		$('img').css('opacity', '1');
// 	});
// });

	
 $(document).ready(function () {
	$('.whole').mouseover(function () {
 	$('#move').css('opacity', '0');
 	$('.whole').mouseleave(function () {
 	$('#move').css('opacity', '1');
 	});
 	$('.whole').mouseover(function () {
 	$('.cursor').css('opacity', '1');
 	});
 });

});