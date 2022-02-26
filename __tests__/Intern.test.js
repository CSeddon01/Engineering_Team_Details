const Intern = require('../lib/Intern.js');

test ("creates intern school name", () => {
    const intern = new Intern("UT");
    expect(intern.school).toEqual(expect.any(String));
});


module.exports = Intern;