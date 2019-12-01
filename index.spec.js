const { wiringTest } = require('./index');

describe('wiring test',()=>{
    it('should return string "working"',()=> {
        expect(wiringTest()).toBe('working');
    })
})