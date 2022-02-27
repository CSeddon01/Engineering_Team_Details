// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const fsPromises = fs.promises;
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
  //Ask for employee name
  {
    type: "input",
    name: "employeeName",
    message: "What is the employee name?(Required)",
    validate: (employeeName) => {
      if (employeeName) {
        return true;
      } else {
        console.log("Please enter the employee name. (Required)");
        return false;
      }
    },
  },
  //Ask for employee id
  {
    type: "input",
    name: "employeeId",
    message: "What is the employee ID?(Required)",
    validate: (employeeId) => {
      if (employeeId) {
        return true;
      } else {
        console.log("Please enter the employee ID. (Required)");
        return false;
      }
    },
  },
  //Ask for employee email
  {
    type: "input",
    name: "employeeEmail",
    message: "What is the employee email?(Required)",
    validate: (employeeEmail) => {
      if (employeeEmail) {
        return true;
      } else {
        console.log("Please enter the employee email. (Required)");
        return false;
      }
    },
  },
  //Ask for employee role
  {
    type: "list",
    name: "employeeRole",
    message: "Choose employee role: (Required)",
    choices: ["Manager", "Intern", "Engineer"],
    default: "Employee",
  },

  {
    type: "input",
    name: "github",
    message: "Enter engineer github username:",
    when: (answers) => answers.employeeRole === "Engineer",
  },

  {
    type: "input",
    name: "school",
    message: "Enter intern school name:",
    when: (answers) => answers.employeeRole === "Intern",
  },

  {
    type: "input",
    name: "extension",
    message: "Enter manager extension number:",
    when: (answers) => answers.employeeRole === "Manager",
  },
]

  function init() {
    inquirer.prompt(questions).then(async (answers) => {
      console.log(answers);
    })
  }

init(questions);
