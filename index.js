// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const fsPromises = fs.promises;

//Team members
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//request for getting questions from seperate js files
const managerQuestions = require("./src/managerquestions");
const engineerQuestions = require("./src/engineerquestions");
const internQuestions = require("./src/internquestions");

//request for css and html files
const cssGenerator = require("./src/css");
const templateGenerator = require("./src/page-template");

//empty Array for loop
let employeeArray = [];

function writeToFile(fileName, data) {
  fsPromises.writeFile(fileName, data, (err) => {
    if (err) {
      reject(err);
      return;
    }
    resolve({
      ok: true,
      message: "Created engineering team",
    });
  });
}

//async loop to generate employee information
async function employeeLoop(employeeRole) {
  let newEmployee = {};
  let answers = {};

  if (employeeRole === "Manager") {
    answers = await inquirer.prompt(managerQuestions);
    newEmployee = new Manager(
      answers.employeeName,
      answers.employeeId,
      answers.employeeEmail,
      answers.extension
    );
  } else if (employeeRole === "Engineer") {
    answers = await inquirer.prompt(engineerQuestions);
    newEmployee = new Engineer(
      answers.employeeName,
      answers.employeeId,
      answers.employeeEmail,
      answers.github
    );
  } else if (employeeRole === "Intern") {
    answers = await inquirer.prompt(internQuestions);
    newEmployee = new Intern(
      answers.employeeName,
      answers.employeeId,
      answers.employeeEmail,
      answers.school
    );
  }
  employeeArray.push(newEmployee);

  let nextTeammate = answers.nextTeammate;

  //write to html based off of answers
  if (nextTeammate === "No") {
    console.log("generating team");
    let generatedTemplate = templateGenerator(employeeArray);

    writeToFile(`./dist/index.html`, generatedTemplate);

    let generatedcss = cssGenerator();
    writeToFile("./dist/style.css", generatedcss);
    console.log("File is generated successfully.");
  } else {
    console.log("New Employee question generated:");
    employeeLoop(nextTeammate);
  }
}

// initialize Loop
employeeLoop("Manager");
