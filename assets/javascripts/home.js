$('.autoplay').slick({
	slidesToShow   : 6,
	slidesToScroll : 1,
	// autoplay       : true,
	// autoplaySpeed  : 6000,
	speed          : 800,
	draggable      : false,
	responsive     : [
		{
			breakpoint : 1200,
			settings   : {
				slidesToShow   : 5,
				slidesToScroll : 1,
				arrows         : true,
			},
		},
		{
			breakpoint : 991,
			settings   : {
				slidesToShow   : 4,
				slidesToScroll : 1,
				arrows         : false,
			},
		},
		{
			breakpoint : 600,
			settings   : {
				slidesToShow   : 3,
				slidesToScroll : 1,
				arrows         : false,
			},
		},
		{
			breakpoint : 480,
			settings   : {
				slidesToShow   : 2,
				slidesToScroll : 1,
				arrows         : false,
			},
		},
		{
			breakpoint : 360,
			settings   : {
				slidesToShow   : 2,
				slidesToScroll : 1,
				dots           : false,
				arrows         : false,
				draggable      : true,
			},
		}
	],
});

$('.crossfade-carousel').slick({
	slidesToShow   : 1,
	slidesToScroll : 1,
	autoplay       : true,
	dots           : true,
	fade           : true,
	cssEase        : 'linear',
	infinite       : true,
	arrows         : true,
	autoplaySpeed  : 5000,
	speed          : 800,
	draggable      : false,
});

screenshotToggle('homepage-template-views');
