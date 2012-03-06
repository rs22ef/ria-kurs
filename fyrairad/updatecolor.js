var FIR = FIR || {};
/*
  Function: updateColor
  updates colors after color settings have been changed
  
  Variables:
  
  i - variable for counting vertical rows
  j - variable for counting horizontal rows
 */

FIR.updateColor = function() {
	
	var object = {};
	
	_.extend(object, Backbone.Events);

	object.on("setcolor", function(msg) {

		cell = document.getElementById(FIR.cellid);
		
		cell.setAttribute('style',msg);
		
	});
	
	for (var i = 0; i < 6; i++) {
		for (var j = 0; j < 4; j++) {

			FIR.cellid = 'cell'+(i+1)+(j+1);
			
			switch (FIR.field[i][j]) {
			case 0:break;
			case 1:	FIR.colorstring = 'padding:' + FIR.fieldsize + 'px;color:' + FIR.playercolor + ';background-color:' + FIR.playercolor;
					object.trigger("setcolor",FIR.colorstring);
					break;
			case 2:	FIR.colorstring = 'padding:' + FIR.fieldsize + 'px;color:' + FIR.computercolor + ';background-color:' + FIR.computercolor;
					object.trigger("setcolor",FIR.colorstring);
					break;
			}
		}
	}
}