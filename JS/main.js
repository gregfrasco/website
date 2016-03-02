var feed = new Instafeed({
		get: 'user',
		userId: 1400590791,
		accessToken: '94764.1677ed0.c6256a27eddf41709ddf29af3469a4e5',
		target: 'instagram',
		limit: '24',
		sortBy: 'most-liked',
		resolution: 'standard_resolution',
		template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="likes"><p><i class="large red heart icon"></i> {{likes}}<br>{{location}}</p></div>',
});

$(function() {
	$.ajax({
		type: "GET",
		dataType: "jsonp",
		cache: true,
					url: "https://api.instagram.com/v1/users/1400590791/?access_token=94764.1677ed0.c6256a27eddf41709ddf29af3469a4e5",
		success: function(data) {
			var ig_count = data.data.counts.followed_by.toString();
			ig_count = add_commas(ig_count);
			$(".instagram_follower").html(ig_count);
		}
	});

	$(function() {
		$.ajax({
			type: "GET",
			dataType: "jsonp",
			cache: true,
						url: "https://api.instagram.com/v1/users/1400590791/?access_token=94764.1677ed0.c6256a27eddf41709ddf29af3469a4e5",
			success: function(data) {
				var ig_count = data.data.counts.media.toString();
				ig_count = add_commas(ig_count);
				$(".instagram_photo").html(ig_count);
			}
		});

		$(function() {
			$.ajax({
				type: "GET",
				dataType: "jsonp",
				cache: true,
							url: "https://api.instagram.com/v1/users/1400590791/?access_token=94764.1677ed0.c6256a27eddf41709ddf29af3469a4e5",
				success: function(data) {
					var ig_count = data.data.counts.media.toString();
					ig_count = add_commas(ig_count);
					$(".instagram_following").html(ig_count);
				}
			});

	function add_commas(number) {
		if (number.length > 3) {
			var mod = number.length % 3;
			var output = (mod > 0 ? (number.substring(0,mod)) : '');
			for (i=0 ; i < Math.floor(number.length / 3); i++) {
				if ((mod == 0) && (i == 0)) {
					output += number.substring(mod+ 3 * i, mod + 3 * i + 3);
				} else {
					output+= ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
				}
			}
			return (output);
		} else {
			return number;
		}
	}
});

window.onload = function() {
	feed.run();
};

$(function() {
$.ajax({
	type: "GET",
	dataType: "jsonp",
	cache: true,
				url: "https://api.instagram.com/v1/users/1400590791/?access_token=94764.1677ed0.c6256a27eddf41709ddf29af3469a4e5",
	success: function(data) {
		var ig_count = data.data.counts.followed_by.toString();
		ig_count = add_commas(ig_count);
		$(".instagram_followed_by").html(ig_count);
	}
});
function add_commas(number) {
	if (number.length > 3) {
		var mod = number.length % 3;
		var output = (mod > 0 ? (number.substring(0,mod)) : '');
		for (i=0 ; i < Math.floor(number.length / 3); i++) {
			if ((mod == 0) && (i == 0)) {
				output += number.substring(mod+ 3 * i, mod + 3 * i + 3);
			} else {
				output+= ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
			}
		}
		return (output);
	} else {
		return number;
	}
}
});

$(function() {
$.ajax({
type: "GET",
dataType: "jsonp",
cache: true,
			url: "https://api.instagram.com/v1/users/1400590791/?access_token=94764.1677ed0.c6256a27eddf41709ddf29af3469a4e5",
success: function(data) {
	var ig_count = data.data.counts.media.toString();
	ig_count = add_commas(ig_count);
	$(".instagram_media").html(ig_count);
}
});
function add_commas(number) {
if (number.length > 3) {
	var mod = number.length % 3;
	var output = (mod > 0 ? (number.substring(0,mod)) : '');
	for (i=0 ; i < Math.floor(number.length / 3); i++) {
		if ((mod == 0) && (i == 0)) {
			output += number.substring(mod+ 3 * i, mod + 3 * i + 3);
		} else {
			output+= ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
		}
	}
	return (output);
} else {
	return number;
}
}
});

$(function() {
$.ajax({
type: "GET",
dataType: "jsonp",
cache: true,
			url: "https://api.instagram.com/v1/users/1400590791/?access_token=94764.1677ed0.c6256a27eddf41709ddf29af3469a4e5",
success: function(data) {
	var ig_count = data.data.counts.follows.toString();
	ig_count = add_commas(ig_count);
	$(".instagram_follows").html(ig_count);
}
});
function add_commas(number) {
if (number.length > 3) {
	var mod = number.length % 3;
	var output = (mod > 0 ? (number.substring(0,mod)) : '');
	for (i=0 ; i < Math.floor(number.length / 3); i++) {
		if ((mod == 0) && (i == 0)) {
			output += number.substring(mod+ 3 * i, mod + 3 * i + 3);
		} else {
			output+= ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
		}
	}
	return (output);
} else {
	return number;
}
}
});
