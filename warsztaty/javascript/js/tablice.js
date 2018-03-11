//var imiona = ['Adam', 'Marta', 'Paweł', 'Michał', 'Kasia', 'Agnieszka'];
//
//console.log( imiona[0], imiona[3] );

// dodawanie elementow do tablicy - na końcu
var imiona = ['Adam', 'Marta', 'Paweł', 'Michał', 'Kasia', 'Agnieszka'];

imiona[6] = "Mikołaj";
imiona[7] = "Kinga";

imiona.push("Kamil", "Krzystof", "Anna");
imiona.push("Marcin");

// usuwanie elentow tablicy z końca
imiona.pop();
imiona.pop();

// dodawanie elementow tablicy na początku

imiona.unshift("Sebastian");
imiona.unshift("Małgosia");

// usuwanie elementow z początku tablicy

imiona.shift();

console.log(imiona);


//// zwracanie usuniętego elementu
//var usunietyElement = imiona.shift();
//console.log( usunietyElement );

// sprawdzenie "długości" tablicy
var iloscElementowTablicy = imiona.length;
console.log( iloscElementowTablicy );
console.log( imiona );

// razbijanie tablicy na ciąg tekstowy
var elementyTablicyString = imiona.join(", ---- , ");
console.log( elementyTablicyString );



//// "odwrocenie tablicy"
//imiona.reverse();
//console.log( imiona );


//// sortowanie tablicy
//imiona.sort();
//console.log(imiona);


// sprawdzenie czy wartosc w tablicy istnieje
console.log( imiona.indexOf( "Sandra" ) );



