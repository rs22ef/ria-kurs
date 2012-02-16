/*
  Function: changeSize
  changes the size of the board
  
  Function: changeColor
  changes the colors of the pieces
*/

function changeSize() {
	size = (++size) % 2;
	alert("storleksvariabel ändrad till " + size);
}

function changeColor() {
	color = (++color) % 2;
	alert("färgvariabel ändrad till " + color);
}