$('.btn-array-left-portfolio').click(function() {
    $('.global__section-portfolio-slider-item').appendTo('.global__section-portfolio-slider');
    $('.global__section-portfolio-slider-item').eq(0).appendTo('.global__section-portfolio-slider');
});

$('.btn-array-right-portfolio').click(function() {
    $('.global__section-portfolio-slider-item').appendTo('.global__section-portfolio-slider');
    $('.global__section-portfolio-slider-item').eq(3).prependTo('.global__section-portfolio-slider');
});
