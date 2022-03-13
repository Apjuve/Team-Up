const Employee = require('./Employee');

class Manager extends Employee {
constructor(name, id, email, school) {
    super(name, id, email)
    this.officeNumber = this.officeNumber;
}

getOfficeNum() {
    return this.officeNumber
}

getRole() {
    return 'Manager'
}
}

module.exports = Manager;
