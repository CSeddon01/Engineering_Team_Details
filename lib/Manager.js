//calling parent class Employee
const Employee = require("./Employee");
class Manager extends Employee {
  constructor(employeeName = "", employeeId, employeeEmail, extension) {
    super(employeeName, employeeId, employeeEmail);
    this.extension = extension;
    this.employeeRole = "Manager";
  }

  getPhone() {
    return this.extension
  }

  getRole() {
    return `Manager`;
  }
}

module.exports = Manager;
