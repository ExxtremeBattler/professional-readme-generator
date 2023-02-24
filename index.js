const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// const { title } = require("process");

// array of questions for user
const questions = [ "What is the title of your project?", "What's the description?", "Any installation instructions?",
 "Any usage information?", "Who has contributed thus far?", "Any tests you wanna include?", 
 "Finally, Which license would you like to use?"
];

// function to write README file
function writeToFile(fileName, ...data) {
    fs.writeFile(fileName, data + `\n`, (err) =>
  err ? console.error(err) : console.log('Commit logged!'))
}

// function to initialize program
function init() { 
  
console.log("Program started. Welcome to the professional README generator.");

inquirer
  .prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'title',
    },
    // {
    //   type: 'input',
    //   message: questions[1],
    //   name: 'description',
    // },
    // {
    //   type: 'input',
    //   message: questions[2],
    //   name: 'installation',
    // },
    // {
    //   type: 'input',
    //   message: questions[3],
    //   name: 'usage', 
    // },
    // {
    //   type: 'input',
    //   message: questions[4],
    //   name: 'contributors', 
    // },
    // {
    //   type: 'input',
    //   message: questions[5],
    //   name: 'tests', 
    // },
    // {
    //   type: 'input',
    //   message: questions[6],
    //   name: 'license', 
    // },
  ])
  .then((response) =>
    writeToFile("userREADME.md", generateMarkdown.generateMarkdown(response.title), 
    "## Table of Contents \n" +
    "-[Description](#description) \n"+
    "- [Installation](#installation) \n"+
    "- [Usage](#usage) \n"+
    "- [Credits](#credits) \n"+
    "- [License](#license) \n"
    
    )
    
  );

}

// function call to initialize program
init();
