$('.btn-array-left-services').click(function() {
	$('.global__section-services-slider-item').appendTo('.global__section-services-slider');
	$('.global__section-services-slider-item').eq(0).appendTo('.global__section-services-slider');
});

$('.btn-array-right-services').click(function() {
	$('.global__section-services-slider-item').appendTo('.global__section-services-slider');
	$('.global__section-services-slider-item').eq(2).prependTo('.global__section-services-slider');
});
