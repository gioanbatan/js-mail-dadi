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


//MAIL

// DATI
// Lista degli mail degli utenti con l'accesso consentito
const mailList = ["olga@boolean.com", "marco@boolean.com", "mauro@boolean.com", "adriano@boolean.com"];
console.log(mailList, typeof(mailList));

// INPUT
// Chiedere all'utente di inserire al propria mail
const userMailInput = prompt("Inserire la mail:");
console.log(userMailInput); 

// ELABORAZIONE DATI
// PER ogni elemento della lista email
for (let i = 0; i < mailList.length; i++) {
    const mailCompare = mailList[i];
    console.log(i, "Mail:", mailCompare);

    // SE la mail inserita dall'utente corrisponde all'elemento della lista 
    // if 
}
//  consenso all'accesso dell'utente consentito
// ALTRIMENTI 
//  consenso all'accesso dell'utente negato

// OUTPUT
// Messaggio che visualizza il consenso all'accesso dell'utente