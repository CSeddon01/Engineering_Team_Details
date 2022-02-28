const Intern = require('../lib/Intern.js');

test ("creates intern information", () => {
    const intern = new Intern("John", 5, "john@fakemail", "ZUniversity");
    expect(intern.employeeName).toBe("John");
    expect(intern.employeeId).toEqual(expect.any(Number));
    expect(intern.employeeEmail).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test ("creates intern role", () => {
    const intern = new Intern("Intern");
    expect(intern.getRole()).toBe("Intern");
});


module.exports = Intern;