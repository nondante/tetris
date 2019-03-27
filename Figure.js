class Figure{
  constructor(id){
    this.x = 80;
    this.y = 80;
    this.id = id;
  }
  moveFigure(spaces, el, offset) {
    
    setInterval(()=>{
       
      const correspondingSpace = spaces.find((space)=>{
        return space.x === el.x.animVal.value && space.y === el.y.animVal.value
      })
         
      if(correspondingSpace && correspondingSpace.row<=17 && correspondingSpace.isAvailable === true){
       
        el.setAttribute('y', offset);
       offset = offset + 30;
      }
     },500)
  }
  drawFigure(spaces) {
      const space = spaces.find((space)=>{
        
        return space.column===1 && space.row===1
      });
      const figure = new Space(1,1,this.x,this.y,this.id);
      figure.drawSpace('red');
      return figure
      // let counter= 1000;
      // spaces.forEach((space) => {
      // setInterval(()=>{    
      //   document.getElementById(`${space.row+1} 1`).setAttribute('fill','red');
      //   document.getElementById(`${space.row} 1`).setAttribute('fill','black');
        
      // },counter)
      // counter+=1000;
  }
  
      
}