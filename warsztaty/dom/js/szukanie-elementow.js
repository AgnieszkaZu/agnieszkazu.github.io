//pobarnie elenentu po id - tylko jeden elenent
//parametr w fetElementById bez #
var parFirst = document.getElementById("parFirst")
//console.log( parFirst );

//pobranie elementow po klasie - kolekcja elementow
//parametr w fetElementByClass bez .

var elementLink = document.getElementsByClassName("link");
console.log(elementLink);

//ilosc linkow
//console.log(elementLink.length);

//pobranie elementow po tagu
var elementTag = document.getElementsByTagName("p");
//console.log( elementTag );

//pobranie wszystkich elementow po selektorze .superlink - tutaj niezbędne jest podanie selektora klasy, jeśli pobieramy klasy lub id jeśli pobieramy po id
//query selektor zwraca tylko jeden element
var elementSuperlink = document.querySelectorAll(".superlink");
//console.log( elementSuperlink );


//pobranie pojedynczego elementu po selektorze id
var parSecond = document.querySelector("#parSecond");
//console.log( parSecond );


var mojeLinki = document.querySelectorAll("link");
//console.log( mojeLinki[1] );

//for ( var i = 0; i <mojeLinki.lenght; i++ ){
//    console.log( "To moj link nr " + (i + 1) );
//    console.log( mojeLinki[i] );
//    console.log("------------------");
//}


// pętla forEach działa na kolekcji poranej za pomocą metody document.querySelectorAll()
mojeLinki.forEach(function (element, index) {
    console.log(element);
});









