const Employee = require("./Employee");
class Manager extends Employee {
    constructor (name, id, email, officeNumber, role) {
        super (name, id, email);
        this.officenumber = officeNumber;
        this.role = role;
    }
    getRole(Employee) {
        return "Manager";
    }
    getOfficeNumber () {
        return this.officeNumber;
    }
}
module.exports = Manager;