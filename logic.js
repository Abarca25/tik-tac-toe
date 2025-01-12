export default function Logic(player,cpu){
    this.player = player;
    this.cpu = cpu;

    this.checkWinner = () => {
        if(this.player.player_choice == this.cpu.player_choice) console.log('winner');
        else console.log("LOSER") // testing if logic connects
    }
}