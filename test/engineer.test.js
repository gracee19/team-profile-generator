const Engineer = require("../lib/Engineer");
//Test when initializing
describe("Initialization", () => {
  it("should create an object with an engineer with name, id, email, gitHub ", () => {
    const newEng = new Engineer("Emily", "1", "imEmily@email.com", "eMily");

    //Verify object in each property
    expect(newEng.name).toEqual("Emily");
    expect(newEng.id).toEqual("1");
    expect(newEng.email).toEqual("imEmily@email.com");
    expect(newEng.gitHub).toEqual("eMily");
  });
});
