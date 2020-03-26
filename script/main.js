// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

var userDistance = prompt('Inserisci il numero di km che vuoi percorrere');
var userAge = prompt('Inserisci la tua età');

// Il prezzo del biglietto è definito in base ai km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.

var ticketPrice = 0.21;
var juniorDiscount = 0.20;
var seniorDiscount = 0.40;

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.

var ticketDiscount;
var totalDiscount;
var finalPrice;
var standardPrice;

if(userAge < 18){
  console.log('Sconto applicato per Minorenne');
  ticketDiscount = ticketPrice - (ticketPrice * juniorDiscount);
  finalPrice = (ticketDiscount * userDistance).toFixed(2);
}

else if(userAge > 65){
  console.log('Sconto applicato per gli Over 65');
  ticketDiscount = ticketPrice - (ticketPrice * seniorDiscount);
  finalPrice = (ticketDiscount * userDistance).toFixed(2);
}

else{
  console.log('Attenzione nessuno sconto applicato');
  finalPrice = (ticketPrice * userDistance).toFixed(2);
}

// Prezzo scontato
console.log('Il prezzo scontato è di ' + finalPrice + '€')

// Prezzo standard
standardPrice = (ticketPrice * userDistance).toFixed(2);
console.log('Il prezzo standard è di ' + standardPrice + '€');

// Totale Sconto
totalDiscount = (finalPrice - standardPrice).toFixed(2);
console.log('Il totale dello sconto applicato è' + totalDiscount + '€');

// Mostrare a schermo il prezzo del biglietto, indicando anche se è stato applicato un eventuale sconto.

document.getElementById('ticket-price').innerHTML = finalPrice;
document.getElementById('ticket-standard-price').innerHTML = standardPrice;
document.getElementById('ticket-discount').innerHTML = totalDiscount;
