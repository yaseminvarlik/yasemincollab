
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
