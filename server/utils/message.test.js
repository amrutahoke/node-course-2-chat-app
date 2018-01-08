var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Amruta';
        var text = 'Hello';
        var message = generateMessage('Amruta', 'Hi how are you');

        expect(typeof message.createdAt).toBe('number');

    });
});