$('.btn-array-left').click(function() {
	$('.global__section-services-slider-item').appendTo('.global__section-services-slider');
	$('.global__section-services-slider-item').eq(0).appendTo('.global__section-services-slider');
});

$('.btn-array-right').click(function() {
	$('.global__section-services-slider-item').appendTo('.global__section-services-slider');
	$('.global__section-services-slider-item').eq(2).prependTo('.global__section-services-slider');
});
