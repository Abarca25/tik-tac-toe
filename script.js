import Gameboard from "./gameboard.js";

const gb = new Gameboard();
const cell_choice = document.querySelectorAll(".cell");
const ttt_board = document.querySelector(".ttt-board");
ttt_board.style.display = "none"


if(gb.logic.playerTurn == true){
    cell_choice.forEach((cell) => {
        cell.addEventListener("click", (e) => {
            gb.handleClick(e.target.id);
            e.target.innerText = "O"
            
        })
    })
}

document.querySelector("#player-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const playerName = document.querySelector("#player-name").value;
    gb.player_1.player_name = playerName
    gb.logic.player.playerName = playerName;
    document.querySelector("#player-form").style.display = "none"
    ttt_board.style.display = "grid"
    console.log(playerName);
});