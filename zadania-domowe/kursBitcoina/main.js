'use strict';
var oldValueBuy = 0;
var oldValueSell = 0;

$(document).ready(function () {




    function no() {

        $.getJSON('https://blockchain.info/pl/ticker', function (date) {
            // wyswietl w konsoli
            console.log(date);



            //    
            oldValueBuy = parseInt(date.PLN.buy);
            oldValueSell = parseInt(date.PLN.sell);
            
            $("#kurs1").text(oldValueBuy);
            $("#kurs2").text(oldValueSell);            
            
            //    
            console.log("Zmiana buy: " + (parseInt(date.PLN.buy) - oldValueBuy))
            console.log("Zmiana sell: " + (date.PLN.sell - oldValueSell))


        });
    }


    window.setInterval(no, 5000);








    ////////////////////////////////////////////////////5sekund
//    function sek5() {
//
//        $("jeden").click(function () {
//
//
//            $.getJSON('https://blockchain.info/pl/ticker', function (data) {
//                // wyswietl w konsoli
//                console.log(data);
//
//
//                $("#kurs1").text("Kupno: " + date.PLN.buy);
//                $("#kurs2").text("Sprzedaż: " + date.PLN.sell);
//
//
//
//            });
//
//        });
//    }

//
//    sek5()
//    window.setInterval(sek5, 5000);
//    //////////////////////////////////////////////////10sekund
//
//    function sek10() {
//
//        $("dwa").click(function () {
//            window.clearInterval()
//
//            $.getJSON('https://blockchain.info/pl/ticker', function (data) {
//                // wyswietl w konsoli
//                console.log(data);
//
//
//                $("#kurs1").text("Kupno: " + date.PLN.buy);
//                $("#kurs2").text("Sprzedaż: " + date.PLN.sell);
//
//
//
//            });
//
//        });
//    }
//
//
//    sek10()
//    window.setInterval(sek10, 10000);
//
//
//
//
//
//
//
//
//
//    /////////////////////////////////////////////////////30sekund
//
//
//    function sek30() {
//
//        $("trzy").click(function () {
//            window.clearInterval()
//
//            $.getJSON('https://blockchain.info/pl/ticker', function (data) {
//                // wyswietl w konsoli
//                console.log(data);
//
//
//                $("#kurs1").text("Kupno: " + date.PLN.buy);
//                $("#kurs2").text("Sprzedaż: " + date.PLN.sell);
//
//
//
//            });
//
//        });
//    }
//
//
//    sek30()
//    window.setInterval(sek30, 30000);
//
//
//
//
//
//
//    /////////////////////////////////////////////////////60sekund
//
//
//    function sek60() {
//
//        $("trzy").click(function () {
//            window.clearInterval()
//
//            $.getJSON('https://blockchain.info/pl/ticker', function (data) {
//                // wyswietl w konsoli
//                console.log(data);
//
//
//                $("#kurs1").text("Kupno: " + date.PLN.buy);
//                $("#kurs2").text("Sprzedaż: " + date.PLN.sell);
//
//
//
//            });
//
//        });
//    }
//
//
//    sek60()
//    window.setInterval(sek60, 60000);



});