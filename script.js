import Gameboard from "./gameboard.js";
import Player from "./player.js";
import Logic from "./logic.js";


const cpu = new Player("CPU","TIC");
const player = new Player("PLAYER","TAK");
const game_logic = new Logic(cpu,player);
const gb = new Gameboard(player,cpu,game_logic);

gb.checkPlayerChoice(); // just testing if the pieces connect