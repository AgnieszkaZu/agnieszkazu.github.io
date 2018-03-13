// jeśli w JSON mamy {} traktujemy to jako obiekt
// jeśli w JSON mamy [] trakytujemy to jako tablice

var jsonOsoby = {
    "osoby": [
        {
            imie: "Krystian",
            nazwisko: "Dziopa",
            wzrost: 180,
            oczy: "niebieskie",
            zainteresowania: [
                {
                    nazwa: "podroze"
                },
                {
                    nazwa: "gotowanie"
                }
            ]
        },
        {
            imie: "Dominik",
            nazwisko: "Gomuła",
            wzrost: 170,
            oczy: "brązowe",
            zainteresowania: [
                {
                    nazwa: "gotowanie"
                },
                {
                    nazwa: "języki"
                }
            ]
        },
        {
            imie: "Claudia",
            nazwisko: "Żelazowska",
            wzrost: 167,
            oczy: "brązowe",
            zainteresowania: [
                {
                    nazwa: "programowanie"
                },
                {
                    nazwa: "podroze"
                },
                {
                    nazwa: "języki"
                }
            ]

        }
    ]
}



jsonOsoby.osoby.forEach(function (element, index) {
    console.log("Nazywam się: " + element.imie + " " + element.nazwisko + " i mam " + element.oczy + " oczy");
});






console.log(jsonOsoby.osoby[0].imie);
console.log(jsonOsoby.osoby[0].wzrost);
console.log(jsonOsoby.osoby[0].oczy);
console.log(jsonOsoby.osoby[1].zainteresowania[2]);



//pętla po obiekcie

var obiekt = {
    imie: "Adam",
    nazwisko: "Nowacki",
    wzrost: 182,
    oczy: "szare",
}
for (var property in obiekt) {
    console.log("Nazwa właściwości: " + property + " Wartość właściwości: " + obiekt[property]);
}
