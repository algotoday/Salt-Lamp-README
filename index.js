const fs = require(`fs`)
const inquirer = require("inquirer");

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of the project (Required)",
  },
  {
    type: "checkbox",
    name: "languages",
    message: "What did you build this project with? (Check all that apply)",
    choices: [
      "JavaScript",
      "HTML",
      "CSS",
      "ES6",
      "jQuery",
      "Bootstrap",
      "Node",
    ],
  },
  {
    type: "input",
    name: "GithubUsername",
    message: "What is your github username? (Required)",
  },
  {
    type: "input",
    name: "InstallationInstructions",
    message: "How did you install the project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Write the usage information?",
  },
  {
    type: "input",
    name: "Contribution",
    message: "How to contribute to the project?",
  },
  {
    type: "input",
    name: "Test",
    message: "How to test the project?",
  },
  {
    type: "list",
    name: "license",
    message: "Select license",
    choices: [
      "no license",
      "MIT",
      "Apache License 2.0",
      "GNU GPLv3",
      "GNU GPLv2",
      "ISC License",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./${fileName}.md`, data, err => {
    if (err) {
      reject(err);
      return;
    }
    resolve({
      ok: true,
      message: 'File created!'
    });
  });
});
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then (data => {
const readme = `
# ${data.name}
## Description
- ${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
## Installation
${data.InstallationInstructions}
## Usage
${data.usage}
## License
${data.license}
## How to Contribute
${data.Contribution}
## Tests
${data.Test}
## Questions
Contact Information:
* [gitHubLink](https://github.com/${data.GithubUsername})
`; 
writeToFile('readme-answers',readme);
});
}



// Function call to initialize app
init();
