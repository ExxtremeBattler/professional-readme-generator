const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [ "What is the title of your project?", "What's the description?", "Any installation instructions?",
 "Any usage information?", "Who has contributed thus far?", "Any tests you wanna include?", "Which license would you like to use?"
];

// function to write README file
function writeToFile(fileName, data) {
    fs.appendFile('userREADME.txt', data + `\n`, (err) =>
  err ? console.error(err) : console.log('Commit logged!'))
}

// function to initialize program
function init() { 
console.log("Program started. Welcome to the professional README generator.");

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       message: 'What is your user name?',
//       name: 'username',
//     },
//     {
//       type: 'password',
//       message: 'What is your password?',
//       name: 'password',
//     },
//     {
//       type: 'password',
//       message: 'Re-enter password to confirm:',
//       name: 'confirm',
//     },
//   ])
//   .then((response) =>
//     response.confirm === response.password
//       ? console.log('Success!')
//       : console.log('You forgot your password already?!')
//   );

}

// function call to initialize program
init();
