var expect = require('expect');
var {Users} = require('./users');

describe('Users', () => {
    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Amruta',
            room: 'Office room'
        }
        var resUser = users.addUsers(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });
})