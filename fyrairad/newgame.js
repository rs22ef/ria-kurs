//Four In Row
var FIR = FIR || {};

/*
 Function: newGame
 sets some global variables at the beginning of the game

 Variables:

 colorused - if 0, user has red and computer green, if 1, user has yellow and computer blue
 sizeused - size of board
 maxsizes - total number of available sizes
 maxcolors - total number of available colors
 sizes - array of available sizes
 colors - array of available colors
 playerturn - if true, it's the 1st player's turn
 differentSize - if true, there are sizes loaded from localstorage
 lastmove - the row of the last move played
 field - array of squares in the field, if 0, no piece, if 1, user has piece, if 2, computer has piece
 piecesinrow - the number of pieces in each row
 */

FIR.newGame = function() {
    FIR.setupTDs();

    var sizeColl = Backbone.Collection.extend({
        localStorage : new Store("localSizes"),
        model : FIR.size
    });
    sizeColl.bind("add", function(model) {
        model.save();
    })
    FIR.sizes = new sizeColl;
    FIR.sizes.fetch();
    var colorColl = Backbone.Collection.extend({
        localStorage : new Store("localColors"),
        model : FIR.color
    });
    colorColl.bind("add", function(model) {
        model.save();
    });
    FIR.colors = new colorColl;
    FIR.colors.fetch();
    var differentSize;
    if(FIR.sizes.length == 0) {
        FIR.sizes.create({
            widthheight : 20
        });
        FIR.sizes.create({
            widthheight : 25
        });
        differentSize = false;
    } else {
        differentSize = true;
    }
    FIR.maxsizes = FIR.sizes.length;
    if(FIR.colors.length == 0) {
        FIR.colors.create({
            player : '#ff0000',
            computer : '#00ff00'
        });
        FIR.colors.create({
            player : '#ffff00',
            computer : '#0000ff'
        });
    }
    FIR.maxcolors = FIR.colors.length;
    FIR.colorused = 0;
    FIR.sizeused = 0;
    FIR.playerturn = true;
    FIR.lastmove = 0;
    FIR.field = new Array();
    for(var i = 0; i < 6; i++) {
        FIR.field[i] = new Array(0, 0, 0, 0)
    }
    FIR.piecesinrow = new Array();
    for(var i = 0; i < 6; i++) {
        FIR.piecesinrow[i] = 0;
    }
    if(differentSize) {
        var sze = FIR.sizes.at(FIR.sizeused);
        FIR.fieldsize = sze.get('widthheight');
        FIR.updateSize();
    }
};