
$(function() {

//pants slider swiper
var typeLabel = ['501 Straight 1','501 Straight 2','501 Straight 3','501 Straight 1'];
var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    onSlideChangeEnd : function(swiperHere) {
    	var index = parseInt($('.swiper-wrapper .swiper-slide-active').data('swiper-slide-index'));
    	$('.type-label').text(typeLabel[index]);
    },
});
var swiperThread = new Swiper ('.swiper-container-thread', {
	loop: true,
	effect: 'fade',
});

var swiperColor = new Swiper ('.swiper-container-color', {
	loop: true,
	effect: 'fade',
});

// sticky pants
$(".sticky-pants").stick_in_parent({parent: '#result'});

// distress
var isNeedle = true;
var needleIndex = 1;
var cutterIndex = 0;
var needleMax = 3;
var cutterMax = 2;

$('.needle').on('click',function(){
	isNeedle = true;
	needleIndex = 1;
});

$('.cutter').on('click',function(){
	isNeedle = false;
	cutterIndex = 0;
});

$(".swipe-area").swipe( {
	swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
		if(direction == 'right') {
			if(isNeedle && needleIndex > 1){
				needleIndex--;
				needleSwap(needleIndex);
			}
			if(!isNeedle && cutterIndex > 1){
				cutterIndex--;
				cutterSwap(cutterIndex);
			}
		}
		else {
			if(isNeedle && needleIndex < needleMax){
				needleIndex++;
				needleSwap(needleIndex);
			}
			if(!isNeedle && cutterIndex < cutterMax){
				cutterIndex++;
				cutterSwap(cutterIndex);
			}
		}

	}
});

//color thread
$('#range-bright').rangeslider({polyfill: false}).on('input', function() {
	swiperColor.slideNext();
});
$('#range-fade').rangeslider({polyfill: false}).on('input', function() {
	swiperColor.slidePrev();
});
$('#range-thread').rangeslider({polyfill: false}).on('input', function() {
	swiperThread.slideNext();
});

//pocket
$('#range-pocket').rangeslider({polyfill: false}).on('input', function() {
	console.log(this.value);
});




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



