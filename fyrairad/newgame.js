/*
  Function: newGame
  sets some variables
  
  Variables:
  
  color - if 0, user has red and computer green
  size - size of board
  playerturn - if true, it's the 1st player's turn
  lastmove - the row of the last move played
  piecesinrow - the number of pieces in each row
*/

function newGame() {
	color = 0;
	size = 0;
	playerturn = true;
	lastmove = 0;
	piecesinrow = new Array();
	for (var i = 0; i < 6; i++) {
		piecesinrow[i] = 0;
	}
}