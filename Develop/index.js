const inquirer = require('inquirer');
const {writeFile, CopyFile } = require('./utils/generateMarkdown.js');
const generateRm = require('./src/readme-template.js')

const questions = responseData => {
    responseData = [];
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe the project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are the guidelines for contribution?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'How do you test it?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What type of license is it?',
            choices: ['Public Domain', 'Permissive', 'LGPL', 'Copyleft', 'Proprietary']
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address for contact',
        },
    ])
    .then(answers => {
        responseData.push(answers)
        console.log(answers)
    })
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init()

questions();

