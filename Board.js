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
        space.drawSpace('black');
        space.setAvailability(true);
        this.spaces.push(space);
      }
    }
  }

  moveFigures() {
    
    this.counter = this.counter + 1;
    const figure = new Figure('zet'+this.counter);
    figure.drawFigure();
    const prom =  figure.moveFigure(this.spaces);

    prom.then((value) => { 
      this.spaces = value;     
      this.moveFigures(value);
    });

    this.spaces.forEach((sp)=>{
      if(!sp.isAvailable){
        
      }
    })
  }
}

