// innerHTML - pobieranie

var parFirst = document.getElementById("parFirst");
//console.log( parFirst.innerHTML );

//console.log( parFirst.outerHTML );

//inner HTML - przypisanie wartosci
var mainHeader = document.querySelector("h1");
mainHeader.innerHTML = "<span>Nowa zawartość h1 wstawiona w span</span>";

// zmiana styli
mainHeader.style.color = "red";
mainHeader.style.backgroundColor ="black";

// przypisanie klasy
mainHeader.className = "headingtext";

// pobranie klas elementy
console.log( mainHeader.className );

// classList
mainHeader.classList.add( "nowa-klasa" );

//classList
mainHeader.classList.remove("headingtext");

