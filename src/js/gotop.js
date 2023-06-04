$(document).ready(function(){
	$('.menu li a').click(function () { // 1
	    let	elementClick = $(this).attr('href');
	    let	destination = $(elementClick).offset().top;
		$('body,html').animate({scrollTop: destination }, 1400);
	});
});