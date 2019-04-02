const startButton = document.getElementById("start");

startButton.addEventListener("click", startGame);

const game = new Game;
const board = new Board;

function startGame(){
  game.startGame();
  

}

