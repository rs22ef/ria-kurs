/*
  Function: changeSize
  changes the size of the board
  
  Function: changeColor
  changes the colors of the pieces
  
  Variables:
  
  size - the model for sizes of the field
  color - the model for the sets of colors
*/

var size = Backbone.Model.extend({
	widthheight:10,
	validate:function(attrs) {
		if (parseInt(widthheight) == NaN) {
			return 'var god ange ett nummer';
		}
		if (parseInt(widthheight) < 10) {
			return 'numret måste vara minst 10';
		}
		if (parseInt(widthheight) > 35) {
			return 'numret måste vara högst 35';
		}
	}
});

var color = Backbone.Model.extend({
	player:'#ffffff',//0xffffff,
	computer:'#ffffff'//0xffffff
});

function changeSize() {
	sizeused = (++sizeused) % maxsizes;
	//sizestring = 'size' + size;
	//alert("storleksvariabel ändrad till " + size);

/*	//temporary solution
	var object = {};
	
	_.extend(object, Backbone.Events);

	object.on("setsize", function(msg) {

		cell1 = document.getElementById('top');
		
		cell1.setAttribute('class',msg);
		
		cell2 = document.getElementById('field');
		
		cell2.setAttribute('class',msg);
		
	});

	object.trigger("setsize",sizestring);*/
	
	//var colr = colors[color];
	var colr = colors.at(colorused);
	//var sze = sizes[size];
	var sze = sizes.at(sizeused);
	playercolor = colr.get('player');
	computercolor = colr.get('computer');
	fieldsize = sze.get('widthheight');
	
	updateSize();
}

function changeColor() {
	colorused = (++colorused) % maxcolors;
	//alert("färgvariabel ändrad till " + color);
	
	//var colr = colors[color];
	var colr = colors.at(colorused);
	//var sze = sizes[size];
	var sze = sizes.at(sizeused);
	playercolor = colr.get('player');
	computercolor = colr.get('computer');
	fieldsize = sze.get('widthheight');
	
	updateColor();
}