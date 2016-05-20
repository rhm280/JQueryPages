$(function(){
	$('li').on('click', function(f) {
		$('li span').remove();
		var date = new Date();
		date.setTime(f.timeStamp);
		var clicked = date.toDateString();
		$(this).append('<span class="date">' + clicked + ' ' + f.type +'</span>');
	});
});