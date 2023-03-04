const { userPrompt } = require('./lib/prompt.js');
const { Square, Circle, Triangle } = require('./lib/shapes.js');
const fs = require('fs');

function init() {
    userPrompt()
    .then((answers) => {
      const userText = answers.text;
      const userTextColor = answers.textcolor;
      const userShapeColor = answers.shapecolor;
      const userShape = answers.shape;

      return {userText, userTextColor, userShapeColor, userShape};
    })
    .then(({userText, userTextColor, userShapeColor, userShape}) => {
      let svgShape;
      let svgShapeString;
    
      if (userShape[0] === 'Circle') {
        //constructor(text, textcolor, shapecolor,shapetype, cx, cy, r)
        svgShape = new Circle(userText, userTextColor, userShape[0], userShapeColor, 150 ,100, 80);
        svgShapeString = `<circle cx="${svgShape.cx}" cy="${svgShape.cy}" r="${svgShape.r}" fill="${svgShape.shapecolor}"/>`
        return svgShapeString;

      } else if (userShape[0] === 'Triangle') {
        svgShape = new Triangle(userText, userTextColor, userShape[0], userShapeColor,[200, 10, 250, 190, 160, 210]);
        //svgShapeString = `<circle cx="${svgShape.cx}" cy="${svgShape.cy}" r="${svgShape.r}" fill="${svgShape.shapecolor}"/>`
        
        return svgShapeString;

      } else if (userShape[0] === 'Square') {
        //(text, textcolor, shapetype, shapecolor,x,y,width,height)
        svgShape = new Square(userText, userTextColor, userShape[0], userShapeColor, 60, 10, 30, 30);
        //svgShapeString = `<circle cx="${svgShape.cx}" cy="${svgShape.cy}" r="${svgShape.r}" fill="${svgShape.shapecolor}"/>`
        
        return svgShapeString;

      } else {
        throw new Error('Invalid shape selected');
      }  
    })
    .then((svgShapeString) => {
        fs.writeFileSync('./examples/logo.svg',
        
        svgShapeString

        );
        
    })
    .catch((err) => {
      console.log(err);
    });
}

init();




// Do something with the new shape, e.g. write it to a file
//fs.writeFileSync('newShape.json', JSON.stringify(newShape));

  
