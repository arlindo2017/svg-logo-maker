// Import all Libraries
const { userPrompt } = require('./lib/prompt.js');
const { Square, Circle, Triangle } = require('./lib/shapes.js');
const fs = require('fs');
const tinycolor = require('tinycolor2');

function init() {
    //Prompt user with question from prompt.js
    userPrompt()
    .then(({text, textcolor, shapecolor, shape}) => {
        let svgShape;
        let svgShapeString;
        let svgText;
        let svgTextColor;
        let svgShapeType;

        // Validate textcolor and shapecolor using tinicolor library
        if (!tinycolor(textcolor).isValid() || !tinycolor(shapecolor).isValid()) {
            throw new Error('Invalid color entered');
        }
       
        // check user Text Length
        if (text.length > 3||text.length == null) {
            throw new Error('Text length must be between 1-3 characters in length');
        }
        // Render shape code based on the user option
        if (shape[0] === 'Circle') {
          svgShape = new Circle(text, textcolor, shapecolor, shape[0], 150, 100, 100);
          svgText = svgShape.text;
          svgTextColor = svgShape.textcolor;
          svgShapeType = svgShape.shapetype;
          // Circle string
          svgShapeString = `<circle cx="${svgShape.cx}" cy="${svgShape.cy}" r="${svgShape.r}" fill="${svgShape.shapecolor}"/>`;
          return {svgShapeString, svgText, svgTextColor, svgShapeType};
      
        } else if (shape[0] === 'Triangle') {
          svgShape = new Triangle(text, textcolor, shapecolor, shape[0], [150, 10, 244, 190 ,56, 190]);
          svgText = svgShape.text;
          svgTextColor = svgShape.textcolor;
          svgShapeType = svgShape.shapetype;
          // Triangle string
          svgShapeString = `<polygon points="${svgShape.points.join(' ')}" fill="${svgShape.shapecolor}"/>`;
          return {svgShapeString, svgText, svgTextColor, svgShapeType};
      
        } else if (shape[0] === 'Square') {
          svgShape = new Square(text, textcolor, shapecolor, shape[0], 60, 10, 200, 200);
          svgTextColor = svgShape.textcolor;
          svgText = svgShape.text;
          svgShapeType = svgShape.shapetype;
          // Square string
          svgShapeString = `<rect x="${svgShape.x}" y="${svgShape.y}" width="${svgShape.width}" height="${svgShape.height}" fill="${svgShape.shapecolor}"/>`;
          return {svgShapeString, svgText, svgTextColor, svgShapeType};
            
        } else {
          throw new Error('Invalid shape selected');
        }
      })   
    // Write svg file   
    .then(({ svgShapeString, svgText, svgTextColor, svgShapeType}) => {
        fs.writeFileSync(`./examples/${svgShapeType}.svg`,
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${svgShapeString}
        <text  x="150" y="115" font-size="50" text-anchor="middle" fill="${svgTextColor}">${svgText}</text>
        </svg>`
        );
        return (svgShapeType);
    })
    // Console log that the file was created
    .then((svgShapeType) => {
        console.log(`${svgShapeType}.svg was generated and saved in ./examples/ folder.`);
    })
    // Catch any errors
    .catch((err) => {
        console.log('Something went wrong :',err);
    });
}

init();
