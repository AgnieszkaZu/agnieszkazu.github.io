//$(function(){
//            $("button").click(function () {
//                    $(".kwadrat").animate({
//                            'width': "100px",
//                            'height': "100px",
//                            'margin-left': "100px"
//                        }, 3000),
//                    $(".kwadrat").animate({
//backgroundColor: "blue"
//                                }, 5000),
//
//                     $(".kwadrat").show(function () {
//                                    $(this).html('<h2>Animacja zakończona</h2>');
//
//                                });
//            });
//});
//$(function () {
//            $("button").click(function () {
//                $(".kwadrat").animate({
//                    'width': "100px",
//                    'height': "100px",
//                    'margin-left': "100px"
//                }, 3000, zmianaKoloru);
//
//                function zmianaKoloru() {
//                    $(".kwadrat").animate({
//                        backgroundColor: "blue"
//                    }, 5000, wyskakujacyNapis);
//                }
//
//                function wyskakujacyNapis() {
//                    $(".kwadrat").html('<h2>Animacja zakończona</h2>');
//                }
//            });
//});




$(function(){
            $("#ostatniNaPierwszy").click(function() {
                $("p:first").before ($("p:last"));
            });
    
            $("#pierwszyNaOstatni").click(function(){
                $("p:last").after ($("p:first"));
            });
});


























