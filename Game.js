class Game {
  constructor(){

  }

  startGame(){
    const board = new Board;

    board.drawBoard(1,1,'black');
    let counter = 0;
    while(counter<10){
      board.moveFigures();
      counter++;
    }
    }
}