var FIR = FIR || {};
/*
  Function: setupTDs
  Makes the TD elements inside field id tag clickable so you can click on them instead of the "rad x" button at the very top. 
  
*/

FIR.setupTDs = function()
{
    //for loop closure counter
    var f_addpiece = function(a_row, i)
    {
        return function() { FIR.addPiece2(a_row, i); }
    }    

    var f_fieldTable = document.getElementById("field");

    var f_trs = f_fieldTable.getElementsByTagName("tr");    
    var f_tds = null;
    for (var i = 0; i < f_trs.length; i++) 
    {
        f_tds = f_trs[i].getElementsByTagName("td");
        for (var j = 0; j < f_tds.length; j++) 
        {            

            //Row + 1 as the row index is 1 -> n
            f_tds[j].onclick = f_addpiece(j + 1, i);
            
        }
    }
}