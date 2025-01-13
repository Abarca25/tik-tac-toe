import Player from "./player.js";
import Logic from "./logic.js";

export default function Gameboard(){
    this.player_1 = new Player("Angel");
    this.player_CPU = new Player("CPU");
    this.logic = new Logic(this.player_1,this.player_CPU);

    this.handleClick = (id) => {
        if(this.logic.playerTurn == true){
            if(this.logic.checkForExistingChoice(id)){
                throw new Error("Please pick another slot");
                
            }
            if (!this.logic.checkForExistingChoice(id)){
                this.player_1.player_choice.push(id)
                this.logic.cellIsTaken.push(id);
                this.logic.handleTurn(this.player_1);
                this.logic.playerTurn = false;
            }
        }
        else throw new Error("Please Wait Your Turn");
    }
    

}

const cell_choice = document.querySelectorAll(".cell");


