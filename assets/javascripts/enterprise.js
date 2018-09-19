let allowSubmit = false;
function capcha_filled() {
	allowSubmit = true;
}

function capcha_expired() {
	allowSubmit = false;
}

$('form.contact').submit(function(e) {
	e.preventDefault();
	if (!allowSubmit)
		return false;

	$.ajax({
		type : 'POST',
		url  : '/email',
		data : {
			name               : jQuery('form.contact input[name="name"]').val(),
			email              : jQuery('form.contact input[name="email"]').val(),
			message            : jQuery('form.contact textarea[name="message"]').val(),
			grecaptcharesponse : jQuery('form.contact textarea[name="g-recaptcha-response"]').val(),
			phone              : jQuery('form.contact input[name="phone"]').val(),
		},
		success : function() {
			console.log('success');
		},
	});
	$('form.contact input[type="submit"]').attr('value', 'Sent!');
})

jQuery(window).load(function() {
	if (window.location.hash) {
		const y = $(window).scrollTop();  // your current y position on the page
		$(window).scrollTop(y - 100);
	}
	else {
		// Fragment doesn't exist
	}
});
