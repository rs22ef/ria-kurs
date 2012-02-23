/*
  Function: gameOver()
  if there are four pieces of the same color in a row, this should return true
 */

function gameOver() {
	endofgame = false;

	//should be set to true if 4 in a row
	var i = 0;
	var j = 0;
	
	for (i=0;i<6;i++) {
		if (field[i][0] > 0) {
			if (field[i][0] == field[i][1] && field[i][0] == field[i][2] && field[i][0] == field[i][3]) {
				endofgame = true;
			}
		}
	}

	for (i=0;i<3;i++) {
		for (j=0;j<4;j++) {
			if (field[i][j] > 0) {
				if (field[i][j] == field[i+1][j] && field[i][j] == field[i+2][j] && field[i][j] == field[i+3][j]) {
					endofgame = true;
				}
			}
		}
	}

	for (i=0;i<3;i++) {
		if (field[i][0] > 0) {
			if (field[i][0] == field[i+1][1] && field[i][0] == field[i+2][2] && field[i][0] == field[i+3][3]) {
				endofgame = true;
			}
		}
	}
	
	for (i=3;i<6;i++) {
		if (field[i][0] > 0) {
			if (field[i][0] == field[i-1][1] && field[i][0] == field[i-2][2] && field[i][0] == field[i-3][3]) {
				endofgame = true;
			}
		}
	}
	
	return endofgame;
}