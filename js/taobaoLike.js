/* $(function () {
	$("button").click(function () {
		// 第一个参数是一个对象，里面写要做动画的样式
		// 第二个参数： speed， 单位是毫秒
		// 第三个参数： 动画的效果，让jQuery动画是匀速的还是加速的 linear : 匀速 swing: 加速
		// 第四个参数： 回调函数， 动画执行完毕会执行的函数
		// 除了第一个参数，其他参数都可以省略
		// 第二个参数：如果不屑，默认是400
		// 第三个参数：默认是swing
		// 第四个参数：动画执行完毕不执行任何操作
		$("div").animate({left:800}, 1000, "swing", function () {console.log("hello")});
	});
}); */
// 图片 width:540px height:470px
$(document).ready(function () {
	let $wrapper = $("#wrapper");
	let $point = $("#wrapper > ol > li");
	let $ul = $("#wrapper > ul");
	let width = 540;
	let $arrowLeft = $(".arrow > .left");
	let $arrowRight = $(".arrow > .right");
	var index = 0;
	
	// 圆点
	$point.click(function () {
		$(this).addClass("now").siblings().removeClass("now");
		index = $(this).index();
		$ul.animate({left : -index * width});
	});
	
	// 箭头
	$arrowRight.click(function () {
		if (index >= 7) {
			index = 0;
			$ul.css("left", 0);
		}
		index++;
		$ul.animate({left : -index * width});
	});
	$arrowLeft.click(function () {
		if (index <= 0) {
			index = 7;
			$ul.css("left", -index * width);
		}
		index--;
		$ul.animate({left : -index * width});
	});
});