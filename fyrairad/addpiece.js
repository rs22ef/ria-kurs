/*
   Function: addPiece(row)
   adds another piece
   
   Variables:
   
   row - the row in which the piece is added
   colr - object with the colors in use
 */

function addPiece(row) {
	piecenr = piecesinrow[row-1]+1;
	
	if (piecenr <= 4) {

		var colr = colors[color];
		cellid = 'cell'+row+piecenr;
		field[row-1][piecenr-1] = (playerturn)? 1 : 2;
		if (playerturn) {
			playercolor = colr.get('player');
			//colorstring = 'color'+color+'player';
			colorstring = 'color:' + playercolor + ';background-color:' + playercolor;
		} else {
			computercolor = colr.get('computer');
			//colorstring = 'color'+color+'computer';
			colorstring = 'color:' + computercolor + ';background-color:' + computercolor;
		}
		playerturn = !playerturn;
		lastmove = row;
		piecesinrow[row-1]++;
		
		var object = {};
		
		_.extend(object, Backbone.Events);
	
		object.on("setcolor", function(msg) {
	
			cell = document.getElementById(cellid);
			
			//cell.setAttribute('class',msg);
			cell.setAttribute('style',msg);
			
	/*		if (gameOver()) {
				alert('slut');
			} else {
				alert('inte slut');
			}*/
	
		});
	
		object.trigger("setcolor",colorstring);
	
	} else {
		alert('Rad '+row+' är redan full');
	}
}