const {Shape, Triangle, Circle, Square} = require('./shapes');

describe('Shape', () => {
    // test to check password length
    describe('Text', () => {
        it('should be between 1-3 characters', () => {
        const usertext = 'abc';
        expect(usertext.length >= 1 && usertext.length <= 3).toEqual(true);
        });
    });
  
    //Create a new Triangle using the Triangle class and compare the outputs
    describe('Triangle', () => {
        it('should create a blue triangle', () => {
        const shape = new Triangle('text', 'red', 'blue', 'Triangle', [150, 18, 244, 182, 56, 182]);
        expect(shape.render()).toEqual('<polygon points="150,18,244,182,56,182" fill="blue" />');
        });
    });
    //Create a new Circle using the Circle class and compare the outputs
    describe('Circle', () => {
        it('should create a red circle', () => {
          const shape = new Circle('text', 'red', 'red', 'Square', 150, 100, 100);
          //Circle(text, textcolor, shapecolor, shape[0], 150, 100, 100);
          expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="red" />');
        });
    });
    //Create a new Square using the Square class and compare the outputs
    describe('Square', () => {
    it('should create a green square', () => {
        const shape = new Square('text', 'blue', 'green', 'Square', 50, 50, 100, 100);
        expect(shape.render()).toEqual('<rect x="50" y="50" width="100" height="100" fill="green" />');
    });
    });
  
});



   
      
      

