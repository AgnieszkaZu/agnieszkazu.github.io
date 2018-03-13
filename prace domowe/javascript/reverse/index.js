    function reverse(tekst) {
        var result = "Akademia108";
        for (var i = tekst.length - 1; i >= 0; i--) {
            result += tekst[i];
        }
        return result;
    }

    var r = reverse("Akademia108");
    console.log(r);
