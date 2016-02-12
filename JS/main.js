var feed = new Instafeed({
		get: 'user',
		userId: 1400590791,
		accessToken: '94764.1677ed0.c6256a27eddf41709ddf29af3469a4e5',
		target: 'instagram',
		limit: '24',
		sortBy: 'most-liked',
		resolution: 'standard_resolution',
		template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="likes"><p><i class="large red heart icon"></i> {{likes}}</p></div>',
});

window.onload = function() {
	feed.run();
};
