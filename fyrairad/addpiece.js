/*
   Function: addPiece
   adds another piece
   
   called by setupTDs
   
   calls gameOver
   
   Parameters:

   row - the row in which the piece is added
   i(optional) - the field in the row
   
   Variables:
   
   colr - object with the colors in use
   sze - object with the size in use
   winnernr - the number of the player who has won
 */

//Four In Row
var FIR = FIR || {};

FIR.addPiece = function(row, i) {
	
	if (i === undefined) {

		if (FIR.gameOver()) {
			
			alert('Spelet är slut.');
			
		} else {
			
			var piecenr = FIR.piecesinrow[row-1]+1;
			
			if (piecenr <= 4) {
		
				FIR.colr = FIR.colors.at(FIR.colorused);
				FIR.sze = FIR.sizes.at(FIR.sizeused);
				FIR.cellid = 'cell'+row+piecenr;
				FIR.field[row-1][piecenr-1] = (FIR.playerturn)? 1 : 2;
				FIR.fieldsize = FIR.sze.get('widthheight');
				if (FIR.playerturn) {
					FIR.playercolor = FIR.colr.get('player');
					FIR.colorstring = 'padding:' + FIR.fieldsize + 'px;color:' + FIR.playercolor + ';background-color:' + FIR.playercolor;
				} else {
					FIR.computercolor = FIR.colr.get('computer');
					FIR.colorstring = 'padding:' + FIR.fieldsize + 'px;color:' + FIR.computercolor + ';background-color:' + FIR.computercolor;
				}
				FIR.playerturn = !FIR.playerturn;
				FIR.lastmove = row;
				FIR.piecesinrow[row-1]++;
				
				var object = {};
				
				_.extend(object, Backbone.Events);
			
				object.on("setcolor", function(msg) {
			
					var cell = document.getElementById(FIR.cellid);
					
					cell.setAttribute('style',msg);
					
				});
			
				object.trigger("setcolor",FIR.colorstring);
				
				if (FIR.gameOver()) {
				
					var winnernr = (FIR.playerturn)? 2 : 1;
					alert('Spelare ' + winnernr + ' har vunnit!');
					
				}
			
			} else {

				alert('Rad '+row+' är redan full');

			}
		}
		
	} else {

		if (3 - i == FIR.piecesinrow[row - 1]) {
			
			FIR.addPiece(row);

		} else {
		
			alert('fel ruta');

		}
		
	}
	
};

