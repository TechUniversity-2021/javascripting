function fizzbuzz(value) {
    if(value%3===0){
        if(value%5===0){
            return "FizzBuzz";
        }
        return "Fizz";
    }
    if(value%5===0){
        return "Buzz";
    }
    return value.toString();

}
module.exports =fizzbuzz
//syntax to export particular function
/*module.exports= {
    fizzbuzz,
    fizzbuzz1,
    fizzbuzz2
}*/
//export multiple  
//module refers to current module of js file 