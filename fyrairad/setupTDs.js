/*
  Function: setupTDs
  Makes the TD elements inside field id tag clickable so you can click on them instead of the "rad x" button at the very top. 
  
*/

function setupTDs()
{
    //for loop closure counter
    var f_addpiece = function(a_row)
    {
        return function() { addPiece(a_row); }
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
            f_tds[j].onclick = f_addpiece(j + 1);
            
        }
    }
}