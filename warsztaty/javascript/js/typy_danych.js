//typ liczbowy - można wykonywać działania arytmetyczne

var wyplata = 4500;
var premia = 850;
var suma = wyplata + premia;
//console.log( suma );
console.log(typeof wyplata);

//typ łańcuchowy - string (znak plus łączy stringi, czyli działa nieco inaczej niż w przypadku typu liczbowego)

var strWyplata = "4500\n";
var strPremia = "\"850\"";
var strSuma = strWyplata + strPremia;
//console.log( typeof strSuma );
//console.log( strSuma);


var czyJestWiosna = true;

if( czyJestWiosna ) {
    console.log("Tak, już jest wiosna");
}    else {
        console.log("Nie, jeszcze trwa Zima");
    }
//console.log( typeof czyJestWiosna );

// typy specjalne
var zmiennaTylkoZadeklarowana;
console.log( zmiennaTylkoZadeklarowana );

var zmiennaNull = null;
console.log( zmiennaNull );

