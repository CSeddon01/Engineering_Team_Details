//calling parent class Employee
const Employee = require('./Employee');
class Intern extends Employee {
    constructor(employeeName = "", employeeId, employeeEmail, school) {
    super(employeeName, employeeId, employeeEmail);
    this.school = school;
    this.employeeRole = "Intern";
};

getSchool() {
    return this.school;
};

getRole() {
    return `Intern`;
};
};

module.exports = Intern;
