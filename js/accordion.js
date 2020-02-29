$(document).ready(function () {
	var $li = $("#wrapper>ul>li");
	//each方法可以循环一个jQuery对象
	$li.each(function (i, e) {
		$(e).children(".title").css("background-image", "url(images/img" + (i + 1) + ".jpg");
		$(e).children(".content").css("background-image", "url(images/pic" + (i + 1) + ".jpg");
	});

	$li.mouseenter(function () {
		$(this).children(".content").stop().animate({width : 230});
		//stop停止当前正在执行的动画
		$(this).siblings().children(".content").stop().animate({width : 0});
	});
}); 
/*动画队列:jQuery在执行动画的时候，如果有多个动画，每一个动画都是需要时间的*/
/*jQuery为了保证每一个动画都能执行完，把动画存储到一个队列中，一个一个地去执行，直到动画执行完成为止。*/
