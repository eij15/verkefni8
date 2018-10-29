/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;
var coolteljari = 0;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  alert('Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.');
  play();
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
  const array_timi = [GAMES_TO_PLAY];
  var teljari = 0;
  var sum = 0;

  do {
    var start = new Date();
    ask();
    var end =  new Date()
    
    var timi = (end - start)/1000;

    array_timi [teljari] = timi;
    teljari++;
  } while (teljari<GAMES_TO_PLAY);

  for(i =0; i<GAMES_TO_PLAY; i++){
    sum = array_timi[i] + sum;
  }
  alert('þú svaraðir ' + coolteljari + ' af ' + GAMES_TO_PLAY +' rétt' )
  alert('Meðal tími á dæmi er : ' + sum/GAMES_TO_PLAY);

}
/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
  const plus_minus1 = randomNumber(1, 100);
  const plus_minus2 = randomNumber(1, 100);
  const sinnum1 = randomNumber(1, 10);
  const sinnum2 = randomNumber(1, 10);
  const deiling = randomNumber(2, 10);
  const deiling2 = deiling * randomNumber(2, 10);
  const tegd = randomNumber(1, 4);
  var answer;

  if (tegd === 1) {
    var d1 = plus_minus1 + plus_minus2;
    var input1 = prompt(plus_minus1 + '+' + plus_minus2);
    var i1 = console.log(input1);
    if(input1 === d1) coolteljari++;
    return input1;
  }

  else if (tegd === 2) {
    var d2 = plus_minus1 - plus_minus2;
    var input2 = prompt(plus_minus1 + '-' + plus_minus2);
    var i2 = console.log(input2);
    if (input2 === d2) coolteljari++;
    return input2;
  }

  else if (tegd === 3) {
    var d3 = sinnum1 * sinnum2;
    var input3 = prompt(sinnum1 + '*' + sinnum2);
    var i3 = console.log(input3);
    if (input3 === d3) coolteljari++;
    return input3;
  }

  else if (tegd === 4) {
    var d4 = deiling / deiling2;
    var input4 = prompt(deiling + '/' + deiling2);
    var i4 = console.log(input4);
    if (input4 === d4) coolteljari++;
    return input4;
  }
}


/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();

