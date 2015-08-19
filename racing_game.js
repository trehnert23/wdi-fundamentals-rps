$(document).ready(function(){
	var pos1 = 0;
	var pos2 = 0;
	var player1 = document.getElementById('player1');
	
	$(document).keydown(function(event) {
		switch (event.keyCode) {
			case 65:
				if(pos1<52.51){
					pos1 = pos1 + 1.5;
					$("#player1").css('margin-left', pos1 + 'em');
					break;
				}
				else{
					alert("Player 1 is the winner!");
				}
		};
		switch (event.keyCode) {
			case 76:
				if(pos2<52.51){
					pos2 = pos2 + 1.5;
					$("#player2").css('margin-left', pos2 + 'em');
					break;
				}
				else{
					alert("Player 2 is the winner!");
				}
		};
	});

});
