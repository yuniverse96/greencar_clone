$(document).ready(function() {


	
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
		'afterLoad': function () {
			
			if ($(this).hasClass("test")){
				$("#header").addClass("white");
			}else{
				$("#header").removeClass("white");
			}
		},	
	});


	$("#header .nav .menu .tabs > ul .tab_box").on("mouseover", function(){
		$("#header .nav .menu .tabs > ul .tab_box").removeClass("on");
		$("#header").addClass("on");
        $(this).addClass("on")
	});

	$("#header").mouseleave(function () {
		$("#header").removeClass("on");
		$("#header .nav .menu .tabs > ul .tab_box").removeClass("on");
	});


	

});