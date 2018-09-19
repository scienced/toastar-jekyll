featuresShowcaseToggle('new-roadmunk-templates');

$('#new-roadmunk-templates .list-item-large').click(function() {
	const name = $(this).attr('id');
	$('#template-button').attr('href', `/roadmap-templates/${name}-roadmap`);
});
