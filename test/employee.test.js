const Employee = require("../lib/Employee");
//Test when initializing
describe("Initialization", () => {
    it("should create an object with an employee with name, id, email ", () => {
        const employee = new Employee("Emily", "1", "imEmily@email.com");

        //Verify object in each property
        expect(employee.name).toEqual("Emily");
        expect(employee.id).toEqual("1");
        expect(employee.email).toEqual("imEmily@email.com");
    });
})