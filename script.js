

// A FELADATOK ALATTI ÜRES SOR(OK)BA ÍRD A KÓDO(KA)T!
// Mielőtt dolgozni kezdesz nyisd meg az index.html fájlt a Live Server-rel!

"use strict";

/*******************/
/* PROGRAMVÁLTOZÓK */
/*******************/

// Hozz létre - programozó nyelven: definiálj - egy 'score' nevű változót, aminek értéke legyen 20.
// Melyik kulcsszóval lehet ezt megtenni, ha az értékét módosítani is szeretnénk a későbbiekben?
// VÁLASZ:let változónév = érték
let score = 20;
// A console.log() paranccsal ellenőrizd a 'score' változó tartalmát.
// Hogy lásd az eredményt, a böngészőben nyisd meg a konzolt az F12 billentyűvel.
console.log(score);
// Hozz létre egy 'highscore' nevű változót, aminek értéke legyen 0.
let highscore = 0;
// A console.log() paranccsal ellenőrizd a 'highscore' változó tartalmát.
console.log(highscore);
// A 'secretNumber' változóban eltárolunk egy véletlenszámot. Ezt 'gondolja' a program 😊
// A Math.random() függvény előállít egy 0 és 1 közötti véletlen számot.
// Hogy 1 és 20 közötti értéket kapjunk ezt a tizedestörtet meg kell szoroznunk 20-szal.
// A Math.trunc() függvény egy tizedestört egész részét adja eredményül.
// Próbáld ki: a számológép app segítségével végezd el a műveletet: 0,9999 * 20
// Mennyi lesz az eredmény? Mit kapunk, ha a tizedestörteket 'levágjuk'?
// Azért, hogy a 20 is benne legyen a számok halmazában hozzá kell adnunk az eredményhez 1-et.
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {

  const guess = (document.querySelector('.guess').value);
  //console.log(guess, typeof guess);
  if (!guess) {
   displayMessage('Nem szám!');
  }
  else if (guess===secretNumber) {
    displayMessage('Nyertél!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? 'Túl sok!': 'Túl kevés!');
        score--;
        document.querySelector('.score').textContent = score;
      }
     
     else {
       displayMessage('Vesztettél!');
       document.querySelector('.score').textContent = 0;
     }
  
    }            
  }
});

document.querySelector('.again').addEventListener('click', function (){
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Találgass...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  
}
)