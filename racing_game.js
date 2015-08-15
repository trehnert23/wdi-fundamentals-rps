$(document).ready(function(){
	var pos1 = 0;
	var pos2 = 0;
	// $(".button").click(function(){
		// pos = pos + 2;
    	// $(".player1").css('margin-left', pos + 'em')
	// });
	var player1 = document.getElementById('player1');
	
	$(document).keydown(function(event) {
		switch (event.keyCode) {
			case 65:
				if(pos1<54.4){
					pos1 = pos1 + 2;
					$("#player1").css('margin-left', pos1 + 'em');
					break;
				}
				else{
					alert("Player 1 is the winner!");
				}
		};
		switch (event.keyCode) {
			case 76:
				if(pos2<54.4){
					pos2 = pos2 + 2;
					$("#player2").css('margin-left', pos2 + 'em');
					break;
				}
				else{
					alert("Player 2 is the winner!");
				}
		};
	});

});

54.4