
var engineerQuestions = [
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
      //Ask for employee Id
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
      //Ask for employee Email
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
      //Ask engineer for github
      {
        type: "input",
        name: "github",
        message: "Enter engineer github username:",
        validate: (github) => {
            if (github) {
              return true;
            } else {
              console.log("Please enter the engineer github account name: (Required)");
              return false;
            }
        },
      },
      //Ask if more employees
      {
        type: "list",
        name: "nextTeammate",
        message: "Enter another employee?",
        choices: ["No", "Engineer", "Intern"],
      },
    
];

module.exports = engineerQuestions;