const Manager = require('../lib/Manager.js');

test ("creates manager information object", () => {
    const manager = new Manager("Jared", 1, "jared@fakemail", 1);
    expect(manager.name).toBe("Jared");
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.phone).toEqual(expect.any(Number));
});

test ("creates manager role", () => {
    const manager = new Manager("Manager");
    expect(manager.getRole()).toBe("Manager");
});

test ("getPhone() should return the phone extension number", () => {
    const manager = new Manager("Jared", 1, "jared@fakemail", 123);
    const phone = manager.getPhone();
    expect(phone).toEqual(manager.phone);
})

module.exports = Manager;