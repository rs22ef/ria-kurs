/*
  Function: changeLastMove
  changes the last move
  
  calls gameOver
  
  Variables:
  
  sze - object with the size in use
 */
var FIR = FIR || {};

FIR.changeLastMove = function() {
	if (FIR.lastmove > 0) {

		if (FIR.gameOver()) {
			
			alert('Spelet är slut');
			
		} else {
			
			var piecenr = FIR.piecesinrow[FIR.lastmove-1];
		
			FIR.cellid = 'cell'+FIR.lastmove+piecenr;
		
			FIR.playerturn = !FIR.playerturn;
			FIR.piecesinrow[lastmove-1]--;
			FIR.field[FIR.lastmove-1][piecenr-1] = 0;
			FIR.lastmove = 0;
			
			var object = {};
			
			_.extend(object, Backbone.Events);
		
			object.on("changemove", function(msg) {
		
				var cell = document.getElementById(FIR.cellid);
				
				cell.setAttribute('style',msg);
				
			});
	
			FIR.sze = FIR.sizes.at(FIR.sizeused);
			FIR.fieldsize = FIR.sze.get('widthheight');
			
			FIR.colorstring = 'padding:' + FIR.fieldsize + 'px';
			object.trigger("changemove",FIR.colorstring);
		}
		
	} else {
		alert("Det går inte att ändra fler drag");
	}
	
}