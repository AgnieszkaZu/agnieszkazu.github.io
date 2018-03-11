class Ogloszenia{
  constructor( tytul, tresc, cena, kategoria ){
      this.tytul = tytul;
      this.tresc = tresc;
      this.cena = cena;
      this.kategoria = kategoria;
  }  
    
    wyswietl() {
        var ogloszenie = "Tytul ogloszenia: " + this.tytul + " Treść: " + this.tresc + " Cena: " + this.cena + " Kategoria: " + this.kategoria;
        
        return ogloszenie;
    }
}

var ogloszenie1 = new Ogloszenia( "Sprzedam Opla", "Niemiec plakał jak sprzedawał i tylko do kościoła śmigał w niedziele", 500, "motoryzacja" );

var ogloszenieDoWyswietlenia = ogloszenie1.wyswietl();
console.log( ogloszenieDoWyswietlenia );