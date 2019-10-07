$('.slider').slick({
	arrows: true,
	dots: false,
    autoplay: true,
    autoplaySpeed: 6000,
    lazyLoad: 'ondemand'
});

$('.about-block').motion({
	timingFunction: 'linear'
});

$('.slick').not('.slick-initialized').slick({
	arrows: false,
	dots: true,
    autoplay: true,
    autoplaySpeed: 3000
});

$('[data-parse]').parse();

$('[data-click]').onclick_motion();

// $('body').scroll();