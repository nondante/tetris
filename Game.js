class Game {
  constructor(){
    this.spaces = [];
    
  }

  startGame(){
    
    const board = new Board;
    board.drawBoard(1,1,'black');
    board.moveFigures();
    
  }

  getSpaces() {
    this.spaces = this.board.getSpaces()
  }
}