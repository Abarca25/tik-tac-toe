import Gameboard from "./gameboard.js";

const gb = new Gameboard();
const cell_choice = document.querySelectorAll(".cell");

if(gb.logic.playerTurn == true){
    cell_choice.forEach((cell) => {
        cell.addEventListener("click", (e) => {
            gb.handleClick(e.target.id);
            e.target.innerText = "O"
            
        })
    })
}

