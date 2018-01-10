var expect = require('expect');
var {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [
            {
            id: '1',
            name: 'Amruta',
            room: 'Demo chat'
            },
            {
                id: '2',
                name: 'Pradeep',
                room: 'Demo chat'
            },
            {
                id: '3',
                name: 'Abhay',
                room: 'Demo chat 2'
            }];
    });


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

    it('should remove the user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        var userId = '4';
        var user = users.removeUser(userId);

        expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);

    });

    it('should not find a user', () => {
        var userId = '4';
        var user = users.getUser(userId);
    });

    it('should name for Demo chat', () => {
        var userList = users.getUsers('Demo chat');

        expect(userList).toEqual(['Amruta', 'Pradeep']);
    });

    it('should name for Demo chat 2', () => {
        var userList = users.getUsers('Demo chat 2');

        expect(userList).toEqual(['Abhay']);
    });
})