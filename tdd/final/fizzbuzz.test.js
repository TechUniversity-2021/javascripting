const { TestScheduler } = require("jest");

//getting the whole thing as an object
const fizzbuzz= require('./fizzbuzz')

//fizzbuzz.fizzbuzz1

// test('can call fizzbuzz', ()=>{
//     fizzbuzz();
// })  
function checkFizzBuzz(value, expectedValue) {
    const result=fizzbuzz(value);
    expect(result).toBe(expectedValue);
}

test("should return '1' when passed 1", ()=>{
    // const result=fizzbuzz(1);
    // expect(result).toBe('1');

    checkFizzBuzz(1, '1');
})  

test("should return '2' when passed 2", ()=>{
    // const result=fizzbuzz(2);
    // expect(result).toBe('2');

    checkFizzBuzz(2, '2');
})  

test("should return 'Fizz' when multiple of 3", ()=>{

    checkFizzBuzz(3, "Fizz");
})  

test("should return 'Buzz' when multiple of 5", ()=>{

    checkFizzBuzz(5, "Buzz");
})  

test("should return 'FizzBuzz' when multiple of 3 and 5", ()=>{

    checkFizzBuzz(15, "FizzBuzz");
    checkFizzBuzz(30, "FizzBuzz");
    checkFizzBuzz(45, "FizzBuzz");
})  