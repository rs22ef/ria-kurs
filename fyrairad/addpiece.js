/*
   Function: addPiece(row)
   adds another piece
   
   Parameters:

   row - the row in which the piece is added
   
   Variables:
   
   colr - object with the colors in use
   sze - object with the size in use
   winnernr - the number of the player who has won
 */

function addPiece(row) {
	
	if (gameOver()) {
		
		alert('Spelet är slut.');
		
	} else {
		
		piecenr = piecesinrow[row-1]+1;
		
		if (piecenr <= 4) {
	
			var colr = colors.at(colorused);
			var sze = sizes.at(sizeused);
			cellid = 'cell'+row+piecenr;
			field[row-1][piecenr-1] = (playerturn)? 1 : 2;
			fieldsize = sze.get('widthheight');
			if (playerturn) {
				playercolor = colr.get('player');
				colorstring = 'padding:' + fieldsize + 'px;color:' + playercolor + ';background-color:' + playercolor;
			} else {
				computercolor = colr.get('computer');
				colorstring = 'padding:' + fieldsize + 'px;color:' + computercolor + ';background-color:' + computercolor;
			}
			playerturn = !playerturn;
			lastmove = row;
			piecesinrow[row-1]++;
			
			var object = {};
			
			_.extend(object, Backbone.Events);
		
			object.on("setcolor", function(msg) {
		
				cell = document.getElementById(cellid);
				
				cell.setAttribute('style',msg);
				
			});
		
			object.trigger("setcolor",colorstring);
			
			if (gameOver()) {
			
				var winnernr = (playerturn)? 2 : 1;
				alert('Spelare ' + winnernr + ' har vunnit!');
				
			}
		
		} else {

			alert('Rad '+row+' är redan full');

		}
	}
}

function addPiece2(row, i) {

	if (3 - i == piecesinrow[row - 1]) {
	
		addPiece(row);

	} else {
	
		alert('fel ruta');

	}
}