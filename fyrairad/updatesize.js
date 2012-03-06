var FIR = FIR || {};
/*
  Function: updateSize
  updates sizes after size settings have been changed
  
  Variables:
  
  i - variable for counting vertical rows
  j - variable for counting horizontal rows
 */

FIR.updateSize = function() {
	
	var object = {};
	
	_.extend(object, Backbone.Events);

	object.on("setsize", function(msg) {

		var cell = document.getElementById(FIR.cellid);
		
		cell.setAttribute('style',msg);
		
	});
	
	for (var i = 0; i < 6; i++) {
		
		FIR.cellid = 'row'+(i+1);
		FIR.sizestring = 'padding-left:' + FIR.fieldsize + 'px;padding-right:' + FIR.fieldsize + 'px';
		object.trigger("setsize",FIR.sizestring);
		
		for (var j = 0; j < 4; j++) {

			FIR.cellid = 'cell'+(i+1)+(j+1);
			
			switch (FIR.field[i][j]) {
			case 0:	FIR.colorstring = 'padding:' + FIR.fieldsize + 'px';
					object.trigger("setsize",FIR.colorstring);
					break;
			case 1:	FIR.colorstring = 'padding:' + FIR.fieldsize + 'px;color:' + playercolor + ';background-color:' + playercolor;
					object.trigger("setsize",FIR.colorstring);
					break;
			case 2:	FIR.colorstring = 'padding:' + FIR.fieldsize + 'px;color:' + computercolor + ';background-color:' + computercolor;
					object.trigger("setsize",FIR.colorstring);
					break;
			}
		}
	}
}