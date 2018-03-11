//var zmiennaGlobalna = "Tak! Jestem zmienną globalną i jestem widoczna w funkcjach";
//
//function wyswietlZmienna() {
//    console.log(zmiennaGlobalna);
//    var zmiennaLokalna = "Tak! Zmienna lokalna to ja. Przestrzeń lokalna mnie nie dotyczy";
//}
//
//wyswietlZmienna();
//console.log( zmiennaLokalna );

var zmienna = "Zmienna globalna";

function pokazZmienna(){
    var zmienna ="Zmienna lokalna";
    console.log( zmienna );
}

//pokazZmienna();

console.log( zmienna );