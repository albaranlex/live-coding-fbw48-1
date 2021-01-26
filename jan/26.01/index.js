//Write a function that it returns  “Two for me and one for you” when no arguments are passed
const userInput = (who = "you") => `Two for me and one for ${who}`;
console.log(userInput());
console.log(userInput("Fran"));

//Write a function  that it still calculates the power of a number even if the exp argument is not passed to it. The default exp should be set to 2.
//Sol 1
const powerOf = (num, exp = "2") => num ** exp;

//Sol 2
const powerOf2 = (num, exp = "2") => Math.pow(num, exp);
console.log(powerOf(3));
console.log(powerOf2(3));

//Write a function that it returns the total amount of arguments passed to it.
const howManyArgs = (...args) => args.length;
console.log(howManyArgs());
console.log(howManyArgs("Hey", 1, 2, 3));

//Write a function which accepts any amount of numbers and return the sum of their addition
const sum = (...nums) => {
  let result = 0;
  for (var i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return result;
};
console.log(sum(1));
console.log(sum(1, 15));
console.log(sum(25, 25, 20));

//Bonus: Write a function which accepts any amount of numbers and returns the average.
const average = (...nums) => {
  let result = 0;
  for (var i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return result / nums.length;
};
console.log(average(0));
console.log(average(1, 2));
console.log(average(1, 3, 6, 10));
console.log(average(12, 14, 16));
