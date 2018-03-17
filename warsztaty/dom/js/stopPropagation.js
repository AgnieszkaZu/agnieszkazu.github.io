var div = document.getElementById("parFirst");
var par = document.getElementById("par2");

div.addEventListener("click", function(event) {
    console.log("Kliknęło w diva");
});

par.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("Kliknęło w diva");
    });