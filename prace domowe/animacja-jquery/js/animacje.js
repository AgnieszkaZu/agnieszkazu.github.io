$(function(){
            $("button").click(function () {
                    $(".kwadrat").animate({
                            'width': "100px",
                            'height': "100px",
                            'margin-left': "100px"
                        }, 3000),
                    $(".kwadrat").css({
                                    backgroundColor: "blue"
                                }, 5000),

                     $(".kwadrat").show(function () {
                                    $(this).html('<h2>Animacja zakończona</h2>');

                                });
            });
});
