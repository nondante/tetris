

class Space {
  constructor(row,column,x,y,id){
    this.width = 30,
    this.height = 30,
    this.row = row,
    this.column= column,
    this.x = x,
    this.y = y,
    this.id = id || `${row} ${column}`
  }
 

  setAvailability (isAvailable) {
    this.isAvailable = isAvailable
  }

  setColor(color) {
    this.color = color
  }

  drawSpace(color,x,y) {
    const svgSpace = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        svgSpace.setAttributeNS(null, "id", this.id);
        svgSpace.setAttributeNS(null, "x", x);
        svgSpace.setAttributeNS(null, "y", y);
        svgSpace.setAttributeNS(null, "width", this.width);
        svgSpace.setAttributeNS(null, "height", this.height);
        svgSpace.setAttributeNS(null, "fill", color);
        svgSpace.setAttributeNS(null, "stroke", "blue");

        document.getElementById("board").appendChild(svgSpace); 
        return svgSpace
  }
}