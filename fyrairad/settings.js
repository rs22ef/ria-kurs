var FIR = FIR || {};
/*
  Function: changeSize
  changes the size of the board
  
  Function: changeColor
  changes the colors of the pieces
  
  Variables:
  
  sze - the model for sizes of the field
  colr - the model for the sets of colors
*/

FIR.size = Backbone.Model.extend({
	widthheight:10,
});

FIR.color = Backbone.Model.extend({
	player:'#ffffff',
	computer:'#ffffff'
});

FIR.changeSize = function() {
	FIR.sizeused = (++FIR.sizeused) % FIR.maxsizes;

	FIR.colr = FIR.colors.at(FIR.colorused);
	FIR.sze = FIR.sizes.at(FIR.sizeused);
	FIR.playercolor = FIR.colr.get('player');
	FIR.computercolor = FIR.colr.get('computer');
	FIR.fieldsize = FIR.sze.get('widthheight');
	
	FIR.updateSize();
}

FIR.changeColor = function() {
	FIR.colorused = (++FIR.colorused) % FIR.maxcolors;
	FIR.colr = FIR.colors.at(FIR.colorused);
	FIR.sze = FIR.sizes.at(FIR.sizeused);
	FIR.playercolor = FIR.colr.get('player');
	FIR.computercolor = FIR.colr.get('computer');
	FIR.fieldsize = FIR.sze.get('widthheight');
	
	FIR.updateColor();
}