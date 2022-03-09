Array.prototype.includeCi = function(search) {

    if( this.find((target)=> target.toLowerCase() === search.toLowerCase()) ) {
    
        return true
    }
   else {

    return false;
   }
}

const dizi = [" musa", "musa "," MUSA","mus a","2mUsA","ali","msa1","AhmeT","msa1","MuSa","musa","MUSA"]  
// yukaridaki dizide true sonucu verecek olanlar :"MuSa","musa","MUSA"

console.log(dizi.includeCi("musa"))