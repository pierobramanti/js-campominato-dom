function createSquare(){
    let currentElement = document.createElement("div");
    currentElement.classList.add(`square`);
    return currentElement;
}

const btn = document.getElementById(`play`);
const grid = document.getElementById(`grid`);

// Creo una costante BOMBS a cui assegno il valore numerico 16 //
const bombs = 16;

// Creo una variabile flag impostata su true//
let gaming = true;

// Creo una variabile per le bombe
let bombsArray = [];

// Creo una funzione con parametro//
function bombsGenerator(cells) {
    // Dichiaro un array vuoto //
    bombsArray = [];
    // Itero l'array vuoto con un ciclo while finché non contiene lo stesso numero presente nella costante BOMBS
    while(bombsArray.length < bombs) {
        // Prendo un numero randomico e lo salvo in una variabile //
        let random = Math.floor(Math.random() * cells) + 1;
        // Se il numero non è incluso nell'array lo inserisco
        if(!bombsArray.includes(random)){
            bombsArray.push(random);
        }
    }
    console.log(bombsArray);
}

function game_over() {
    gaming = false;
    return gaming;
}

btn.addEventListener(`click`, function() {
    grid.innerHTML = '';

    // Genera le bombe
    bombsGenerator(100);

    for (let i = 0; i < 100; i++) {
        let currentSquare = createSquare();
        currentSquare.innerText = i + 1;

        currentSquare.addEventListener(`click`, function() {
            if (gaming) {
                if (bombsArray.includes(i + 1)) {
                    this.classList.add("clicked-red");
                    game_over();
                    console.log("Hai pestato una bomba");
                } else {
                    this.classList.add("clicked");
                    console.log("Hai clickato su " + (i + 1));
                }
            } else {
                console.log("Il gioco non è attivo. Ricarica la pagina per iniziare una nuova partita");
            }
        });

        grid.append(currentSquare);  // Aggiunge il quadrato creato alla griglia
    }
});