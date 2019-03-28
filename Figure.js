class Figure{
  constructor(id){
    this.x = 80;
    this.y = 80;
    this.id = id;
  }

  moveFigure() {
    let offset = 80;
    let el = document.getElementById(this.id);

    const prom = new Promise(function(resolve) {
      setInterval(()=>{
        if (offset<600){
         el.setAttribute('y', offset);
         offset = offset + 30;
        } else {
          resolve();
        }
      },500)
    });

  return prom
  }

  drawFigure() {

      const figure = new Space(1,1,this.x,this.y,this.id);
      figure.drawSpace('red');
  }
}