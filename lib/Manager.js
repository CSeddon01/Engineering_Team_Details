//calling parent class Employee
const Employee = require("./Employee");
class Manager extends Employee {
  constructor(name = "", id, email, phone) {
    super(name, id, email);
    this.phone = phone;
    this.role = "Manager";
  }

  getPhone() {
    return this.phone
  }

  getRole() {
    return `Manager`;
  }
}

module.exports = Manager;
