$(document).ready(function() {
	for ( let i = 10; i--; i = 0 ) {
		$('.image-section').height(function(i,val) {
			return $('.image-section-img').eq(i).height();
		});
	}
})

$(window).resize(function() {
	$('.image-section').height(function(i,val) {
		return $('.image-section-img').eq(i).height();
	});
});
