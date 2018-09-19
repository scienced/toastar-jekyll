$('.go-top').on('click', function() {
	$('html, body').animate({
		scrollTop : 0,
	}, 500);
	return false;
});

function onLearnMoreClick(e) {
	e.preventDefault();
	$(this).parent().children('.expand-text').slideToggle('slow');
	$('.learn-more .plus').toggleClass('active');
}

function featuresShowcaseToggle(rowName) {
	$(`#${rowName} .list-item-large`).click(function() {
		$(`#${rowName} .list-item-large`).removeClass('selected');
		$(this).addClass('selected');

		const item = $(`#${rowName} .list-item-large`).index(this);
		$(`#${rowName} .featured-image`).css('opacity', '0');
		$(`#${rowName} .featured-image:nth-child(${item + 1})`).css('opacity', '100');
	});
}

function screenshotToggle(rowName) {
	$(`#${rowName} .tab-toggle:first-child`).addClass('selected');
	$(`#${rowName} .tab-toggle`).click(function() {
		$(`#${rowName} .tab-toggle`).removeClass('selected');
		$(this).addClass('selected');

		const item = $(`#${rowName} .tab-toggle`).index(this);
		$(`#${rowName} .featured-screenshot:not(:first-child)`).css('opacity', '0');
		$(`#${rowName} .featured-screenshot:nth-child(${item + 1})`).css('opacity', '100');
		$(`#${rowName} .featured-screenshot-description`).css('display', 'none');
		$(`#${rowName} .featured-screenshot-description:nth-child(${item + 1})`).css('display', 'block');
	});
}

$('.whr-empty-text').addClass('sorry center');
screenshotToggle('demo-views');
screenshotToggle('jira-views');
