var calculatePercentage = function(cent) {
    return function(percentValue) {
        return function(percentOf){
            return `${percentValue} % of ${percentOf} is ${(percentValue/cent)*percentOf}`;
        };
    };
};
 
const findXPercent = calculatePercentage(100);
const find25Percentage = findXPercent(25);
const find50Percentage = findXPercent(50);
const find75Percentage = findXPercent(75);

console.log(calculatePercentage(100)(25)(300))

console.log(find25Percentage(200));

console.log(find50Percentage(200));

console.log(find75Percentage(200));