const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// const { title } = require("process");

// array of questions for user
const questions = [ "What is the title of your project?", "What's the description?", "Any installation instructions?",
 "Any usage information?", "Who has contributed thus far?", "Any tests you wanna include?", 
 "Which license would you like to use? Your current options are : MIT, Apache 2.0, or The Unilicense.",
 "Please type in your github username.",
 "Finally, enter your email address."

];

var badge = ""

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data + `\n`, (err) =>
  err ? console.error(err) : console.log("Readme created! Please navigate to the results folder for your files."))
}

function verifyLicense(licenseChoice){

  function callback(err) {
    if (err) throw err;
    console.log("License copied!");
  }

  switch(licenseChoice.toUpperCase()){
    case "MIT":

      fs.copyFile("usableLicenses/MIT LICENSE.txt", "results/LICENSE.txt", callback);
      badge = "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)"
      return "This project is covered under the MIT License. Please refer to the repository for more information."
      break;
    case "THE UNILICENSE":
      fs.copyFile("usableLicenses/THE UNILICENSE.txt", "results/LICENSE.txt", callback);
      badge = "[![Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)](https://unlicense.org/)"
      return "This project is covered under The Unilicense. Please refer to the repository for more information."
      break;
    case "APACHE 2.0":
      fs.copyFile("usableLicenses/APACHE 2.0 LICENSE.txt", "results/LICENSE.txt", callback);
      badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      return "This project is covered under the Apache 2.0 License. Please refer to the repository for more information."
      break;
    default:
      console.log("Sorry, we didn't catch that. Please manually edit the README file with a licnese of your choosing.")
      return "**insert license descrption here**"
      break;
  }
}

// function to initialize program
function init() { 
  
console.log("Program started. Welcome to the professional README generator.");

inquirer
  .prompt([
    {
      type: "input",
      message: questions[0],
      name: "title",
    },
    {
      type: "input",
      message: questions[1],
      name: "description",
    },
    {
      type: "input",
      message: questions[2],
      name: "installation",
    },
    {
      type: "input",
      message: questions[3],
      name: "usage", 
    },
    {
      type: "input",
      message: questions[4],
      name: "contributors", 
    },
    {
      type: "input",
      message: questions[5],
      name: "tests", 
    },
    {
      type: "input",
      message: questions[6],
      name: "license", 
    },
    {
      type: "input",
      message: questions[7],
      name: "username", 
    },
    {
      type: "input",
      message: questions[8],
      name: "email", 
    },
  ])
  .then((response) =>

  verifyLicense(response.license) +

    writeToFile("results/userREADME.md", generateMarkdown.generateMarkdown(response.title +" "+ badge) + "\n" +

    "## Table of Contents \n \n" +

    "- [Description](#description) \n"+
    "- [Installation](#installation) \n"+
    "- [Usage](#usage) \n"+
    "- [Contributors](#Contributors) \n" +
    "- [License](#license) \n \n" +

    "## Description \n" + response.description + "\n \n" +
    "## Installation \n" + response.installation + "\n \n" +
    "## Usage \n" + response.usage + "\n \n" +
    "## Contributors \n" + response.contributors + "\n \n" +
    "## Tests \n" + response.tests + "\n \n"+
    "## License \n" + verifyLicense(response.license) + "\n \n"  +
    "## Questions \n" + "For any questions, please find my contact info below: \n" + 
    "Github : [" + response.username + "]" + 
    "(https://github.com/" + response.username + ") \n" + 
    "Email : " + response.email +
    "\n \n" 

 
)
    
  );

}

// function call to initialize program
init();
