const fizzbuz = require('./fizzbuzz')



test('should return "1" when passed 1',()=>{
    const result=fizzbuz(1);
    expect(result).toBe("1");
})

test('should return "2" when passed 2',()=>{
    const result=fizzbuz(2);
    expect(result).toBe("2");
})

