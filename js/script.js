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

// Elementi di Output
const h2Result = document.getElementById("result");
console.log(h2Result);

// Immagini dei dadi
const imgElementUserDice = document.getElementById("user-dice");
let imgUserDice= "";

const imgElementComputerDice = document.getElementById("computer-dice");
let imgComputerDice = "";

// DATI
// Dado dell'utente (num. possibile da 1 a 6)
// Dado del computer (num. possibile da 1 a 6)

// Stato della vincita
let result = "";

// INPUT

// ELABORAZIONE DATI
// Creazione di un numero casuale per l'utente
const userDice = Math.floor(Math.random() * (7 - 1)) + 1;

// Creazione grafica del dado dell'utente
switch (userDice) {
    
    case 1:
        imgUserDice = "one";
        break;
    
    case 2:
        imgUserDice = "two";
        break;
        
    case 3:
        imgUserDice = "three";
        break;
    
    case 4:
        imgUserDice = "four";
        break;
    
    case 5:
        imgUserDice = "five";
        break;
        
    case 6:
        imgUserDice = "six";
        break;
}
console.log(imgUserDice);
// Composizione dell'icona per l'utente
imgElementUserDice.classList.add(`fa-dice-${imgUserDice}`);

// Creazione di un numero casuale per il computer
const computerDice = Math.floor(Math.random() * (7 - 1)) + 1;

// Creazione grafica del dado dell'utente
switch (computerDice) {
    
    case 1:
        imgComputerDice = "one";
        break;
        
    case 2:
        imgComputerDice = "two";
        break;
            
    case 3:
        imgComputerDice = "three";
        break;
                
    case 4:
        imgComputerDice = "four";
        break;
    
    case 5:
        imgComputerDice = "five";
        break;
        
    case 6:
        imgComputerDice = "six";
        break;
}
console.log (imgComputerDice);
// Composizione dell'icona per l'utente
imgElementComputerDice.classList.add(`fa-dice-${imgComputerDice}`);

console.log(userDice, computerDice);

if (userDice === computerDice) {
    // SE numero utente è uguale a numero computer
    //  il risultato è parità
    result = "Parità!";
} else if (userDice > computerDice) {
    // ALTRIMENTI SE numero utente è maggiore di numero computer
    //  il risultato è vittoria dell'utente
    result = "L'utente vince!"
} else {
    // ALTRIMENTI
    //  il risultato è vittoria del computer
    result = "Il computer vince!"
}
// OUTPUT
// Comunicazione del risultato
console.log(result);
h2Result.innerHTML = result;