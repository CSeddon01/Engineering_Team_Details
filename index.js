// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const writeFile = util.promisify(fs.writeFile);
const render = `/dist/eteam`;

const employeeArray = [];

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
    name: "school",
    message: "Enter intern school name:",
    when: (answers) => answers.employeeRole === "Intern",
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
      renderHTML(employeeArray);
    }
  });
}

function employeeList() {
  inquirer.prompt(employeeMembers).then((team) => {
    if (team.employeeRole === "Manager") {
      let manager = new Manager(
        managerCard.employeeName,
        managerCard.employeeId,
        managerCard.employeeEmail,
        managerCard.extension
      );
      employeeArray.push(manager);
      teamInfo();
    } else if (team.employeeRole === "Engineer") {
      let engineer = new Engineer(
        engineerCard.employeeName,
        engineerCard.employeeId,
        engineerCard.employeeEmail,
        engineerCard.github
      );
      employeeArray.push(engineer);
    } else if (team.employeeRole === "Intern") {
      let intern = new Intern(
        internCard.employeeName,
        internCard.employeeId,
        internCard.employeeEmail,
        internCard.school
      );
      employeeArray.push(intern);
    }
  });
}

async function renderHTML(file) {
  const teamHTML = render(file);
  await fs.writeFile(outputPath, teamHTML).then(function () {
    console.log("Completed Employee List");
  })
}
addEmployee();