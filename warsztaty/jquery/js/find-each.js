// metoda find wyszukuje potomkow selektora. W poniższym przykładzie poszuka paragrafow znajdujących się w div

//metoda find może wyszukiwać po tagu, klasie, id, atrybucie

$("div").find("p").css({fontSize: "60px", color: "deeppink"});

//metoda each - pętla po elementach, jako parametr przyjmuje funkcję zwrotną, ktora zostaje wykonana na każdym znalezionym elemencie

$("p").each( function( index, element ) {
   console.log( index, element );
    $(this).addClass('new_class').css({fontSize: "40px", backgroundColor: "yellow"});
});