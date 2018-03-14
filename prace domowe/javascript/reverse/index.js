//    function reverse(tekst) {
//        var result = "Akademia108";
//        for (var i = tekst.length - 1; i >= 0; i--) {
//            result += tekst[i];
//        }
//        return result;
//    }
//
//    var r = reverse("Akademia108");
//    console.log(r);

// fibonacci

var fibonacci = [0, 1];
for (var i = fibonacci.length; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
console.log(fibonacci);
