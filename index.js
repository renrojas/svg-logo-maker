const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require("./lib/shapes")

const questions = [
    {
    type: 'input',
    message: 'Please enter up to 3 characters for the logo.',
    name: 'text',
  },
  {
    type: 'input',
    message: 'Enter a color for the text OR a hexadecimal number.',
    name: 'text_color'
  },
  {
    type: 'list',
    message: 'What shape would you like your logo to be.',
    choices: ['circle', 'triangle', 'square'],
    name: 'shape'
  },
  {
    type: 'input',
    message: 'Enter a color for the shape OR a hexadecimal number.',
    name: 'shape_color'
  },
];

//function to write file
function writeToFile(fileName, data) {}

//function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log(response)
        let shape;

        if(response.shape === "triangle") {
            shape = new Triangle(response.text, response.text_color, response.shape_color)
        }
        if(response.shape === "circle") {
            shape = new Circle(response.text, response.text_color, response.shape_color)
        }
        if(response.shape === "square") {
            shape = new Square(response.text, response.text_color, response.shape_color)
        }
        console.log(shape);
        logo = shape.render()
        console.log(logo)
    // const template = generateSVG(response)
    // console.log(template)
    fs.writeFile('./examples/logo.svg', logo, (err) =>
    err ? console.log(err) : console.log('Generated logo.svg')
 );
    })
}


// Function call to initialize app
init();