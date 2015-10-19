$(document).ready(function(){
	console.log("Hi!");
	// $("#container").append("<ol id='nameList'></ol>")
	// $el = $("#container").children().last();
	for(var i=0; i<10; i++){
		// $el.append("<li>Aron Thomas </li>");
		// $el.children().last().append("<button id='deleteButton'>Delete</button>")
		var index = i + 1;
		$('#container').append("<div class='name-entry highlight'></div>");
		$el = $('#container').children().last();
		$el.append("<p> " + index + ". Aron Thomas </p>");
		$el.append("<button class='changeButton'>Change</button>");
		

		var delayTime = i * 500;
		// $el.slideDown(2000, function(){
		// 	console.log("Hi: ", index);
		// });
		$el.hide()
			.delay(delayTime)
			.slideDown(2000);

		//slideUp
		//slideDown
		//slideToggle

	}

	$('#container').on('click','.changeButton',function(){
		// $(this).parent().toggleClass("selected highlight"); //toggles classes for the div
		$(this).parent().fadeOut(100).fadeIn(200, function(){
			// $(this).css({"background":"green"});
			$(this).animate({"background-color" : "green"})
		});
		//addClass
		//removeClass
		//toggleClass

		//class="some-thing"
		//id = "someThing"

		//hide
		//show
		//toggle

		//fadeIn
		//fadeOut
		//fadeToggle
	});
});