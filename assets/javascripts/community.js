function onLearnMorePodcastClick(e) {
	e.preventDefault();
	$('.comm-podcast-expand').slideToggle('slow');
	$('.comm-link_podcast').toggleClass('active');
}

function onLearnMoreBlogClick(e) {
	e.preventDefault();
	$('.comm-blog-expand').slideToggle('slow');
	$('.comm-link_blog').toggleClass('active');
}
$('.comm-link_podcast').on('click', onLearnMorePodcastClick);
$('.comm-link_blog').on('click', onLearnMoreBlogClick);

$('#faqs').children('.row.faq').each(function(i) {
	const section = $(this);
	const plus = Snap(`#plus${i}`);
	const vertical = plus.select(`#vertical${i}`);
	section.click(function() {
		section.find('.answer').toggle('fast');
		if (section.data('open')) {
			vertical.stop().animate({ transform : 'r 0,10,10' }, 300);
			section.data('open', false);
		}
		else {
			vertical.stop().animate({ transform : 'r 90,10,10' }, 300);
			section.data('open', true);
		}
	});
});
$('.comm-highlights_carousel').slick({
	slidesToShow   : 3,
	slidesToScroll : 1,
	draggable      : false,
	responsive 	   : [
		{
			breakpoint : 768,
			settings   : {
				slidesToShow   : 2,
				slidesToScroll : 1,
				draggable      : true,
			},
		},
		{
			breakpoint : 460,
			settings   : {
				slidesToShow   : 1,
				slidesToScroll : 1,
				draggable      : true,
			},
		}
	],
});

function changeHeaderColor() {
	const colorComboArray = [
		'comm-header colorComboOne',
		'comm-header colorComboTwo',
		'comm-header colorComboThree',
		'comm-header colorComboFour'
	];
	const randomCombo = Math.floor(Math.random() * colorComboArray.length);
	$('#ptop-masthead, .comm-header').attr('class', colorComboArray[randomCombo]);
}
changeHeaderColor();
