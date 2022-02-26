const Intern = require('../lib/Intern.js');

test ("creates intern information", () => {
    const intern = new Intern("John", 5, "john@fakemail", "ZUniversity");
    expect(intern.name).toBe("John");
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test ("creates intern role", () => {
    const intern = new Intern("Intern");
    expect(intern.role).toBe("Intern");
});


module.exports = Intern;