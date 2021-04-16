$(document).ready(function() {
	$('.show').on('click', function(event) {
		event.preventDefault();
		$('body').toggleClass('menu-show');
	});

});