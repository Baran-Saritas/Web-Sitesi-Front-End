var tikla = $("#ugug")
var cikar = $(".ulk")
var sayac = 1

tikla.click( () => {
  
   if(sayac++ %2 == 0) {
      cikar.attr("style","display:none !important")
      
   }
    else{
             cikar.attr("style","display:block!important")
         
      }
    
} )

console.log(cikar)