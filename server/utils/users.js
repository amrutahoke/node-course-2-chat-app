class Users {
    constructor() {
        this.users = [];
    }

    addUsers(id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return this.users;
    }
}

module.exports = {Users};