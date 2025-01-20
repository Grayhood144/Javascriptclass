const randomNumbers = Array.from({ length: 20 }, () => Math.floor(Math.random() * 101));
// The Length tag is set to 20, to gen 20 numbers. Math Floor Random Sorts between 0 and 100 to grab a random number
console.log("Task 1")
console.log(randomNumbers);  // Puts the random numbers in the console

console.log("Task 2")

function getmax(arr) {
    let max = arr[0]; // This adds the first number to the maximum.
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) { 
            max = arr[i]    
}
    }
return max; // If the next number is a greater than the maximum, update the maximum.
}
console.log("Maximum Element:", getmax(randomNumbers)); // Returns results to Console.

console.log("Task 3")

function getMin(arr) {
    let minIndex = 0;        // Start with the first element as the minimum
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) { //    Compare current element with the element at minIndex
            minIndex = i; // Update minIndex if a smaller value is found
        }
    }
    return minIndex; 
}
console.log("Position of Minimum:", getMin(randomNumbers));


console.log("Task 4")

const sortd = [...randomNumbers].sort((a, b) => b - a); // Sort the numbers Based on Decending order
console.log(sortd);  // Sends sorted results to the console.

console.log("Task 5")

const students = {  // creates A list of students and there grades so we can average them later.
    Bob: 93,
    Fred: 85,
    Mike: 78,
    Slate: 88,
    Mich: 91,
    Gray: 80,
};

console.log(students)


function Averagegrade(gradesObj) {
    const grades = Object.values(gradesObj); // Pull grades
    const sum = grades.reduce((acc, grade) => acc + grade, 0); // Add grades Together
    return sum / grades.length; // gets total number of grades and the sum of the grades and divides them to get average.
}
console.log("Average Grade")
console.log(Averagegrade(students)); 
console.log("That is the average for the 6 students.")