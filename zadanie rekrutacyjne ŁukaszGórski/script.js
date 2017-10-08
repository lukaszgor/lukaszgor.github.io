'use strict';
//var time = 20; //jak długo
//var initialOffset = '440';
//var i = 1 
//var interval = setInterval(function() {
//    $('.circle_animation').css('stroke-dashoffset', initialOffset-(i*(initialOffset/time)));
//    $('h2').text(i+" sek").css({color:"white"});
//    
//    if (i == time) {
//        
//        
//        clearInterval(interval);
//        $("h2").hide("fast");
//    }
//    ++i;  
//}, 1000);
/////////////////////////////////////////////cos zmajstrowane 
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//  var time = 5;
//var initialOffset = '440';
//var i=1;
//
//
//var interval = setInterval(function(){ 
//    
//    $('.circle_animation').css('stroke-dashoffset',initialOffset-(i*(initialOffset/time)));
//    $('h2').text(i+" sek").css({color:"white"});
//    twojTimer() }, 1000);
//
//function twojTimer() {
// 
//  if (time >0){
//    time -=1;
//      
//      
//    //document.getElementById('timer').innerHTML = time;
//  }    else{
//      
//    clearInterval(interval);
//      $("h2").hide("fast");
//  }++i;
//   
// $('h2').text(time+" sek").css({color:"white"});
//    
//    
//}
////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////nowe
//
//function startTimer(duration, display) {
//    var timer = duration, minutes, seconds;
//    setInterval(function () {
//        minutes = parseInt(timer / 60, 10)
//        seconds = parseInt(timer % 60, 10);
//
//        minutes = minutes < 10 ? "0" + minutes : minutes;
//        seconds = seconds < 10 ? "0" + seconds : seconds;
//
//        display.textContent = minutes + ":" + seconds;
//
//        if (--timer < 0) {
//            timer = duration;
//        }
//    }, 1000);
//}
//
//window.onload = function () {
//    var fiveMinutes = 60 * 5,
//        display = document.querySelector('#time');
//    startTimer(fiveMinutes, display);
//};



////////////////////////////////////////////////////////////////////////////////////////////






var time = 7;
var initialOffset = '440';
var i=1;


var interval = setInterval(function(){ 
    
    $('.circle_animation').css('stroke-dashoffset',initialOffset-(i*(initialOffset/time)));
    $('h2').text(i).css({color:"white"});
    twojTimer() }, 1000);

function twojTimer(duration, display) {
 
  if (time >0){
    time -=1;
      var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
      
     //document.getElementById('timer').innerHTML = time;
  }    else{
      
    clearInterval(interval);
      $("h2").hide("fast");
  }++i;
   
// $('h2').text(time+" sek").css({color:"white"});
    
    
}
window.onload = function () {
    var fiveMinutes = 60 * 0.1,
        display = document.querySelector('#timer');
    twojTimer(fiveMinutes, display);

};



///////////////////////////////////////////////////////////////////////////////////////////////


//





