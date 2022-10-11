// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// Buon lavoro e buon divertimento! :faccia_leggermente_sorridente: :paperella:

// DATI
// Dado dell'utente (num. possibile da 1 a 6)
// Dado del computer (num. possibile da 1 a 6)

// INPUT

// ELABORAZIONE DATI
// Creazione di un numero casuale per l'utente
const userDice = Math.floor(Math.random() * (7 - 1)) + 1;
// Creazione di un numero casuale per il computer
const computerDice = Math.floor(Math.random() * (7 - 1)) + 1;
console.log(userDice, computerDice);

// SE numero utente è uguale a numero computer
//  il risultato è parità
// ALTRIMENTI SE numero utente è maggiore di numero computer
//  il risultato è vittoria dell'utente
// ALTRIMENTI
//  il risultato è vittoria del computer

// OUTPUT
// Comunicazione del risultato