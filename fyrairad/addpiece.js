/*
   Function: addPiece(row)
   adds another piece
 */

function addPiece(row) {
	piecenr = piecesinrow[row-1]+1;
	
	if (piecenr <= 4) {

		cellid = 'cell'+row+piecenr;
		if (playerturn) {
			colorstring = 'color'+color+'player';
		} else {
			colorstring = 'color'+color+'computer';
		}
		playerturn = !playerturn;
		lastmove = row;
		piecesinrow[row-1]++;
		
		var object = {};
		
		_.extend(object, Backbone.Events);
	
		object.on("setcolor", function(msg) {
	
			cell = document.getElementById(cellid);
			
			cell.setAttribute('class',msg);
			
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