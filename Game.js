class Game {
  constructor(){

  }

  async startGame(){
    const board = new Board;

    board.drawBoard(1,1,'black');


    board.moveFigures();
      
    

    
    }
}