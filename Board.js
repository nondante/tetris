class Board {
  constructor(){
    this.rows = 18;
    this.columns = 10;
    this.spaces = [];

  }


  drawBoard(j,i,color){
    
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
    const figures = ['alpha', 'beta', 'zet'];
    const figure = new Figure(fig);
    figures.forEach((fig)=>{
      
      figure.drawFigure(this.spaces);
      const el = document.getElementById(fig);
      let offset = figure.y;
      figure.moveFigure(this.spaces, el, offset)
      
    
       
     
         
    })
    
  }
}

