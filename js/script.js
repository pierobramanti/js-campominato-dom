
// DEFINIZIONE DELLA FUNZIONE CHE MI CREA I QUADRATI//

function createSquare(){
    let currentElement = document.createElement("div");
//ASSEGNAZIONE DELLA CLASSE SQUARE ALL'ELEMENTO CREATO
    currentElement.classList.add(`square`)

// RESTITUISCO IL QUADRATO NELLA VARIABILE CURRENT ELEMENT //
    return currentElement;
}

// RECUPERO IL PULSANTE//
const btn= document.getElementById(`play`)
// RECUPER L'ELEMENTO CHE CONTIENE LA MIA GRIGLIA//
const grid = document.getElementById(`grid`);

// ASSEGNO L' EVENTO CLICK AL PULSANTE//
btn.addEventListener(`click`, function(){
// APRO CICLO FOR//

grid.innerHTML= '';

for( let i = 0; i< 100 ; i++ ){
    // CREO IL SINGOLO QUADRATO//
        let currentSquare = createSquare();
    
        currentSquare.innerText = i+ 1;
    
        currentSquare.addEventListener(`click`, function(){
            console.log([i+1])
    
            this.classList.toggle("clicked");
        });
    
    // APPENDO IL QUADRATO NELL'ELEMTO DIV CREATO PRECEDENTEMENTE
        grid.append(currentSquare);
    }

})