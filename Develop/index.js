// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a description of your project',
        name: 'description',
    },
    {
        default: 'npm i',
        message: 'The command to begin the installation',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter the usage information for your project',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter the contribution guidelines',
        name: 'contribution',
    },
    {
        type: 'list',
        message: 'Select one licence for your project',
        name: 'license',
        choices: ['Apache 2.0 License', 'MIT License', 'GPL License', 'Mozilla Public License 2.0', 'ISC License'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
