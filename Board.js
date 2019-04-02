class Board {
  constructor(){
    this.rows = 18;
    this.columns = 10;
    this.spaces = [];
    this.counter = 0;

  }


  drawBoard(j,i){
    
    let startingWidth = 50;
    let startingHeight = 50;

    for(i=1;i<=this.columns; i++){  
      startingWidth +=30;
      startingHeight = 50;
      for(j=1;j<=this.rows; j++){     
        startingHeight +=30;
        const space = new Space(j,i, startingWidth,startingHeight);
        space.drawSpace('black',startingWidth,startingHeight);
        space.setAvailability(true);
        this.spaces.push(space);
      }
    }
  }

  setSpaces(spaces){
    this.spaces = spaces;
  }

  getSpaces(){
    return this.spaces
  }

  

  moveFigures() {
    
    this.counter = this.counter + 1;
    let id = 'zet'+this.counter
    
    const figure = new Figure(id);
    figure.drawZet();
    
    
    const prom =  figure.moveFigure(id, this.getSpaces());

    prom.then((value) => { 
      
      this.setSpaces(value);     
      this.moveFigures(value);
      
    });
    
  }
}

