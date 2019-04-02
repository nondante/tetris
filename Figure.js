class Figure{
  constructor(id){
    this.x = 80;
    this.y = 80;
    this.id = id;
    this.element = {};
  }

  move(spaces) {

    let el = document.getElementById(this.id);
    this.element = el;

    let x;
    let y;

    document.addEventListener('keydown',(e)=>{
    
    if(e.keyCode===39){
      if(this.element){
        x = this.element.x.animVal.value
        y = this.element.y.animVal.value
        let space = spaces.find((s)=>{
          return s.x === x+30 && s.y === y
        })
        
        if(space&&space.isAvailable){
          this.element.setAttribute('x', x + 30);
        }
      }
    } else if(e.keyCode===37){
      if(this.element){
        x = this.element.x.animVal.value
        y = this.element.y.animVal.value
        let space = spaces.find((s)=>{
          return s.x === x-30 && s.y === y
        })
        
        if(space&&space.isAvailable){
          this.element.setAttribute('x', x - 30);
        }
      }
    } 
  })
    this.id = null;
  }
  
  moveFigure(id,spaces) {
    let el = document.getElementById(this.id);
    this.move(spaces)
    const prom = new Promise((resolve)=> {
      
      
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
          this.id = null;
          this.element = null;
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