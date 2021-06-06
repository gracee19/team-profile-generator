const Intern = require("../lib/Intern");
//Test when initializing
describe("Initialization", () => {
    it("should create an object with an employee with name, id, email, school", () => {
        const intern = new Intern("Emily", "1", "imEmily@email.com", "UoA");

        //Verify object in each property
        expect(intern.name).toEqual("Emily");
        expect(intern.id).toEqual("1");
        expect(intern.email).toEqual("imEmily@email.com");
        expect(intern.school).toEqual("UoA");
    });
})