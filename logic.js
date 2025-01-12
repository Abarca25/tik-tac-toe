export default function Logic(player,cpu){
    this.player = player;
    this.cpu = cpu;

    this.winningPositions = () => {
        const validMovesArray = [["cell-1","cell-2","cell-3"]]
        return validMovesArray;
    }

    
    this.winnerDecided = () => {
        console.log("Player is the winner!")
    }
}