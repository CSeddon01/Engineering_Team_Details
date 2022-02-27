// Packages needed for this application 
const inquirer = require("inquirer");
const fs = require("fs");
const fsPromises = fs.promises
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const generateMarkdown = require("./utils/generateMarkdown.js");

// const promptForOptions = async (options) => {
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
            console.log(
              "Please enter the employee name. (Required)"
            );
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
        console.log(
          "Please enter the employee ID. (Required)"
        );
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
        console.log(
          "Please enter the employee email. (Required)"
        );
        return false;
      }
    },
  },
]
//Ask for employee role
// inquirer
// .prompt({
//       type: "prompt",
//       name: "employeeManager", 
//       message: "Is employee a Manager? (Required)",
//       choices: ["Yes", "No"],
//   }),
//   then(() => {
//       inquirer.prompt({
//           type: "input", 
//           name: "number",
//           message: "What is employee office phone extension? (Required)",
//           validate: (employeeName) => {
//             if (employeeName) {
//               return true;
//             } else {
//               console.log(
//                 "Please enter the employee name. (Required)"
//               );
//               return false;
//             }
//           },
//       })
//   })
              
// ]}       

function writeToFile(fileName, data) {
    fsPromises.writeFile(fileName, data, 
      (err) => {err ? console.error(err) : console.log("Created File.");
    });
  }

//   async function init(prompt) {
//     try {
//       const answers = await inquirer.prompt(prompt);
//       console.log("Gathered response.");
//       let generateMD = await generateMarkdown(answers);
//       console.log("Generating team...");
//       writeToFile("./dist/eteam.html", generateMD);
//      } finally { console.log("Your Team file has been generated.");
//   }}
  
// init (questions);