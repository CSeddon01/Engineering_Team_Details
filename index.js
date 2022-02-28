// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const style = require("./dist/style.css");
const Employee = require("./lib/Employee");

const writeToFile = require("./src/page-template");


const templateGenerator = require('./src/page-template');


const employeeArray = [];


const questions = [
  //Ask for employee employeeName
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
  //Ask for employee employeeId
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
  //Ask for employee employeeEmail
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
  //Engineering role question
  {
    type: "input",
    name: "github",
    message: "Enter engineer github username:",
    when: (answers) => answers.employeeRole === "Engineer",
  },
  //Intern role question
  {
    type: "input",
    name: "github",
    message: "Enter engineer github username:",
    when: (answers) => answers.employeeRole === "Engineer",
  },
  //Manager role question
  {
    type: "input",
    name: "extension",
    message: "Enter manager extension number:",
    when: (answers) => answers.employeeRole === "Manager",
  },
  //End Question
  {
    type: "list",
    name: "newEmployee",
    message: "Enter another employee?",
    choices: ["Yes", "No"],
  },
];

function addEmployee() {
  inquirer.prompt(questions).then((engTeam) => {
    if (engTeam.newEmployee === "Yes") {
      employeeList();
    }
    if (engTeam.newEmployee === "No") {
     compileTeam();
    }
  });
}

function employeeList() {
  inquirer.prompt(questions).then((team) => {
    if (team.employeeRole === "Manager") {
      let manager = new Manager(
        managerCard.employeeemployeeName,
        managerCard.employeeemployeeId,
        managerCard.employeeemployeeEmail,
        managerCard.extension
      );
      employeeArray.push(manager);
      
    } else if (team.employeeRole === "Engineer") {
      let engineer = new Engineer(
        engineerCard.employeeemployeeName,
        engineerCard.employeeemployeeId,
        engineerCard.employeeemployeeEmail,
        engineerCard.github
      );
      employeeArray.push(engineer);
     
    } else if (team.employeeRole === "Intern") {
      let intern = new Intern(
        internCard.employeeemployeeName,
        internCard.employeeemployeeId,
        internCard.employeeemployeeEmail,
        internCard.school
      );
      employeeArray.push(intern);
      
    }
  });
}

function compileTeam () {
  const htmlArray = [];
  const htmlBeginning = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta employeeName="viewport" content="wemployeeIdth=device-wemployeeIdth, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${employeeArray[0]}</title>
    <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
    <style>
     ${style}
    </style>
</head>
<body>
    <div class="banner-bar">
        <h1>${employeeArray[0]}</h1>
    </div>
    <div class="card-container">
    `
    htmlArray.push(htmlBeginning);

    for (let i = 1; i < employeeArray.length; i++) {
        let object = `
        <div class="member-card">
            <div class="card-top">
                <h2>${employeeArray[i].employeeName}</h2>
                <h2>${employeeArray[i].title}</h2>
            </div>
            <div class="card-bottom">
                <p>Employee employeeId: ${employeeArray[i].employeeId}</p>
                <p>employeeEmail: <a href="mailto:${employeeArray[i].employeeEmail}">${employeeArray[i].employeeEmail}</a>></p>
        `
        if (employeeArray[i].extension) {
            object += `
            <p>${employeeArray[i].extension}</p>
            `
        }
        if (employeeArray[i].github) {
            object += `
            <p>GitHub: <a href="https://github.com/${employeeArray[i].github}">${employeeArray[i].github}</a></p>
            `
        }
        if (employeeArray[i].school) {
            object += `
            <p>School: ${employeeArray[i].school}</p>
            `
        }
        object += `
        </div>
        </div>
        `
        htmlArray.push(object)
    }

    const htmlEnd = `
    </div>
    </body>
    </html>
    `
    htmlArray.push(htmlEnd);

    fs.writeFile(`./dist/team/${employeeArray[0]}.html`, htmlArray.join(""), function (err) {
        
    })
}

addEmployee();
  
