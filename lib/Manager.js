const Employee = require("./Employee");
class Manager extends Employee {
    constructor (name, id, email, officenumber, role) {
        super (name, id, email);
        this.officenumber = officenumber;
        this.role = role;
    }
    getRole(Employee) {
        return "Manager";
    }
    getOfficeNumber () {
        return this.officenumber;
    }
}
module.exports = Manager;