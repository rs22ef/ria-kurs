/*
  Function: addSize
  adds a size
  
  Function: removeSize
  removes a size
  
  Function: lighter
  makes the first player's pieces lighter
  
  Function: darker
  makes the second player's pieces darker
 */


function addSize() {
	var newSize = prompt('Ange ny storlek mellan 10 och 35');
	if (newSize != null) {
		
		var nsOK = true;
		//alert('lägger till storlek ' + newSize);
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
			//widthheight: newSize
		});
		
		ns.on("error", function(model, error) {
			alert(error);
			nsOK = false;
		});
		
		ns.set({
			widthheight: newSize
		})		
		/*sizes.add([
			{widthheight: newSize}
		])*/
		
		if(nsOK) {
			sizes.add(ns,{at:sizeused+1});
			maxsizes = sizes.length;
			sizeused = (++sizeused) % maxsizes;
			//sizeused = maxsizes - 1;
	
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
		//alert('tar bort storlek');
		var sze = sizes.at(sizeused);
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

function lighter() {
	//alert('gör pjäser ljusare');
	var colr = colors.at(colorused);

	//temporary solution
	colr.set('player','#ffffff')

	var colr = colors.at(colorused);
	var sze = sizes.at(sizeused);
	playercolor = colr.get('player');
	computercolor = colr.get('computer');
	fieldsize = sze.get('widthheight');
	
	updateColor();
}

function darker() {
	//alert('gör pjäser mörkare');
	var colr = colors.at(colorused);

	//temporary solution
	colr.set('computer','#000000')

	var colr = colors.at(colorused);
	var sze = sizes.at(sizeused);
	playercolor = colr.get('player');
	computercolor = colr.get('computer');
	fieldsize = sze.get('widthheight');
	
	updateColor();
}