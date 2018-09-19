const active         = $('a.active');
const activeIndustry = active.data('industry');

// hide non-tech industry logos
$('.logos-list img:not([data-industry*=\'tech\'])').hide();

$('.industry-list a').on('click', sortByIndustry);
$('.learn-more').on('click', onLearnMoreClick);

function sortByIndustry() {
	$('.industry-list a').removeClass('active');
	$(this).addClass('active');
	const getIndustryName = $(this).data('industry');
	$(`.logos-list img:not([data-industry*='${getIndustryName}'])`).hide();
	$(`.logos-list [data-industry*='${getIndustryName}']`).show();
}

function onLearnMoreClick(e) {
	e.preventDefault();
	$(this).parent().children('.expand-text').slideToggle('slow');
	$('.learn-more .plus').toggleClass('active');
}

screenshotToggle('customers-template-views');
