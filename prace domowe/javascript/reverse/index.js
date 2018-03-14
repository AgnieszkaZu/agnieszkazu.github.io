//    function reverse(tekst) {
//        var result = "Akademia108";
//        for (var i = tekst.length - 1; i >= 0; i--) {
//            result += tekst[i];
//        }
//        return result;
//    }
//
//    var r = reverse("Akademia108");
//    console.log(r);

// fibonacci

var fibonacci = [0, 1];
for (var i = fibonacci.length; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
console.log(fibonacci);



function sortujString(napis) {
    var tekst = napis;
    var string = [];
    string = tekst.split("");
    string.sort();
    console.log(string.join(""));
}

sortujString("Akademia108");


function sortString(napisZPosortowanymiLiterami) {
    return napisZPosortowanymiLiterami.split("").sort().join("");
}
console.log(sortString("Akademia108"));




function sumaIloczyn(tablica){
    suma = 0;
    iloczyn = 1;
    for ( i = 0; i<tablica.length; i++ ) { 
    suma += tablica[i];
    iloczyn *= tablica [i];
    }
    console.log("Suma wszystlich elementow tablicy wynosi: " + suma);
    console.log("Iloczyn wszystkich elementow tablicy wynosi: " + iloczyn);
    
}
var tablica = [1, 2, 3, 4, 5, 6];
sumaIloczyn(tablica);

//Napisz funkcję ze zmiennymi lokalnymi, która policzy sumę i iloczyn elementów tablicy [1, 2, 3, 4, 5, 6]. Funkcja przyjmuje jeden parametr - ww. tablicę z liczbami. Funkcja nie zwraca nic. Funkcja wyświetla wyniki w konsoli.