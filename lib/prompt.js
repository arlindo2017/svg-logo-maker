const inquirer = require('inquirer');

function userPrompt() {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to 3 letters for your logo text',
        },
        {
            type: 'input',
            name: 'textcolor',
            message: 'Enter your text color (name or hex value)',
        },
        {
            type: 'input',
            name: 'shapecolor',
            message: 'Enter your shape color (name or hex value)',
        },
        {
            type: 'checkbox',
            name: 'shape',
            message: 'Pick your shape',
            choices: ['Circle', 'Triangle', 'Square'],
        },
    ])
}
module.exports = { userPrompt };


