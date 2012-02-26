/*
  Function: updateColor
  updates colors after color settings have been changed
  
  Variables:
  
  i - variable for counting vertical rows
  j - variable for counting horizontal rows
 */

function updateColor() {
	
	var object = {};
	
	_.extend(object, Backbone.Events);

	object.on("setcolor", function(msg) {

		cell = document.getElementById(cellid);
		
		cell.setAttribute('style',msg);
		
	});
	
	for (var i = 0; i < 6; i++) {
		for (var j = 0; j < 4; j++) {

			cellid = 'cell'+(i+1)+(j+1);
			
			switch (field[i][j]) {
			case 0:break;
			case 1:	colorstring = 'padding:' + fieldsize + 'px;color:' + playercolor + ';background-color:' + playercolor;
					object.trigger("setcolor",colorstring);
					break;
			case 2:	colorstring = 'padding:' + fieldsize + 'px;color:' + computercolor + ';background-color:' + computercolor;
					object.trigger("setcolor",colorstring);
					break;
			}
		}
	}
}