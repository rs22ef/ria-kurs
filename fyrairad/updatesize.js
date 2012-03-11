/*
  Function: updateSize
  updates sizes after size settings have been changed
  called by changeSize in settings.js
  called by addSize in extras.js
  called by removeSize in extras.js
  
  Variables:
  
  i - variable for counting vertical rows
  j - variable for counting horizontal rows
 */

function updateSize() {
	
	var object = {};
	
	_.extend(object, Backbone.Events);

	object.on("setsize", function(msg) {

		cell = document.getElementById(cellid);
		
		cell.setAttribute('style',msg);
		
	});
	
	for (var i = 0; i < 6; i++) {
		
		cellid = 'row'+(i+1);
		sizestring = 'padding-left:' + fieldsize + 'px;padding-right:' + fieldsize + 'px';
		object.trigger("setsize",sizestring);
		
		for (var j = 0; j < 4; j++) {

			cellid = 'cell'+(i+1)+(j+1);
			
			switch (field[i][j]) {
			case 0:	colorstring = 'padding:' + fieldsize + 'px';
					object.trigger("setsize",colorstring);
					break;
			case 1:	colorstring = 'padding:' + fieldsize + 'px;color:' + playercolor + ';background-color:' + playercolor;
					object.trigger("setsize",colorstring);
					break;
			case 2:	colorstring = 'padding:' + fieldsize + 'px;color:' + computercolor + ';background-color:' + computercolor;
					object.trigger("setsize",colorstring);
					break;
			}
		}
	}
}