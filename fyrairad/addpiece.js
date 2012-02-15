/*
   Function: addPiece(row)
   adds another piece
 */

function addPiece(row) {
	cellid = 'cell'+row+'1';
	colorstring = 'color'+color+'player';
	
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
}