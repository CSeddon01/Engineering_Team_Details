const Employee = require('../lib/Employee.js');

test ("creates employee information object", () => {
    const employee = new Employee("Jared", 1, "jared@fakemail.com");
    expect(employee.name).toBe("Jared");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

module.exports = Employee;