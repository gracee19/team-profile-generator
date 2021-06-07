const Employee = require("./Employee")

class Engineer extends Employee {
    constructor (name, id, email, gitHub, role) {
        super (name, id, email);
        this.gitHub = gitHub;
        this.role = role;
    }
    getRole(Employee) {
        return "Engineer";
    }
    getgitHub () {
        return this.gitHub;
    }
}
module.exports = Engineer;