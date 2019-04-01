class Figure{
  constructor(id){
    this.x = 80;
    this.y = 80;
    this.id = id;
  }

  moveFigure(spaces) {
    
    const prom = new Promise((resolve)=> {
      let el = document.getElementById(this.id);
      let offset = 110;
      
      let s = setInterval(()=>{

        let nextspace = spaces.find((s)=>{
          return s.y === el.y.animVal.value+30 && s.x === el.x.animVal.value
        })

        if (offset<600&&nextspace.isAvailable===true){
      
          offset = offset + 30;
          el.setAttribute('y', offset-30);

        } else {

          offset = 80;

          spaces.forEach((sp)=>{
            if(sp.y === el.y.animVal.value && sp.x === el.x.animVal.value){
              sp.isAvailable = false
            }
          })
          clearInterval(s);
          resolve(spaces);
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