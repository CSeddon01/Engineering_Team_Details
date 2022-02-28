//calling parent class Employee
const Employee = require('./Employee');
class Engineer extends Employee {
    constructor(employeeName = "", employeeId, employeeEmail, github) {
        super(employeeName, employeeId, employeeEmail);
    this.github = github;
    this.employeeRole = `Engineer`;
};

getGithub() {
    return this.github;
};

getRole() {
    return `Engineer`;
};
};

module.exports = Engineer;