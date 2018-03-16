//////    function reverse(tekst) {
//////        var result = "Akademia108";
//////        for (var i = tekst.length - 1; i >= 0; i--) {
//////            result += tekst[i];
//////        }
//////        return result;
//////    }
//////
//////    var r = reverse("Akademia108");
//////    console.log(r);
////
////// fibonacci
////
//////caly ciag fibonacciego
//////var fibonacci = [0, 1];
//////for (var i = fibonacci.length; i < 20; i++) {
//////    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
//////}
//////console.log(fibonacci);
////
//////wywolywanie wyniku
////
////function fibonacci(n) {
////    if (n <= 0) return 0;
////    if (n === 1) return 1;
////    return fibonacci(n - 1) + fibonacci(n - 2);
////}
////console.log(fibonacci(8));
////
////
////
////
////function sortujString(napis) {
////    var tekst = napis;
////    var string = [];
////    string = tekst.split("");
////    string.sort();
////    console.log(string.join(""));
////}
////
////sortujString("Akademia108");
////
////
////function sortString(napisZPosortowanymiLiterami) {
////    return napisZPosortowanymiLiterami.split("").sort().join("");
////}
////console.log(sortString("Akademia108"));
////
////
////
////
////function sumaIloczyn(tablica) {
////    suma = 0;
////    iloczyn = 1;
////    for (i = 0; i < tablica.length; i++) {
////        suma += tablica[i];
////        iloczyn *= tablica[i];
////    }
////    console.log("Suma wszystlich elementow tablicy wynosi: " + suma);
////    console.log("Iloczyn wszystkich elementow tablicy wynosi: " + iloczyn);
////
////}
////var tablica = [1, 2, 3, 4, 5, 6];
////sumaIloczyn(tablica);
////
//////Napisz funkcję ze zmiennymi lokalnymi, która policzy sumę i iloczyn elementów tablicy [1, 2, 3, 4, 5, 6]. Funkcja przyjmuje jeden parametr - ww. tablicę z liczbami. Funkcja nie zwraca nic. Funkcja wyświetla wyniki w konsoli.
////
//////Napisz funkcję ze zmiennymi lokalnymi, która liczy sumę kwadratów elementów tablicy [0,1,2,3,4,5]. Funkcja przyjmuje jeden parametr - w/w tablicę z liczbami. Funkcja zwraca sumę kwadratow. Wyświetl wynik działania funkcji w konsoli.
//////
//////Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it
//////
//////Podpowiedź przed wysłaniem zadania do sprawdzenia:
//////- użyj w zadaniu pętli, którą uważasz za słuszną i klasy Math.
////
////
////function sumaKwadratow(tablicaLiczb) {
////
////    var sumaKwadratowa = 0;
////    for (var i = 0; i < tablicaLiczb.length; i++) {
////        sumaKwadratowa += Math.pow(tablicaLiczb[i], 2);
////    }
////    console.log("Suma kwadratow elementow tablicy wynosi " + sumaKwadratowa);
////
////}
////
////sumaKwadratow([1, 2, 3, 4, 5]);
////
////
//
//
//// sortowanie bąbelkowe
//
//var elementyTablicy = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];
//
//function sortowanieBabelkowe(items) {
//    var length = items.length;
//    for (i = (length - 1); i >= 0; i--) {
//
//        for (j = (length - i); j > 0; j--) {
//
//            if (items[j] < items[j - 1]) {
//
//                var tmp = items[j];
//                items[j] = items[j - 1];
//                items[j - 1] = tmp;
//            }
//        }
//    }
//}
//
//sortowanieBabelkowe(elementyTablicy);
//console.log(elementyTablicy);



//obiekty ksiazka



class ksiazka {
    constructor(tytul, autor, Boolean) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = Boolean;
    }
    opiszKsiazke() {

        if (this.przeczytana === true) {
            console.log("Książka ma tytuł " + this.tytul + ", autorem jest " + this.autor + " i została przeczytana.");
        } else {
            console.log("Książka ma tytuł " + this.tytul + ", autorem jest " + this.autor + " i nie została przeczytana.");
        }
    }
}

var maleZycie = new ksiazka("Małe Życie", "Hanya Yanagihara", true);
var wzgorzePsow = new ksiazka("Wzgorze Psow", "Jakub Żulczyk", false);
var fridaKhaloPrywatnie = new ksiazka("Frida Khalo Prywatnie", "Suzanne Barbezat", false);

var ksiazki = [maleZycie, wzgorzePsow, fridaKhaloPrywatnie];


function iloscPrzeczytanych() {
    var iloscKsiazekPrzeczytanych = 0;

    for (var i = 0; i < ksiazki.length; i++) {
        if (ksiazki[i].przeczytana === true) {
            iloscKsiazekPrzeczytanych += ksiazki[i].przeczytana;
            ksiazki[i].opiszKsiazke();
        } else {
            ksiazki[i].opiszKsiazke();
        }
    }
    return (iloscKsiazekPrzeczytanych);
}

var wynikFunkcji = iloscPrzeczytanych(ksiazki);
console.log("Ilosć książek przeczytanych to " + wynikFunkcji);
wynikFunkcji
