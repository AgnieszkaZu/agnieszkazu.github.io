$(function(){
   
    //pobieranie tekstu
    var textParagrafuId = $("#paragraf").text();
    console.log(textParagrafuId);
    
    
    // ustawienie tekstu
    $("#paragraf").text("Nowy tekst ustawiony metodą text()");
    
    //dodawanie HTML
   $(".paragrafnext").html("<strong>Tutaj nowa treść HTML</strong>");
    
    //dodawanie treści na końcu selektora
    $(".paragrafnext").append("<br>Nowa treść na końcu selektora");
    
    //dodawanie tresci za selektorem
    $(".paragrafnext").after("<h6>Nowy element za selektorem</h6>");
    
    //usuwanie elementu wraz z zawartością
    $(".paragrafnext").remove();
    
    //usuwanie tylko zawartości elementu
    $("div").empty();
    
    
    //dodawanie pojedyńczego stylu css
    $("div").css("background-color", "red");
    
    
    //dodawanie wielu styli css
    $("div").css({
        width: "600px",
        height: "120px",
        backgroundColor: "lime"
    });
    
    //dodawanie klasy elementu
    $("h1").addClass("nowa_klasa");
    
    //dodawanie atrybutow do elemnentu
    $("h1").attr("title", "Głowny tytuł ustawiony za pomocą jQuery");
    
});