const Engineer = require("../lib/Engineer.js");

test("creates engineer information object", () => {
  const engineer = new Engineer("tammerg", 4, "tammer@fakemail.com", "tammerg");
  expect(engineer.employeeName).toEqual(expect.any(String))
  expect(engineer.employeeId).toEqual(expect.any(Number));
  expect(engineer.employeeEmail).toEqual(expect.any(String))
  expect(engineer.github).toEqual(expect.any(String));

});

test ("creates employee role", () => {
  const engineer = new Engineer("Engineer");
  expect(engineer.getRole()).toBe("Engineer");
});


module.exports = Engineer;