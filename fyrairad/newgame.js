/*
  Function: newGame
  sets some variables
  
  Variables:
  
  colorused - if 0, user has red and computer green, if 1, user has yellow and computer blue
  sizeused - size of board
  maxsizes - total number of available sizes
  maxcolors - total number of available colors
  sizes - array of available sizes
  colors - array of available colors
  playerturn - if true, it's the 1st player's turn
  lastmove - the row of the last move played
  field - array of squares in the field, if 0, no piece, if 1, user has piece, if 2, computer has piece
  piecesinrow - the number of pieces in each row
*/

function newGame() {
	//sizes = new Array();
	//colors = new Array();
	sizeColl = Backbone.Collection.extend({
		localStorage:new Store("localSizes"),
		model:size
	});
	sizes = new sizeColl;
	sizes.fetch();
	colorColl = Backbone.Collection.extend({
		localStorage:new Store("localColors"),
		model:size
	});
	colors = new colorColl;
	/*sizes.push(new size({
		widthheight:20
	}));
	sizes.push(new size({
		widthheight:25
	}));*/
	//sizes.create doesn't work
	sizes.create(
		{widthheight:20}
	);
	sizes.create(
   		{widthheight:25}
   	);
	maxsizes = sizes.length;
	/*for (var i=0;i<maxsizes;i++) {
		size = sizes.at(i);
		size.save();
	}*/
	/*colors.push(new color({
		player:'#ff0000',
		computer:'#00ff00'
	}));
	colors.push(new color({
		player:'#ffff00',
		computer:'#0000ff'
	}));*/
	colors.create({
		player:'#ff0000',
		computer:'#00ff00'
	});
	colors.create({
		player:'#ffff00',
		computer:'#0000ff'
	});
	maxcolors = colors.length;
	colorused = 0;
	sizeused = 0;
	playerturn = true;
	lastmove = 0;
	field = new Array();
	for (var i = 0; i < 6; i++) {
		field[i] = new Array(0,0,0,0)
	}
	piecesinrow = new Array();
	for (var i = 0; i < 6; i++) {
		piecesinrow[i] = 0;
	}
}