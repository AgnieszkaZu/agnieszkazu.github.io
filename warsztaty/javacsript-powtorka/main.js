function sumaWyplat(selector){
    var elementy = document.querySelectorAll(selector);
    console.log(elementy);
    var iloscElementow = elementy.length;
    var suma = 0;
    
    for(var i =0; i<iloscElementow; i++){
        var val = elementy[i].innerHTML;
        suma += parseInt(val);
//       parseInt zamienia ciągliczb na wartość liczbową
        
    }
    
//    console.log(suma);
    return suma;
}

function wyswietlWynik( wynikDoWyswietlenia ){
    var div = document.createElement('div');
    var txt = document.createTextNode(wynikDoWyswietlenia + " zł");
    div.appendChild(txt);
    
    document.body.appendChild(div);
}


var wynikObliczenia = sumaWyplat('p');
wyswietlWynik (wynikObliczenia);

//sumaWypalat('.important');



