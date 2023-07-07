const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
    type: 'input',
    message: 'Please enter up to 3 characters for the logo.',
    name: 'text',
  },
  {
    type: 'input',
    message: 'Enter a color for the text OR a hexadecimal number.',
    name: 'text-color'
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
    name: 'shape-color'
  },
];

//function to write file
function writeToFile(fileName, data) {}

//function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        //console.log(response)
    const template = generateSVG(response)
    console.log(template)
    fs.writeFile('./examples/logo.svg', template, (err) =>
    err ? console.log(err) : console.log('Generated logo.svg')
  );
    })
}
//function to generate SVG
function generateSVG(data) {}


// Function call to initialize app
init();