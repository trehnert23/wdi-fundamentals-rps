function isEmpty() {
	if(onBlue())||(onGreen()) {
		return true;
	}
	else {
		return false;
	}
}

function moveLeft(num) {
  $(".instructions").append("<div>moveLeft</div>");
  if(kyrel.x > 0)&&(num>0) {
    kyrel.x = kyrel.x - num;
    updateRow();
  }
}

function moveRight(num) {
  $(".instructions").append("<div>moveRight</div>");
  if(kyrel.x < row.x - num) {
    kyrel.x = kyrel.x + num;
    updateRow();
  }
}

function move(dir,num) {
	if(dir==='r'){
		kyrel.x = kyrel.x + num;
		updateRow();	
	}
	else if(dir==='l') {
		kyrel.x = kyrel.x - num;
		updateRow();
	};
}

function initializeRow(num) {
	var row = num;
    for(var j=0; j<row.num; j++) {
      var cell = $("tr").find("td").eq(j);
      if(initial_state[j] == 'b') {
        cell.html('<div class="dot dot-blue"></div>')
        cell.find('.dot').css('background', colors.blue);
      } else if(initial_state[j] == 'g') {
        cell.html('<div class="dot dot-green"></div>')
        cell.find('.dot').css('background', colors.green);
      } else {
        cell.find(".dot").remove();
      }
    }
}























