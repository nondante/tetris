class Figure{
  constructor(id){
    this.x = 80;
    this.y = 80;
    this.id = id;
    this.element = {};
    this.figSpaces = [];
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
    const prom = new Promise((resolve)=> {
    this.figSpaces.forEach((fig)=>{
      let el = document.getElementById(fig.id);
      this.move(spaces)
      
        
        
        let offset = fig.y.animVal.value;
        
        let nextspace;
        let nextnextspace;
        let s = setInterval(()=>{
         
          nextspace = spaces.find((s)=>{
            return s.y === fig.y.animVal.value+30 && s.x === fig.x.animVal.value
          })

          console.log(fig)
            
          if (nextspace&&offset<600&&nextspace.isAvailable===true){
              
              
            
            
            offset = offset + 30;
            fig.setAttribute('y', offset-30);

            nextspace = spaces.find((s)=>{
              return s.y === fig.y.animVal.value+30 && s.x === fig.x.animVal.value
            })
  
          } else {
            
            offset = 80;

              spaces.forEach((sp)=>{
                if(sp.id == '17 1'){
                  sp.isAvailable = false
                }
                  
                if(sp.y === fig.y.animVal.value && sp.x === fig.x.animVal.value){
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
  
    
    })
    return prom
  }

  drawFigure() {

      const figure = new Space(1,1,this.x,this.y,this.id);
      
      figure.drawSpace('red',80,80);
      
      
  }

  drawZet() {
    const figure = new Space(1,1,this.x,this.y,this.id);
      
      this.figSpaces.push(figure.drawSpace('red',80,80));
      this.figSpaces.push(figure.drawSpace('red',80,110));
      this.figSpaces.push(figure.drawSpace('red',80,140));

      
  }
}

// class zet extends Space {
//   super()
  
// }