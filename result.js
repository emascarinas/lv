
$(function() {

// head slider
var showModal = true;
$(".modal-click").on("click", function(event){
	event.preventDefault();
	if(showModal)
		$('.modal').show()
	else
		$('.modal').hide()
	showModal = !showModal;

});

//pants slider swiper
var typeLabel = ['501 Straight 1','501 Straight 2','501 Straight 3','501 Straight 1'];
var mySwiper = new Swiper ('.swiper-container-type', {
	loop: true,
	// onSlideChangeEnd : function(swiperHere) {
	// 	var index = parseInt($('.swiper-wrapper .swiper-slide-active').data('swiper-slide-index'));
	// 	$('.type-label').text(typeLabel[index]);
	// },
});

var swiperColorB = new Swiper ('.swiper-container-color-b', {
	effect: 'fade',
});

// sticky pants
// $(".sticky-pants").stick_in_parent({parent: '#result'});

// distress
var swiperDistress = new Swiper ('.swiper-container-distress', {
	loop: true,
	effect: 'fade',
});



// var isNeedle = true;
// var needleIndex = 1;
// var cutterIndex = 0;
// var needleMax = 3;
// var cutterMax = 2;

// $('.needle').on('click',function(){
// 	isNeedle = true;
// 	needleIndex = 1;
// });

// $('.cutter').on('click',function(){
// 	isNeedle = false;
// 	cutterIndex = 0;
// });

// $(".swipe-area").swipe( {
// 	swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
// 		if(direction == 'right') {
// 			if(isNeedle && needleIndex > 1){
// 				needleIndex--;
// 				needleSwap(needleIndex);
// 			}
// 			if(!isNeedle && cutterIndex > 1){
// 				cutterIndex--;
// 				cutterSwap(cutterIndex);
// 			}
// 		}
// 		else {
// 			if(isNeedle && needleIndex < needleMax){
// 				needleIndex++;
// 				needleSwap(needleIndex);
// 			}
// 			if(!isNeedle && cutterIndex < cutterMax){
// 				cutterIndex++;
// 				cutterSwap(cutterIndex);
// 			}
// 		}

// 	}
// });

// $('.needleB').on('click',function(){
// 	swiperDistress.removeAllSlides();
// 	swiperDistress.prependSlide([
// 		'<div class="swiper-slide"><img width="325" src="images/distress_1.png"></div>', 
// 		'<div class="swiper-slide"><img width="325" src="images/distress_2.png"></div>',
// 		'<div class="swiper-slide"><img width="325" src="images/distress_3.png"></div>'
// 		]);
// });
// $('.cutterB').on('click',function(){
// 	swiperDistress.removeAllSlides();
// 	swiperDistress.prependSlide([
// 		'<div class="swiper-slide"><img width="325" src="images/distress_4.png"></div>', 
// 		'<div class="swiper-slide"><img width="325" src="images/distress_5.png"></div>'
// 		]);
// });

//color thread
var swiperThread = new Swiper ('.swiper-container-thread-b', {
	// loop: true,
	effect: 'fade',
});

$('#range-bright').rangeslider({polyfill: false}).on('input', function() {
	swiperColorB.slideTo(this.value);
});
$('#range-fade').rangeslider({polyfill: false}).on('input', function() {
	swiperColorB.slideTo(this.value);
});
$('#range-thread').rangeslider({polyfill: false}).on('input', function() {
	console.log(Math.round((this.value/100)*10));
	swiperThread.slideTo(Math.round((this.value/100)*10));
});

//pocket
var swiperPocket = new Swiper ('.swiper-container-pocket', {
	loop: true,
	effect: 'fade'
});

$('#range-pocket').rangeslider({polyfill: false}).on('input', function() {
	swiperPocket.slideNext();
});

// button

var swiperButton = new Swiper ('.swiper-container-button', {
	loop: true,
	effect: 'fade'
});
$(".button-clicks a").on("click", function(event){
	event.preventDefault();
	swiperButton.slideTo($(this).data("index"));
});

//3m

var swiperM3 = new Swiper ('.swiper-container-m3', {
	loop: true,
	effect: 'fade'
});
var active = true;
$(".m3-text").on("click", function(event){
	swiperM3.slideNext();
	active = !active;
	if(active) {
		$(this).html('DOUBLE TAP <br> TO DE-ACTIVATE');
	}else {
		$(this).html('DOUBLE TAP <br> TO ACTIVATE');

	}
});

//tab

$('#tab .edit').focusout(function() {
	$('#tab > span > span:nth-child(2)').text($(this).val());
});


});

//final

var showPay = true;
$(".pay").on("click", function(event){
	event.preventDefault();
	if(showPay)
		$('.paysheet').show()
	else
		$('.paysheet').hide()
	showPay = !showPay;

});



//helper functions

function needleSwap(index){
	removeClass();
	addNeedleClass(index);
}
function removeClass() {
	$('.scratch-area').removeClass (function (index, css) {
		return (css.match (/(^|\s)needle-\S+/g) || []).join(' ');
	});
	$('.scratch-area').removeClass (function (index, css) {
		return (css.match (/(^|\s)cutter-\S+/g) || []).join(' ');
	});
}
function addNeedleClass(index){
	$('.scratch-area').addClass('needle-' + index);
}
function cutterSwap(index){
	removeClass();
	addCutterClass(index);
}
function addCutterClass(index){
	$('.scratch-area').addClass('cutter-' + index);
}



