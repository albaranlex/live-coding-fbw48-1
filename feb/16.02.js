// SumOfNumbers.

// Create a program that adds up the numbers in an array (of at least 3 numbers).
//Bonus: Print to screen both the sum and the product of these numbers.

const sumOfNumbers = (...arr) => arr.reduce((acc, cur) => acc + cur);

console.log(sumOfNumbers(1, 2, 3, 4));
