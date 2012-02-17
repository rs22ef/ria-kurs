/*
  Function: changeLastMove
  changes the last move
 */

function changeLastMove() {
	if (lastmove > 0) {

		piecenr = piecesinrow[lastmove-1];
	
		cellid = 'cell'+lastmove+piecenr;
	
		playerturn = !playerturn;
		piecesinrow[lastmove-1]--;
		lastmove = 0;
		
		var object = {};
		
		_.extend(object, Backbone.Events);
	
		object.on("changemove", function() {
	
			cell = document.getElementById(cellid);
			
			cell.removeAttribute('class');
			
		});
	
		object.trigger("changemove");
		
	} else {
		alert("Det går inte att ändra fler drag");
	}
	
}