// funkcja bez parametrow
function wyswietlWKonsoli() {
    console.log("AgnieszkaZuchora");
}

wyswietlWKonsoli();

//funkcja z parametrami

function wyswietlWKonsoliParami ( imie, nazwisko ) {
    console.log( imie + " " + nazwisko );
}
wyswietlWKonsoliParami( "Agnieszka", "Zuchora" );
wyswietlWKonsoliParami( "Agnieszka", "Zuchora" );
wyswietlWKonsoliParami( "Agnieszka", "Zuchora" );


//zwracanie wartosci przez funkcje

function obliczPodatek( kwota, procentPodatek ){
    var wynik = kwota * ( procentPodatek / 100 );
    return wynik.toFixed (2);
}

var obliczenia1 = obliczPodatek( 4990, 23);
console.log( "Wysokość obliczonego podatku wynosi: " + obliczenia1 );

var w = obliczPodatek( 1000, 10 );
var x = obliczPodatek( 4000, 10 );
var z = obliczPodatek( 1000, 10 );

console.log(w,x,z);