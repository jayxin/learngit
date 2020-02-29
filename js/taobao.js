$(document).ready(function () {
	let $wrapper = $("#wrapper");
	let $ul = $("#wrapper > ul");
	let $arrowLeft = $(".arrow > .left");
	let $arrowRight = $(".arrow > .right");
	let $point = $("#wrapper > ol > li");
	let width = 540;
	let index = 0;
	
	$point.click(function () {
		$(this).addClass("now").siblings().removeClass("now");
		
		index = $(this).index();
		$ul.animate({left : -index * width});
	});
	
	$arrowRight.click(function () {
		if (index >= 7) {
			index = 0;
			$ul.css("left", 0);
		}
		
		index++;
		$ul.animate({left : -index * width});
		
		if (index == 7) {
			$point.eq(0).addClass("now").siblings().removeClass("now");
		} else {
			$point.eq(index).addClass("now").siblings().removeClass("now");
		}
		
	});
	
	$arrowLeft.click(function () {
		if (index <= 0) {
			index = 7;
			$ul.css("left", -index * width);
		}
		
		index--;
		$ul.animate({left : -index * width});
		
		if (index == 7) {
			$point.eq(0).addClass("now").siblings().removeClass("now");
		} else {
			$point.eq(index).addClass("now").siblings().removeClass("now");
		}
	});
	
	var timeId = setInterval(function () {
		$arrowRight.click();
	}, 2000);
	
	$wrapper.mouseenter(function () {
		clearInterval(timeId);
	});
	
	$wrapper.mouseleave(function () {
		timeId = setInterval(function () {
			$arrowRight.click();
		}, 2000);
	});
});

// 延时定时器 : 54321 boom
// 参数1：需要延迟执行的代码
// 参数2：延迟的时间，单位是毫秒
// 特点：代码只会执行一次，之后不会再次执行
//var timeId = setTimeout(function () {}, 5000);
//清除延时定时器
/* $("button").click(function () {
	clearTimeout(timeId);
}); */


// 间歇定时器, 可以让代码每隔一段时间执行一次
//var timeId = setInterval(function () {}, 1000);
/* $("button").click(function () {
	clearInterval(timeId);
}); */