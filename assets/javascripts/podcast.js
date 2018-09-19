$('ul.season-tabs .tab').on('click', function() {
	const seasonID = $(this).attr('data-tab');

	$('ul.season-tabs li').removeClass('current');
	$('.tab-content').removeClass('current');

	$(this).addClass('current');
	$(`#${seasonID}`).addClass('current');
});

$('button.see-all').on('click', function() {
	$('.hidden-eps').slideToggle('slow');
	$('.link-arrow').toggleClass('icon-arrow-d icon-arrow-u');
});

$('.podcast-id').on('click', function() {
	const src = 'https://omny.fm/shows/product-to-product-podcast/playlists/podcast/embed?style=cover&list=0&selectedClip=';
	const clipID = $(this).attr('data-id');
	$('#podcast-playlist').attr('src', src + clipID).css('bottom', '-130px');
	$('.podcast + footer').css('margin-bottom', '125px');
	$('#podcast-playlist').delay(500).css('transform', 'translateY(-130px)');
});
