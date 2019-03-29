
$(document).ready(function(){
	$('.carousel').carousel({
	  interval: 3000
	});
})
var num =1;
$('.shuliang .jia').click(function(){
	num++;
	$('.shuliang .shu').html(num);
	
})
$('.shuliang .jian').click(function(){
	
	if(num==1){
		num=1;
	}else{
		num--;
	}
	$('.shuliang .shu').html(num);
})
 num=0;
var timer = setInterval(zhizhen,30);
function zhizhen (){
	num++;
	if(num==100){
		num=0;
	}
	$('main[role="main"] .container-fluid>p>b').css("width",num+"%");
}
$('main[role="main"] .container-fluid').mouseenter(function(){
	clearTimeout(timer);
})
$('main[role="main"] .container-fluid').mouseleave(function(){
	num=0;
	timer=setInterval(zhizhen,30);
})
