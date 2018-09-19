screenshotToggle('features-views');
featuresShowcaseToggle('first-features');
featuresShowcaseToggle('second-features');
featuresShowcaseToggle('third-features');
featuresShowcaseToggle('fourth-features');

$(window).scroll(function() {
	const position            = $(document).scrollTop();
	const stickySpot          = $('#roadmap-view').offset().top - 100;
	const planPosition        = $('#plan').offset().top - 135;
	const collaboratePosition = $('#collaborate').offset().top - 135;
	const visualizePosition   = $('#visualize').offset().top - 135;
	const integratePosition   = $('#integrate').offset().top - 135;
	const securityPosition    = $('#security').offset().top - 135;
	if (position > stickySpot) {
		$('#feature-nav').css('position', 'fixed').css('top', '0px').css('box-shadow', '0px 0px 19px 0px rgba(0,0,0,0.2)');
		$('#masthead').css('box-shadow', 'none');
	}
	else {
		$('#feature-nav').css('position', 'relative').css('top', '0px').css('box-shadow', 'none');
		$('#masthead').css('box-shadow', '0px 0px 19px 0px rgba(0,0,0,0.2)');
	}

	if (position > stickySpot && position < planPosition) {
		$('.feature-nav-row div').removeClass('selected');
		$('#roadmap-view-link').addClass('selected');
	}
	else if (position > planPosition && position < collaboratePosition) {
		$('.feature-nav-row div').removeClass('selected');
		$('#plan-link').addClass('selected');
	}
	else if (position > collaboratePosition && position < visualizePosition) {
		$('.feature-nav-row div').removeClass('selected');
		$('#collaborate-link').addClass('selected');
	}
	else if (position > visualizePosition && position < integratePosition) {
		$('.feature-nav-row div').removeClass('selected');
		$('#visualize-link').addClass('selected');
	}
	else if (position > integratePosition && position < securityPosition) {
		$('.feature-nav-row div').removeClass('selected');
		$('#integrate-link').addClass('selected');
	}
	else if (position > securityPosition) {
		$('.feature-nav-row div').removeClass('selected');
		$('#security-link').addClass('selected');
	}
	else {
		$('.feature-nav-row div').removeClass('selected');
	}
});

function anchorScroll(id) {
	const section = $(`#${id}`);
	$(`#${id}-link`).click(function() {
		$('html,body').animate({ scrollTop : section.offset().top }, 'slow');
	});
}

anchorScroll('roadmap-view');
anchorScroll('plan');
anchorScroll('collaborate');
anchorScroll('integrate');
anchorScroll('visualize');
anchorScroll('security');
