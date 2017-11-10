$(".send-message").click(function(){
	var topic = $(".topic").val();
	var content = $(".content").val();
	var name = $(".name").val();
	$(this).attr('href',href='mailto:guopengsheng@gmail.com?body=' + content + '  ' + name + '&subject=' + topic )
	window.location.href = href;
});