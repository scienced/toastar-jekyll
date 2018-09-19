// displays only in EU countries
window.cookieconsent.initialise({
	container : document.getElementById('content'),
	palette   : {
		popup  : { background : '#fff' },
		button : { background : '#298AE4' },
	},
	position : 'bottom-left',
	content  : {
		message : "Roadmunk.com uses cookies to enhance your website experience. By clicking “Accept” you're agreeing to the use of these cookies on your device. To manage your preferences, go to our",
		dismiss : 'Accept',
		link    : 'Privacy Policy',
		href    : '/privacy-policy#cookies',
	},
	revokable : true,
	law       : { regionalLaw : true },
	location  : {
		serviceDefinitions : {
			ipgeolocation : function() {
				return {
					url      : '/ipgeo',
					callback : function(done, response) {
						try {
							const locationData = JSON.parse(response);
							if (locationData)
								return { code : locationData }
							throw 'Could not find a country code in the response';
						}
						catch (err) {
							return new Error(`Invalid response (${err})`);
						}
					},
				};
			},
		},
		services : [
			'ipgeolocation'
		],
	},
});
