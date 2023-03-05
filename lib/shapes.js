// Parent class that contains all parameters that are used by all children.
class Shape {
    constructor(text, textcolor, shapecolor, shapetype) {
      this.text = text;
      this.textcolor = textcolor;
      this.shapetype = shapetype;
      this.shapecolor = shapecolor;
    }
    // Render Placeholder that is defined within the chidren of Shape class
    render() {
        throw new Error('render method not being used within parent class.');
    }
}
// Children Square class that takes attributes from parent Shape class  
class Square extends Shape {
    constructor(text, textcolor, shapecolor, shapetype, x, y, width, height) {
        super(text, textcolor, shapecolor, shapetype);
        // Additional properties unique to Square sgv
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        }
    // Rendered output used to run the test for a new Square
    render() {
        return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.shapecolor}" />`;
    }
}
  
class Circle extends Shape {
    constructor(text, textcolor, shapecolor, shapetype, cx, cy, r) {
        //Circle(text, textcolor, shapecolor, shape[0], 150, 100, 100);
        super(text, textcolor, shapecolor, shapetype);
        // Additional properties unique to Circle sgv
        this.cx = 150;
        this.cy = 100;
        this.r = 100;
    }
    // Rendered output used to run the test for a new Circle
    render() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.shapecolor}" />`;
    }
}
  
class Triangle extends Shape {
constructor(text, textcolor, shapecolor, shapetype, points) {
    super(text, textcolor, shapecolor, shapetype);
    // Additional properties unique to Triangle sgv
    this.points = points;
    }
    // Rendered output used to run the test for a new Triangle
    render() {
    return `<polygon points="${this.points}" fill="${this.shapecolor}" />`;
    }
}

// Exports all Classes  
module.exports = { Shape, Square, Circle, Triangle };
  