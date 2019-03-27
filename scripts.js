const startButton = document.getElementById("start");

startButton.addEventListener("click", startGame);

function startGame(){
  const game = new Game;
  game.startGame();

}