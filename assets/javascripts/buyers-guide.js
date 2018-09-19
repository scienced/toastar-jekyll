function bookCoverToggle(rowName) {
	$(`#${rowName} .tab`).click(function() {
		$(`#${rowName} .tab`).removeClass('selected-tab');
		$(this).addClass('selected-tab');

		const coverNum   = $(`#${rowName} .tab`).index(this);
		const cover      = $('.cover');
		const coverOne   = $('.cover-one');
		const coverTwo   = $('.cover-two');
		const coverThree = $('.cover-three');

	  	$(`#${rowName} .cover`).removeClass('selected-cover pos-a pos-b pos-c');
		$(`#${rowName} .cover:nth-child(${coverNum + 1})`).addClass('selected-cover');
		if (coverOne.hasClass('selected-cover')) {
			coverOne.addClass('pos-a');
			coverTwo.addClass('pos-b');
			coverThree.addClass('pos-c');
		}
		if (coverTwo.hasClass('selected-cover')) {
			coverOne.addClass('pos-b');
			coverTwo.addClass('pos-a');
			coverThree.addClass('pos-c');
		}
		if (coverThree.hasClass('selected-cover')) {
			coverOne.addClass('pos-b');
			coverTwo.addClass('pos-c');
			coverThree.addClass('pos-a');
		}
	});
}
bookCoverToggle('bg-covers');

$(window).on('scroll', function() {
	$('.maze-svg').each(function() {
		if (isScrolledIntoView($(this))) {
			$(this).find('.maze-line').css({
				'animation-name'            : 'draw',
				'animation-duration'        : '4s',
				'animation-timing-function' : 'linear',
				'animation-fill-mode'       : 'forwards',
			});
		}
	});
});

// check if an element is in view
function isScrolledIntoView(elem) {
	const docViewTop    = $(window).scrollTop();
	const docViewBottom = docViewTop + $(window).height();
	const elemTop       = $(elem).offset().top;
	const elemBottom    = elemTop + $(elem).height();
	return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

