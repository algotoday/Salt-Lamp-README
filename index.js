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
    name: "link",
    message: "Enter the GitHub link to your project. (Required)",
  },
  {
    type: "confirm",
    name: "feature",
    message: "Would you like to feature this project?",
    default: false,
  },
  {
    type: "confirm",
    name: "confirmAddProject",
    message: "Would you like to enter another project?",
    default: false,
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
  inquirer.prompt(questions).then (answers => {
const readme = `${answers.name}`; 
writeToFile('readme-answers',readme);
});
}



// Function call to initialize app
init();
