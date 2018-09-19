$(function() {
	$('[data-toggle="tooltip"]').tooltip()
});

function billMonthly(monthly)  {

	$('#monthly').toggleClass('grey', !monthly);
	$('#monthly').toggleClass('selected', monthly);
	$('#annually').toggleClass('grey', monthly);
	$('#annually').toggleClass('selected', !monthly);
	$('.switch-pill').toggleClass('right', !monthly);
	$('.price .annual').toggle(!monthly);
	$('.price .monthly').toggle(monthly);
}

$('.preview-switch .switch-pill').click(function() {
	billMonthly($('.toggle-switch.selected').attr('id') != 'monthly');
});
$('.preview-switch #monthly').click(function() { billMonthly(true) });
$('.preview-switch #annually').click(function() { billMonthly(false) });

billMonthly(false);


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
