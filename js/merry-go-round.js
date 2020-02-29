$(function () {
	let $wrapper = $("#wrapper");
	let $arrow = $(".arrow");
	let arr = ["slide1", "slide2", "slide3", "slide4", "slide5"];
	let $arrRight = $("#arrRight");
	let $arrLeft = $("#arrLeft");
	let $li = $("#wrapper li");


	$wrapper.mouseenter(function () {
		$arrow.stop().fadeIn();
	});

	$wrapper.mouseleave(function () {
		$arrow.stop().fadeOut();
	});

	$arrRight.click(function () {
		//把数组的最后一项放在第一项
		let last = arr.pop();
		arr.unshift(last);

		$li.each(function (i, e) {
			//$(e).removeClass().addClass(arr[i]);
			e.className = arr[i];
		});
	});

	$arrLeft.click(function () {
		let first = arr.shift();
		arr.push(first);

		$li.each(function (i, e) {
			e.className = arr[i];
		})
	});
});