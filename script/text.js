$(".course-box").hover(function () {
    $(this).find('.course').show();
}, function () {
    $(this).find('.course').hide();
});


$(function(){
		$(".aboutme").typed({
			strings: ["Hello", "Welcome"],
			typeSpeed: 0
		});
	});