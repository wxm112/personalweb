$(document).ready(function(){
	$("#content-experience").hide();
	$(".menu").mouseover(function(){
		$(this).addClass("hover");
	});
	$(".menu").mouseout(function(){
		$(this).removeClass("hover");
	});
	$("#click-profile").click(function(){
		$(this).addClass("click");
		$("#click-experience").removeClass("click");
		$("#content-experience").hide();
		$("#content-profile").show();
	});
	$("#click-experience").click(function(){
		$(this).addClass("click");
		$("#click-profile").removeClass("click");
		$("#content-profile").hide();
		$("#content-experience").show();
	});
});

