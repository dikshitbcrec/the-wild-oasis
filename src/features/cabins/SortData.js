export const sortItem=(filteredCabins,field,modifier)=>{
     
      
    if (filteredCabins==="undefined") 
    {
       
        filteredCabins.sort((a, b) => a.regular - b.regular);
     
    } else {
        // Handle the case where filteredCabins is not an array
        console.error("filteredCabins is not an array");
        console.log(filteredCabins);
        console.log(typeof(filteredCabins))
      }

}