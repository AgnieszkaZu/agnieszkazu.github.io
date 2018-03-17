var parFist = document.getElementById("parFirst");
//console.log( parFirst );

// pobiera rodzica dla elementu #parFirst za pomoocą właściwości parentElement
//console.log( parFirst.parentElement );

//console.log( parFirst.childNodes );


//childNodes pobiera wszystkie węzły w tym także białe znaki między elementami jako "text" oraz komentarze
//console.log( parFirst.childNodes[0] );

//chidren pobierają tylko te węzły ktore są elementem html
console.log( parFirst.children );


// pobieram pierwsze dziecko elementu #parFirst
var pierwszeDziecko = parFirst.children [0];
console.log( pierwszeDziecko );

// pobieram następny węzeł dla pierwszeDziecko ktory jest elementem w relacji rodzeństwo
console.log( pierwszeDziecko.nextElementSibling );

//pobieram następny węzeł dla pierwszeDziecko niezależnie czy jest elementem html, textem czy komentarzem
console.log(pierwszeDziecko.nextSibling);

// lastChild pobiera ostatnie dzieco elementu niezależnie czy jest elementem html, textem czy komentarzem
var ostatnieDziecko = parFirst.lastChild;

// lastElementChild pobiera statnie dziecko ktore jest elementem html
var ostatnieDziecko = parFirst.lastElementChild;

//console.log( ostatnieDziecko);

//console.log( ostatnieDziecko.previousElementSibling);










