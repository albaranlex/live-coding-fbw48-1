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

//reduce
const reducer = (acc, cur) => acc + cur;
const resultArr = [1, 2, 3, 4].reduce(reducer, 0);
console.log(resultArr);

//filter
const names = ["Mark", "Mike", "Vince"];
const filArr = names.filter((name) => name.length > 3);
console.log(filArr);

//find
const coolNums = [1, 2, 3, 43, 5, 6, 7];
const biggerThanFive = coolNums.find((num) => num > 5);
console.log(biggerThanFive);

//sumOfNumbers using reduce
const sumNumbers = (...args) => args.reduce((acc, cur) => acc + cur);
console.log(sumNumbers(1, 2, 3));

//toCamelCase using map
const toCamelCase = (str) => {
  let strToArr = str.toLowerCase().split("_");
  let result = strToArr.map((item, i) =>
    1 > i ? item : item[0].toUpperCase() + item.slice(1)
  );
  return result.join("");
};
console.log(toCamelCase("cool_fun_things"));

//hackerSpeak
/***c4n y0u r34d th15?**
Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version 
of the string.
NB: for your program to work properly, 
the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

Examples:
* hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
* hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
* hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r" */

const hackerSpeak = (orig, replacements = { a: "4", e: "3", i: "1", o: "0" }) =>
  Object.entries(replacements).reduce(
    (acc, el) => acc.replace(el[0], el[1]),
    orig
  );

console.log(hackerSpeak("javascript is cool"));

/* Create a program that changes a given array by adding 1 to each odd integer and 
subtracting 1 from each even integer. */

const isEven = (...num) => {
  let result = "";
  if (num % 2 == 0) {
    result = num + 1;
  } else {
    result = num - 1;
  }
  return result;
};
console.log(isEven(1, 2, 3));
