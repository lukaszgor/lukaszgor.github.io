
    'use strict';

///reset---------------------------------------------------------------
var text = document.getElementById('xxx');
var button = document.getElementById('button');
var textarena = document.getElementById('results');
button.onclick = function() {
    text.value = '';
    textarena.value="";
}

	
//Działające cudowne!!!!/////////////////////////////////
$('form').submit(function() {
  
  console.log($(this).serializeArray());
  
  $('#results').text(JSON.stringify($(this).serializeArray()));
  return false;
});
//////////////////////////////////////


$(document).ready(function () {
        $('#desc').keyup(function(){
            $('#live-preview').html($(this).val());
        });

    });
$(document).ready(function () {
        $('#desc1').keyup(function(){
            $('#live-preview1').html($(this).val());
        });

    });
$(document).ready(function () {
        $('#desc2').keyup(function(){
            $('#live-preview2').html($(this).val());
        });

    });
///////////SELECT/////////////////////////////////////////////////
$( "#owncar" )
  .change(function() {
    var str = "";
    $( "#owncar option:selected" ).each(function() {
      str += $( this ).text() + " ";
    });
    $( "#radio" ).text( str );
  })
  .trigger( "change" );