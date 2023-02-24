const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// const { title } = require("process");

// array of questions for user
const questions = [ "What is the title of your project?", "What's the description?", "Any installation instructions?",
 "Any usage information?", "Who has contributed thus far?", "Any tests you wanna include?", 
 "Finally, Which license would you like to use? Your current options are : MIT, Apache 2.0, or The Unilicense."
];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data + `\n`, (err) =>
  err ? console.error(err) : console.log('Commit logged!'))
}

function verifyLicense(licenseChoice){

  switch(licenseChoice){
    case "MIT":
      return "This project is covered under the MIT License. Please refer to the repository for more information."
      break;
    case "The Unilicense":
      return "This project is covered under The Unilicense. Please refer to the repository for more information."
      break;
    case "Apache 2.0":
      return "This project is covered under the Apache 2.0 License. Please refer to the repository for more information."
      break;
    default:
      return "Sorry, was that an option? please try again."
      verifyLicense(licenseChoice)
  }
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
    {
      type: 'input',
      message: questions[1],
      name: 'description',
    },
    {
      type: 'input',
      message: questions[2],
      name: 'installation',
    },
    {
      type: 'input',
      message: questions[3],
      name: 'usage', 
    },
    {
      type: 'input',
      message: questions[4],
      name: 'contributors', 
    },
    {
      type: 'input',
      message: questions[5],
      name: 'tests', 
    },
    {
      type: 'input',
      message: questions[6],
      name: 'license', 
    },
  ])
  .then((response) =>

    writeToFile("userREADME.md", generateMarkdown.generateMarkdown(response.title) + 
    "## Table of Contents \n \n" +

    "- [Description](#description) \n"+
    "- [Installation](#installation) \n"+
    "- [Usage](#usage) \n"+
    "- [Credits](#credits) \n" +
    "- [License](#license) \n" +

    "## Description \n" + response.description + "\n \n" +
    "## Installation \n" + response.installation + "\n \n" +
    "## Usage \n" + response.usage + "\n \n" +
    "## Contributors \n" + response.contributors + "\n \n" +
    "## Tests \n" + response.tests + "\n \n" 
)
    
  );

}

// function call to initialize program
init();
