var istniejacyWezel = document.getElementById("output");

//sprawdzem czy udało się go pobrać
console.log(istniejacyWezel);

//tworzę nowy element html
var newElement = document.createElement("p");

// tworzę treść do paragrafu
var newElementContent = document.createTextNode("Tutaj tworzę treść paragrafu, o!");

// wstawiam nowo utworzony tekst do nowo utworzonego paragrafu
newElement.appendChild(newElementContent);

// dodaje do pargarafu atrybut class='textpar'
newElement.setAttribute('class', 'textpar');

//console.log( newElement );

// wstawiam naz przygotowany paragraf do div#output
istniejacyWezel.appendChild(newElement);

console.log(istniejacyWezel);

// usuwanie elementow z dokumentu
istniejacyWezel.parentElement.removeChild(istniejacyWezel);

//usuwanie elementow z dokumentu
//document.getElementById("parFirst").removeChild( istniejacyWezel );


//insertBefore - wstawianie elementow przed czymś
var link = document.getElementsByClassName('superlink')[0];
var br = document.createElement("br");
link.parentElement.insertBefore( br, link.nextElementSibling );


//usuwanie atrybutow
link.removeAttribute('class');


