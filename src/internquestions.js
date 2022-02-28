var internQuestions = [
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
      //Ask manager for phone extension
      {
        type: "input",
        name: "school",
        message: "Enter intern school:",
        validate: (school) => {
            if (school) {
              return true;
            } else {
              console.log("Please enter the intern school name: (Required)");
              return false;
            }
        },
      },
      //Ask if more employees
      {
        type: "list",
        name: "newTeammate",
        message: "Enter another employee?",
        choices: ["Yes", "No"],
      },
    
];

module.exports = internQuestions;