var expect = require('expect');
var {isRealString} = require('./validation');

describe('isRealString', () => {

    it('should reject non string value', () => {
        var res = isRealString(98);

        expect(res).toBe(false);
    });

    it('should reject string with only spaces', () => {
       var res = isRealString('      ');
       expect(res).toBe(false);
    });

    it('should allow strings with non space character', () => {
        var res = isRealString('  Amruta ');
        expect(res).toBe(true);
    });
});