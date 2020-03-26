// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

var userDistance = prompt('Inserisci il numero di km che vuoi percorrere');
var userAge = prompt('Inserisci la tua età');

// Il prezzo del biglietto è definito in base ai km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.

var ticketPrice = 0.21;
var juniorDiscount = 0.20;
var seniorDiscount = 0.40;

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.

var totalDiscount;
var finalPrice;

if(userAge < 18){
  console.log('Sconto applicato per Minorenne');
  ticketPrice = ticketPrice * juniorDiscount;
  finalPrice = ticketPrice * userDistance;
}

else if(userAge > 65){
  console.log('Sconto applicato per gli Over 65');
  ticketPrice = ticketPrice * seniorDiscount;
  finalPrice = ticketPrice * userDistance;
}

else{
  console.log('Attenzione nessuno sconto applicato');
  finalPrice = ticketPrice * userDistance;
}

console.log('Il prezzo finale è di ' + finalPrice + '€');


// Mostrare a schermo il prezzo del biglietto, indicando anche se è stato applicato un eventuale sconto.
