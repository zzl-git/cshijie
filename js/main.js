
$(document).ready(function(){
	$('.carousel').carousel({
	  interval: 1000
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
