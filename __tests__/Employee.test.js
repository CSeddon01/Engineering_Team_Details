const Employee = require("../lib/Employee.js");

test("creates employee information object", () => {
  const employee = new Employee("Jared", 1, "jared@fakemail.com");
  expect(employee.employeeName).toBe("Jared");
  expect(employee.employeeId).toEqual(expect.any(Number));
  expect(employee.employeeEmail).toEqual(expect.any(String));
});

test ("creates employee role", () => {
  const employee = new Employee("Employee");
  expect(employee.getRole()).toBe("Employee");
});

// test("testing get ID", () => {
//   const id = 1;
//   const employee = new Employee("Jared", id, "jared@fakemail.com");
//   expect(employee.getId()).toBe(id);
// });

module.exports = Employee;
