$(document).ready(function() {
	$('#generate').click(function() {
		var topText = $('input[name=top-text]').val();
		var bottomText = $('input[name=bottom-text]').val();
		console.log(topText);
		console.log(bottomText);
		$('.meme-image').append('<h1 class="text-center">' + topText + '</h1>');
		$('.meme-image').append('<h1 class="text-center">' + bottomText + '</h1>');
	});
});