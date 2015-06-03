$(window).load(function(){
	$('#loader').velocity('fadeOut',{duration:500,});
});

$(window).resize(function(){
	var screenWidth = window.innerWidth;
	if (screenWidth > 600) {
		$('nav#menu ul').removeAttr('style');
	}
});
$(document).ready(function(){

	$('a#menu-button').click(function(){
		var menuDisplay = $('nav#menu ul').hasClass('display');
		if ( menuDisplay === true ) {
			$('nav#menu ul').removeClass('display');
			$('nav#menu ul').velocity('fadeOut', {
				easing: 'easeInOut',
				duration: 500
			});
		} else {
			$('nav#menu ul').addClass('display');
			$('nav#menu ul').velocity('fadeIn',{
				easing: 'easeInOut',
				duration: 500
			});
		}
	});
});