const Engineer = require("../lib/Engineer.js");

test("creates engineer information object", () => {
  const engineer = new Engineer("tammerg");
  expect(engineer.github).toEqual(expect.any(String));
});

module.exports = Engineer;