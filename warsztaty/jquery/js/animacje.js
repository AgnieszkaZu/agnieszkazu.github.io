var btn = $("#animate");

btn.on("click", function () {

    //    $("h1").hide(4000).show("fast");
    //    $("h1").fadeOut(3000).fadeIn("slow");


    //    $("h1").slideUp(600).slideDown(400);

    $("h1").animate({'left': '100px', 'top': '100px'}, 2500,
    function(){
        alert("Koniec animacji");
    }

    );


});
