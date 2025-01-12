export default function Gameboard(player,cpu,logic){
    this.player = player;
    this.logic = logic;
    this.cpu = cpu;

    this.checkPlayerChoice = () => {
        //this.player.player_choice//
        let player_choice = ["cell-1","cell-2","cell-3","cell-5","cell-8","cell-6"]
        let winning_positions = this.logic.winningPositions();
        
        for(let i = 0; i < winning_positions.length; i++){
            console.log(winning_positions[i][i])
            
            if(winning_positions[i].every((item) => player_choice.includes(item))){
                this.logic.winnerDecided();
            }

        }
    }
}