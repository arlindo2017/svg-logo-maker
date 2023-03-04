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

      return { userText, userTextColor, userShapeColor, userShape };
    })
    .then(({ userText, userTextColor, userShapeColor, userShape }) => {
      let svgShape;
      let svgShapeString;
      let svgText;
      let svgTextColor;

      if (userShape[0] === 'Circle') {
        //constructor(text, textcolor, shapecolor,shapetype, cx, cy, r)
        svgShape = new Circle(userText, userTextColor, userShapeColor, userShape[0], 150, 100, 80);
        svgText = svgShape.text;
        svgTextColor = svgShape.textcolor;
        svgShapeString = `<circle cx="${svgShape.cx}" cy="${svgShape.cy}" r="${svgShape.r}" fill="${svgShape.shapecolor}"/>`;
        console.log(svgShapeString)
        return {svgShapeString, svgText, svgTextColor};

      } else if (userShape[0] === 'Triangle') {
        svgText = svgShape.text;
        svgShape = new Triangle(userText, userTextColor, userShapeColor, userShape[0], [200, 10, 250, 190, 160, 210]);
        svgText = svgShape.text;
        svgTextColor = svgShape.textcolor;
        svgShapeString = `<polygon points="${svgShape.points.join(' ')}" fill="${svgShape.shapecolor}"/>`;
        return {svgShapeString, svgText, svgTextColor};

      } else if (userShape[0] === 'Square') {
        svgText = svgShape.text;
        svgTextColor = svgShape.textcolor;
        svgShape = new Square(userText, userTextColor, userShapeColor, userShape[0], 60, 10, 200, 200);
        svgText = svgShape.text;
        svgShapeString = `<rect x="${svgShape.x}" y="${svgShape.y}" width="${svgShape.width}" height="${svgShape.height}" fill="${svgShape.shapecolor}"/>`;
        return {svgShapeString, svgText, svgTextColor};

      } else {
        throw new Error('Invalid shape selected');
      }
    })
    .then(({ svgShapeString, svgText, svgTextColor }) => {
      fs.writeFileSync('./examples/logo.svg',
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
       ${svgShapeString}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${svgTextColor}">${svgText}</text>
      </svg>`
      );

    })
    .catch((err) => {
      console.log(err);
    });
}

init();
