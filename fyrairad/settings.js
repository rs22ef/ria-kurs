/*
  Function: changeSize
  changes the size of the board
  calls updateSize
  
  Function: changeColor
  changes the colors of the pieces
  calls updateColor
  
  Variables:
  
  sze - the model for sizes of the field
  colr - the model for the sets of colors
*/

var size = Backbone.Model.extend({
	widthheight:10,
});

var color = Backbone.Model.extend({
	player:'#ffffff',
	computer:'#ffffff'
});

function changeSize() {
	sizeused = (++sizeused) % maxsizes;

	var colr = colors.at(colorused);
	var sze = sizes.at(sizeused);
	playercolor = colr.get('player');
	computercolor = colr.get('computer');
	fieldsize = sze.get('widthheight');
	
	updateSize();
}

function changeColor() {
	colorused = (++colorused) % maxcolors;
	var colr = colors.at(colorused);
	var sze = sizes.at(sizeused);
	playercolor = colr.get('player');
	computercolor = colr.get('computer');
	fieldsize = sze.get('widthheight');
	
	updateColor();
}