class Figure{
  constructor(id){
    this.x = 80;
    this.y = 80;
    this.id = id;
  }

  moveFigure(spaces) {
    
    
    let spacess = spaces;
    const prom = new Promise((resolve)=> {
      let el = document.getElementById(this.id);
      let offset = 110;
      
      let s = setInterval(()=>{
        let space = spacess.find((s)=>{
          return s.y === el.y.animVal.value && s.x === el.x.animVal.value
        })
        console.log(space.isAvailable, space.id)
        if (offset<600&&space.isAvailable===true){
            let nextspace = spacess.find((s)=>{
              return s.y === el.y.animVal.value+30 && s.x === el.x.animVal.value
            })
            if(nextspace.isAvailable){
              offset = offset + 30;
              el.setAttribute('y', offset-30);
            }else {
              spacess.forEach((sp)=>{
                if(sp.y === el.y.animVal.value && sp.x === el.x.animVal.value){
                  sp.isAvailable = false
                }
              })
              clearInterval(s);
              resolve(spacess);
            }
            
         
         
        } else {
          space.isAvailable === false
          space = null
          offset = 80;
          
          spacess.forEach((sp)=>{
            if(sp.y === el.y.animVal.value && sp.x === el.x.animVal.value){
              sp.isAvailable = false
            }
          })
          clearInterval(s);
          resolve(spacess);
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