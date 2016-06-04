$(function() {
//home

$('#home .redbutton').on('click', function(){
	$('#home').hide();
	$('#connect').show();	
});

// connect
var social_arr = [];
var rate_arr = [
	["EXCELENT",7],
	["GOOD",5],
	["GOOD",5],
	["POOR",1]
];
console.log(rate_arr);
initSocial();
$('.social li').on('click',function(event){
	var index = $('.social li').index(this);
	
	rate(rate_arr[index]);

	$('.analyzebutton').css("background-color","#c60b2b");
	$('.analyzebutton').css("color","#fff");

	if(social_arr[index] == 0) {
		initSocial();
		$(this).css("background-image","url(images/social_" + (parseInt(index) + 1)  + "_on.jpg)");
		social_arr[index] = 1;
	}
	else {
		initSocial();
		$(this).css("background-image","url(images/social_" + (parseInt(index) + 1)  + ".jpg)");
		social_arr[index] = 0;	
	}
});
function initSocial(){
	$( ".social li" ).each(function( index ) {
		social_arr[index] = 0;
		$(this).css("background", "url(images/social_" + (parseInt(index) + 1)  + ".jpg) no-repeat");
		$(this).css("background-size", "75px 78px");
		$(this).css("width", "75px");
		$(this).css("height", "78px");
	});
}
function rate(arr){
	$('.rate h3').text(arr[0]);
	$('.rate .circle').removeClass("gray green");
	$('.rate .circle').addClass("gray");
	$('.rate .circle:lt('+ arr[1] +')').removeClass("gray");
	$('.rate .circle:lt('+ arr[1] +')').addClass("green");

}



});