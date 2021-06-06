const Manager = require("../lib/Manager");
//Test when initializing
describe("Initialization", () => {
  it("should create an object with an employee with name, id, email, officenumber", () => {
    const manager = new Manager("Emily", "1", "imEmily@email.com", "number");

    //Verify object in each property
    expect(manager.name).toEqual("Emily");
    expect(manager.id).toEqual("1");
    expect(manager.email).toEqual("imEmily@email.com");
    expect(manager.officenumber).toEqual("number");
  });
});
