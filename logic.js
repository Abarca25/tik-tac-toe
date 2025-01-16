export default class Logic{
    constructor(player,cpu){
        this.player = player;
        this.cpu = cpu;
        this.playerTurn = true;
        this.cpuTurn = false;
        this.cellIsTaken = [];
        this.winnerDeclared = false;
        this.winnerName = ''
    }

    winningPositions = () => {
        const validMovesArray = [["cell-1","cell-2","cell-3"],
                                 ["cell-4","cell-5","cell-6"],  // horziontal
                                 ["cell-7","cell-8","cell-9"],

                                 ["cell-1","cell-4","cell-7"],
                                 ["cell-2","cell-5","cell-8"], // vertical
                                 ["cell-3","cell-6","cell-9"],

                                 ["cell-1","cell-5","cell-9"],  // diagonal
                                 ["cell-3","cell-5","cell-7"]]
        return validMovesArray;
    }

    cpuChoice = () => {
        this.playerTurn = false;
        let cpu_choice_id = `cell-${Math.floor(Math.random() * 9) + 1}`;
        if(this.checkForExistingChoice(cpu_choice_id)){
            this.cpuChoice();
        }

        else {
            let cell = document.querySelector(`#${cpu_choice_id}`);
            cell.textContent = "X";
            this.cpu.player_choice.push(cpu_choice_id);
            this.cellIsTaken.push(cpu_choice_id);
        }
        
    }

    callATie = () => {
        const winnerElement = document.querySelector(".winner");
        winnerElement.innerText = "IT'S A TIE";
        throw new Error("WINNER DECIDED GAME OVER");
    }

    checkForExistingChoice = (cell_choice) => {
        if (this.winnerDeclared) {
            console.log("Game over! No more moves can be made.");
            return;
        }
        
        if (this.winnerDeclared == false && this.cellIsTaken.length == 9){
            this.callATie();
            throw new Error("TIE")
        }

        if (this.cellIsTaken.includes(cell_choice)) {
            return true;
        } else {
            return false;
        }

    
    }

    handleTurn = () => {
            this.checkPlayerChoice(this.player.player_choice,this.player.player_name);
            setTimeout(() => {
                this.cpuChoice();
                this.checkPlayerChoice(this.cpu.player_choice,this.cpu.player_name);
                this.playerTurn = true;
            }, "1000" )
            
        
    }

    checkPlayerChoice = (player_choice,player_name) => {
        let winning_positions = this.winningPositions();
        
        for(let i = 0; i < winning_positions.length; i++){
            if(winning_positions[i].every((item) => player_choice.includes(item))){
                this.winnerDecided(player_name);
            }
        }
    }

    winnerDecided = (player_name) => {
        const lastCell = document.getElementById(`${this.cellIsTaken[this.cellIsTaken.length - 1]}`);
        if(player_name == "CPU"){
            null;
        }
        else {
            lastCell.innerText = "O"
        }
        let winner = document.querySelector(".winner");
        winner.innerText = `${player_name} is your winner!`;
        this.winnerDeclared = true;
        console.log(`${player_name} has won the game!`);
        throw new Error("WINNER DECIDED GAME OVER")
    }
}