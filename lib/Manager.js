
class Manager {
    constructor(phone = "") {
    this.phone = phone;
}

getPhone() {
    return `${this.phone}`
};
}
module.exports = Manager;