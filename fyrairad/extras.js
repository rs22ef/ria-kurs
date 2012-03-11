/*
  Function: addSize
  adds a size
  calls updateSize
  
  Function: removeSize
  removes a size
  calls updateSize
  
  Function: resetColors
  resets the colors to original values
  calls updateColor
  
  Function: lighter
  makes the first player's pieces lighter
  calls updateColor
  
  Function: darker
  makes the second player's pieces darker
  calls updateColor
 */


function addSize() {
	var newSize = prompt('Ange ny storlek mellan 10 och 35');
	if (newSize != null) {
		
		var nsOK = true;
		var size = Backbone.Model.extend({
			validate:function(attrs) {
				if (isNaN(parseInt(attrs.widthheight))) {
					return 'var god ange ett nummer';
				}
				if (parseInt(attrs.widthheight) < 10) {
					return 'numret måste vara minst 10';
				}
				if (parseInt(attrs.widthheight) > 35) {
					return 'numret måste vara högst 35';
				}
			}
		});
		var ns = new size({
		});
		
		ns.on("error", function(model, error) {
			alert(error);
			nsOK = false;
		});
		
		ns.set({
			widthheight: newSize
		})		
		
		if(nsOK) {
			sizes.add(ns,{at:sizeused+1});
			ns.save();
			maxsizes = sizes.length;
			sizeused = (++sizeused) % maxsizes;
	
			var colr = colors.at(colorused);
			var sze = sizes.at(sizeused);
			playercolor = colr.get('player');
			computercolor = colr.get('computer');
			fieldsize = sze.get('widthheight');
			
			updateSize();
		}
	}
}

function removeSize() {
	if (sizes.length == 1) {
		alert('den sista storleken kan inte tas bort')
	} else {
		var sze = sizes.at(sizeused);
		sze.destroy();
		sizes.remove(sze);
		maxsizes = sizes.length;
		sizeused = sizeused % maxsizes;

		var colr = colors.at(colorused);
		var sze = sizes.at(sizeused);
		playercolor = colr.get('player');
		computercolor = colr.get('computer');
		fieldsize = sze.get('widthheight');
		
		updateSize();
	}
}

function resetColors() {
	
	colr = colors.at(0);
	colr.save({
		player:'#ff0000',
		computer:'#00ff00'
	});
	colr = colors.at(1);
	colr.save({
		player:'#ffff00',
		computer:'#0000ff'
	});
	
	var colr = colors.at(colorused);
	var sze = sizes.at(sizeused);
	playercolor = colr.get('player');
	computercolor = colr.get('computer');
	fieldsize = sze.get('widthheight');
	
	updateColor();
}

function lighter() {
	var colr = colors.at(colorused);

	var oldcolor = colr.get('player');
	var newcolor = '#';
	for (var cl = 1; cl < 7; cl = cl + 2) {

		var colchar = oldcolor.charAt(cl);
		switch (colchar) {
		case '0':
		case '1':
		case '2':
		case '3':
			newcolor += '55';break;
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
			newcolor += 'aa';break;
		case '9':
		case 'a':
			newcolor += 'cc';break;
		case 'b':
		case 'c':
			newcolor += 'dd';break;
		case 'd':
		case 'e':
			newcolor += 'ee';break;
		case 'f':
			newcolor += 'ff';break;
		}
	}
	
	colr.save({player: newcolor});

	var colr = colors.at(colorused);
	var sze = sizes.at(sizeused);
	playercolor = colr.get('player');
	computercolor = colr.get('computer');
	fieldsize = sze.get('widthheight');
	
	updateColor();
}

function darker() {
	var colr = colors.at(colorused);

	var oldcolor = colr.get('computer');
	var newcolor = '#';
	for (var cl = 1; cl < 7; cl = cl + 2) {

		var colchar = oldcolor.charAt(cl);
		switch (colchar) {
		case 'f':
		case 'e':
		case 'd':
		case 'c':
			newcolor += 'aa';break;
		case 'b':
		case 'a':
		case '9':
		case '8':
		case '7':
			newcolor += '55';break;
		case '6':
		case '5':
			newcolor += '33';break;
		case '4':
		case '3':
			newcolor += '22';break;
		case '2':
		case '1':
			newcolor += '11';break;
		case '0':
			newcolor += '00';break;
		}
	}
	
	colr.save({computer: newcolor});

	var colr = colors.at(colorused);
	var sze = sizes.at(sizeused);
	playercolor = colr.get('player');
	computercolor = colr.get('computer');
	fieldsize = sze.get('widthheight');
	
	updateColor();
}