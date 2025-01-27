// Task 1
function addTwoNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber; // Add the two numbers and return the result
}
console.log("The sum of 3 and 5 is:", addTwoNumbers(3, 5));





function logEvenNumbers(numberArray) {
    numberArray.forEach(currentNumber => {
        if (currentNumber % 2 === 0) { // Check if the current number is divisible by 2
            console.log(currentNumber); // Log the even number
        }
    });
}
    console.log("Even numbers [1, 2, 3, 4, 5, 6]:");
logEvenNumbers([1, 2, 3, 4, 5, 6]);

// Task 3
function getCommonElements(arrayOne, arrayTwo) {
    return arrayOne.filter(element => arrayTwo.includes(element)); // Keep elements that exist in both arrays
}
const commonItems = getCommonElements([1, 2, 3], [2, 3, 4]);
console.log("Common elements between [1, 2, 3] and [2, 3, 4]:", commonItems);




// Task 4
const originalNumbers = [5, 15, 20, 7, 25];
const transformedSum = originalNumbers
    .filter(filteredNumber => filteredNumber >= 10) // Keep numbers greater than or equal to 10
    .map(doubledNumber => doubledNumber * 2) 
    .reduce((accumulatedSum, currentNumber) => accumulatedSum + currentNumber, 0); // Add all the transformed numbers together
console.log("Result:", transformedSum);








// Task 5
function computeFactorial(inputNumber) {
    let factorialResult = 1; // Initialize result to 1 since multiplying starts with 1
    for (let currentMultiplier = 1; currentMultiplier <= inputNumber; currentMultiplier++) { // Loop from 1 to the input number
        factorialResult *= currentMultiplier; // Multiply current result with current multiplier
    }
    return factorialResult; // Return the final factorial value
}
// Example usage to calculate the factorial of 5
console.log("Factorial of 5 is:", computeFactorial(5));
