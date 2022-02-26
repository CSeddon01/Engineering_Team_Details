const Manager = require('../lib/Manager.js');

test ("creates manager information object", () => {
    const manager = new Manager("555-555-1234");
    expect(manager.phone).toEqual(expect.any(String));
});


module.exports = Manager;