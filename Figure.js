class Figure{
  constructor(id){
    this.x = 80;
    this.y = 80;
    this.isReady = false;
    this.id = id;
  }
  // moveFigure(spaces, el, offset) {
  //   console.log(el);
  //   const counter =0;
    
  async drawFigure() {
     

      
      let offset = 80;
      const figure = new Space(1,1,this.x,this.y,this.id);
      figure.drawSpace('red');
      let el = document.getElementById(this.id);

      const prom = new Promise(function(resolve, reject) {
        setInterval(()=>{
          if (offset<600){
           el.setAttribute('y', offset);
           offset = offset + 30;
           //resolve(false);
          } else {

            resolve(true);
           
          }
        
        },500)
      });

    return prom
      // let counter= 1000;
      // spaces.forEach((space) => {
      // setInterval(()=>{    
      //   document.getElementById(`${space.row+1} 1`).setAttribute('fill','red');
      //   document.getElementById(`${space.row} 1`).setAttribute('fill','black');
        
      // },counter)
      // counter+=1000;
  }
  
      
}