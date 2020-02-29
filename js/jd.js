$(document).ready(function () {
	// 1. 点击右箭头，让当前图片的下一张图片慢慢的显示，让其他图片慢慢隐藏
	// 1. 点击左箭头，让当前图片的上一张图片慢慢的显示，让其他图片慢慢隐藏
	let $arrowLeft = $(".arrow .left");
	let $arrowRight = $(".arrow .right");
	let $li = $("#wrapper>ul>li");
	let index = 0;

	$arrowRight.click(function () {
		index ++;
		if (index > 6) {
			index = 0;
		}
		$li.eq(index).fadeIn(500).siblings().fadeOut(500);
	});

	$arrowLeft.click(function () {
		index --;
		if (index < 0) {
			index = 6;
		}
		$li.eq(index).fadeIn(500).siblings().fadeOut(500);
	});
});