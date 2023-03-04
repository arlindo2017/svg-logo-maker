class Shape {
    constructor(text, textcolor, shapecolor, shapetype) {
        this.text = text;
        this.textcolor = textcolor;
        this.shapetype = shapetype;
        this.shapecolor = shapecolor;       
    }
}

class Square extends Shape {
    constructor(text, textcolor, shapecolor,shapetype,x,y,width,height) {
    super(text, textcolor, shapecolor,shapetype);  
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    }
}

class Circle extends Shape {
    constructor(text, textcolor, shapecolor,shapetype, cx, cy, r) {
    super(text, textcolor, shapecolor,shapetype);  
    this.cx = cx;
    this.cy = cy;
    this.r = r;
    }
}

class Triangle extends Shape {
    constructor(text, textcolor, shapetype, shapecolor, points) {
    super(text, textcolor, shapecolor,shapetype);  
    this.points = points;
    }
}

module.exports = {Shape, Square, Circle, Triangle};