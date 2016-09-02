$(document).ready(function(){
	var $page1 = $('.wrapper-1col'),
		$page2 = $('.wrapper-2col');

	$page1.click(function(){
		$(this).fadeOut(2000);
		$page2.fadeIn(2000);
	})

})