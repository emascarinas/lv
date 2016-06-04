$(function() {

// connect
var social_arr = [];
var rate_arr = [
["EXCELENT",7],
["GOOD",5],
["OKAY",3],
["POOR",1]
];
console.log(rate_arr);
initSocial();
$('.social li').on('click',function(event){
	initSocial();
	var index = $('.social li').index(this);
	var classOn = 'social-' + (parseInt(index) + 1) + '-on';
	var classOff = 'social-' + (parseInt(index) + 1) + '-off';  
	
	rate(rate_arr[index]);

	$('.analyzebutton').css("background-color","#c60b2b");
	$('.analyzebutton').css("color","#fff");

	if($(this).hasClass(classOn)) {
		$(this).removeClass(classOn).addClass(classOff);
	}
	else {
		$(this).removeClass(classOff).addClass(classOn);
	}
});

$('.analyzebutton').on("click",function(){
	window.location.href = "result.html";	
});
function initSocial(){
	$( ".social li" ).each(function( index ) {
		$(this).removeClass("social-" + (index+1) + "-on").addClass("social-" + (index+1) + "-off");
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