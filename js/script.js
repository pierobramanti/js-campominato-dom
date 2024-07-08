
function createSquare(){
    let currentElement = document.createElement("div");

    currentElement.classList.add(`square`)

    return currentElement;
}


const btn= document.getElementById(`play`)

const grid = document.getElementById(`grid`);

const BOMBS = 16
function bombsGenerator(cells) {

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