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
		field[lastmove-1][piecenr-1] = 0;
		lastmove = 0;
		
		var object = {};
		
		_.extend(object, Backbone.Events);
	
		object.on("changemove", function(msg) {
	
			cell = document.getElementById(cellid);
			
			//cell.removeAttribute('class');
			//cell.removeAttribute('style');
			cell.setAttribute('style',msg);
			
		});

		//var sze = sizes[size];
		var sze = sizes.at(sizeused);
		fieldsize = sze.get('widthheight');
		
		colorstring = 'padding:' + fieldsize + 'px';
		object.trigger("changemove",colorstring);
		
	} else {
		alert("Det går inte att ändra fler drag");
	}
	
}