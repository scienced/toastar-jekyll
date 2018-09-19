templates = JSON.parse(templates);
templates.forEach(function(template) {
	template.keywords = template.keywords.replace(/\s+/g, '').split(',');
});

const titleSearchOptions = {
	shouldSort         : true,
	threshold          : 0.4,
	location           : 0,
	distance           : 100,
	maxPatternLength   : 32,
	minMatchCharLength : 1,
	keys               : [ 'title' ],
};
const keywordSearchOptions = {
	shouldSort         : true,
	threshold          : 0.4,
	location           : 0,
	distance           : 100,
	maxPatternLength   : 32,
	minMatchCharLength : 1,
	keys               : [ 'keywords' ],
}
const titleSearch = new Fuse(templates, titleSearchOptions);
const keywordSearch = new Fuse(templates, keywordSearchOptions);

/* On page load a category from the url gets shown, the previous search is
 * still there (if they used the back button), or if none of these show
 * the featured tab. */
const tag = getTag();
if (tag) {
	searchForTemplates(tag, false);
	$('#search').val(tag);
}
else if ($('#search').val() != '')	{
	searchForTemplates($('#search').val(), true);
}
else	{
	showFeatured();
}

$('.category').click(function() {
	$('#search').val('');
	searchForTemplates($(this).text().toLowerCase(), false);
	$('.category').removeClass('selected');
	$(`#${$(this).text()}`).addClass('selected');
});

$('#search').on('input', function() {
	$('.category').removeClass('selected');
	if ($(this).val() == '')
		showFeatured();
	else
		searchForTemplates($(this).val(), true);
});

function searchForTemplates(query, fuzzy) {
	let result = [];
	let keywordResults = [];
	if (fuzzy) {
		result = titleSearch.search(query);
		keywordResults = keywordSearch.search(query);
		result = _.union(result, keywordResults);
	}
	else if (query == 'featured') {
		templates.forEach(function(template) {
			if (template.featured)
				result.push(template);
		});
	}
	else {
		templates.forEach(function(template) {
			if (template.category == query.toLowerCase())
				result.push(template);
		});
	}
	const resultsList = $('.results');
	resultsList.empty();
	if (result.length == 0 && query != '') {
		resultsList.append(`<div class='sorry row'>
								<div class="col-sm-3"><img src="/images/templates/sorry.svg"/></div>
								<div class="col-sm-9"><p>Sorry, there are no templates matching: <strong>${query}</strong></p></div>
							</div>
							<div class='help'>
								<p>Our Customer Success Team would love to help you build the roadmap you're looking for. <a onclick="Intercom('showNewMessage', 'Hi Roadmunk, I can\\'t find a ${query} template in your template library')"  class="button button-white">Contact us</a></p>
							</div>
							`);
	}
	else {
		result.forEach(function(template) {
			const content = `<a class="template-card" href="/roadmap-templates/${template.title.replace(/\s+/g, '-').toLowerCase()}">
								<table><tbody><tr><td class="small-template-image"><img src="${template.thumbnail}"></td>
								<td class="template-item-info"><p>${template.title}</p></td></tr></tbody></table>
							</a>`;
			resultsList.append(content);
		});
	}
}

function showFeatured() {
	searchForTemplates('featured', false);
	$('#featured').addClass('selected');
}

function getTag() {
	const query = window.location.search.substring(1);
	const vars = query.split('&');
	let tag;
	vars.forEach(function(x) {
		const pair = x.split('=');
		if (pair[0] == 'search')
			tag = pair[1];

	});
	return tag;
}
