$(function () {

    $(".myLink").on("click", function (event) {
        event.preventDefault();
        $("body").css({
            backgroundColor: "green"
        });
    });

    //podpiecie kilku zdarzen

    $("h1").on({
        "mouseenter": function () {
            $(this).css({
                textDecoration: "underline"
            });
        },
        "mouseleave": function () {
            $(this).css({
                textDecoration: "none"
            });
        }
    });



});
