const { doesNotMatch } = require('assert');
const warmup = require('./Warmup');


test( "console.log with 'TIMED OUT!' after 300ms " , (done) => {
    const consoleSpy = jest.spyOn(console, 'log');
    warmup();
    setTimeout(()=>{
        expect(consoleSpy).toHaveBeenCalledWith('TIMED OUT!');
        done();
    },300);
    
});