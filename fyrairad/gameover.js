/*
  Function: gameOver()
  if there are four pieces of the same color in a row, this should return true

  called by addPiece
  
  called by changeMove
  
  Variables:
  
  i - variable for counting vertical rows
  j - variable for counting horizontal rows
  
  Returns:
  
  true if one player has 4 pieces in a row, diagonally, horizontally or vertically,
  false otherwise
 */
var FIR = FIR || {};

FIR.gameOver = function() {
	FIR.endofgame = false;

	var i = 0;
	var j = 0;
	
	for (i=0;i<6;i++) {
		if (FIR.field[i][0] > 0) {
			if (FIR.field[i][0] == FIR.field[i][1] && FIR.field[i][0] == FIR.field[i][2] && FIR.field[i][0] == FIR.field[i][3]) {
				FIR.endofgame = true;
			}
		}
	}

	for (i=0;i<3;i++) {
		for (j=0;j<4;j++) {
			if (FIR.field[i][j] > 0) {
				if (FIR.field[i][j] == FIR.field[i+1][j] && FIR.field[i][j] == FIR.field[i+2][j] && FIR.field[i][j] == FIR.field[i+3][j]) {
					FIR.endofgame = true;
				}
			}
		}
	}

	for (i=0;i<3;i++) {
		if (FIR.field[i][0] > 0) {
			if (FIR.field[i][0] == FIR.field[i+1][1] && FIR.field[i][0] == FIR.field[i+2][2] && FIR.field[i][0] == FIR.field[i+3][3]) {
				FIR.endofgame = true;
			}
		}
	}
	
	for (i=3;i<6;i++) {
		if (FIR.field[i][0] > 0) {
			if (FIR.field[i][0] == FIR.field[i-1][1] && FIR.field[i][0] == FIR.field[i-2][2] && FIR.field[i][0] == FIR.field[i-3][3]) {
				FIR.endofgame = true;
			}
		}
	}
	
	return FIR.endofgame;
}