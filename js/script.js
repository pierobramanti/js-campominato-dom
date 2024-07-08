
function createSquare(){
    let currentElement = document.createElement("div");

    currentElement.classList.add(`square`)

    return currentElement;
}


const btn= document.getElementById(`play`)

const grid = document.getElementById(`grid`);

// Creo una costante BOMBS a cui assegno il valore numerico 16 //
const bombs = 16

//Creo una funzione con parametro//
function bombsGenerator(cells) {

// Dichiaro un array vuoto //
    let bombsArray = []
// Iterizzo l'array vuoto con un ciclo while finchè non contiene lo stesso numero presente nella costante BOMBS
    while(bombsArray.length < bombs) {
// Prendo un numero randomico e lo salvo in una variabile //
        let random = Math.floor(Math.random() * cells) + 1;
// Se il numero non è incluso nell'array lo inserisco
        if(!bombsArray.includes(random)){
            bombsArray.push(random)
        }
    }
}

btn.addEventListener(`click`, function(){

grid.innerHTML= '';

for( let i = 0; i< 100 ; i++ ){

        let currentSquare = createSquare();
    
        currentSquare.innerText = i+ 1;
    
        currentSquare.addEventListener(`click`, function(){
            console.log([i+1])
    
            this.classList.add("clicked");
        });
    
        grid.append(currentSquare);
    }

})