var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Amruta';
        var text = 'Hello';
        var message = generateMessage('Amruta', 'Hi how are you');

        expect(typeof message.createdAt).toBe('number');

    });

});

describe('generateLocationMessage', () => {
    it('should generate correct location message object', () => {
        var from = 'Amruta';
        var latitude = 15;
        var longitude = 19;
        var url = `https://www.google.com/maps?q=15,19`;
        var message = generateLocationMessage(from, latitude, longitude);

        expect(typeof message.createdAt).toBe('number');

    });
})