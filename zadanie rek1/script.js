'use strict';
//var time = 20; //jak długo
//var initialOffset = '440';
//var i = 1 
//var interval = setInterval(function() {
//    $('.circle_animation').css('stroke-dashoffset', initialOffset-(i*(initialOffset/time)));
//    $('h2').text(i+" sek").css({color:"white"});
//    
//    if (i == time) {
//        clearInterval(interval);
//        $("h2").hide("fast");
//    }
//    ++i;  
//}, 1000);
/////////////////////////////////////////////cos zmajstrowane 
 var time = 5;
var initialOffset = '440';
var i=1;

var interval = setInterval(function(){ 
    $('.circle_animation').css('stroke-dashoffset', initialOffset-(i*(initialOffset/time)));
    $('h2').text(i+" sek").css({color:"white"});
    twojTimer() }, 1000);

function twojTimer() {
  
  if (time > 0) {
    time -= 1;
//    document.getElementById('timer').innerHTML = time;
  }    else {
    clearInterval(interval);
      $("h2").hide("fast");
  }++i;
   
 $('h2').text(time+" sek").css({color:"white"});
}
