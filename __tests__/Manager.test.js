const Manager = require('../lib/Manager.js');

test ("creates manager information object", () => {
    const manager = new Manager("Jared", 1, "jared@fakemail", 1);
    expect(manager.employeeName).toBe("Jared");
    expect(manager.employeeId).toEqual(expect.any(Number));
    expect(manager.employeeEmail).toEqual(expect.any(String));
    expect(manager.extension).toEqual(expect.any(Number));
});

test ("creates manager role", () => {
    const manager = new Manager("Manager");
    expect(manager.getRole()).toBe("Manager");
});

test ("getPhone() should return the phone extension number", () => {
    const manager = new Manager("Jared", 1, "jared@fakemail", 123);
    const extension = manager.getPhone();
    expect(extension).toEqual(manager.extension);
})

module.exports = Manager;