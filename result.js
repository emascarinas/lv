
$(function() {

	var typeLabel = ['501 Straight 1','501 Straight 2','501 Straight 3','501 Straight 1']
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
	$(".sticky-pants").stick_in_parent();



});

