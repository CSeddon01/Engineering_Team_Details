// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const fsPromises = fs.promises;

//Team members 
// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");

const cssGenerator = require("./src/css");
const templateGenerator = require("./src/page-template");

let employeeArray = [];




function writeToFile(fileName, data) {
  fsPromises.writeFile(fileName, data, err => {
    if (err) {
      reject(err);
      return;
    }
    resolve ({
      ok: true,
      message: "Created team"
    });
  })
}



async function employeeLoop () {
  let newEmployee = {};
  let answers = {};

  if (questions.employeeRole === "Manager") {
    answers = await inquirer.prompt(questions);
    newEmployee = new Manager(answers.employeName, answers.employeeId, answers.employeeEmail, answers.extension);
  } else if (questions.employeeRole === "Engineer") {
    answers = await inquirer.prompt(questions);
    newEmployee = new Engineer(answers.employeName, answers.employeeId, answers.employeeEmail, answers.github);
  } else if (questions.employeeRole === "Intern") {
    answers = await inquirer.prompt(questions);
    newEmployee = new Intern(answers.employeName, answers.employeeId, answers.employeeEmail, answers.school);
  }
  employeeArray.push(newEmployee);
}

let nextTeammate = answers.newTeammate;

if (nextTeammate === "No") {
  console.log("generating Team");
  let generatedTemplate = templateGenerator(employeeArray);

  writeToFile(`./dist/index.html`, generatedTemplate);

  let generatedcss = cssGenerator();
        writeToFile('./dist/style.css', generatedcss);
        console.log("README is generated in the dist folder!")

    } else {
        // if statement for creating the next employee
        console.log("Starting Prompt for your new " + nextTeammate + "!")
        employeeLoop(nextTeammate);
    }


// initialize javascript
employeeLoop('Manager');


  
