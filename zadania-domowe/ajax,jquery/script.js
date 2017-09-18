'use strict';
$( document ).ready( function() {
    
    
    
    $( "button" ).click( function() {
    
    
$.getJSON('http://echo.jsontest.com/imie/Piotr/nazwisko/Lewinski/zawod/Programista/firma/Akademia108', function (data) {
// wyswietl w konsoli
console.log(data);
    
    
   $("#dane-programisty").append("<p>Imie: "+ data.imie+"</p>");    
   $("#dane-programisty").append("<p>nazwisko: "+ data.nazwisko+"</p>");    
   $("#dane-programisty").append("<p>zawod: "+ data.zawod+"</p>");    
   $("#dane-programisty").append("<p>firma: "+ data.firma+"</p>");    
       
    
} );

} );
 
    
    
    
});








