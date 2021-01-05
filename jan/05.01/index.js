//concatenation
let var1 = "Hello";
let var2 = 2;
let sum = var1 + " " + var2;
console.log(sum);

//check if number is odd or even (Solution 2)
let var3 = 5;
let var4 = 40;
let var5 = 2.1;
let var6 = 22;

var6 % 2 == 0
  ? console.log("This is even")
  : console.log("That is odd!");

//oddEven with functions (Solution 1)
function oddOrEven(num) {
    return num % 2 == 0 ? "even" : "odd";
}
console.log(oddOrEven(5));
console.log(oddOrEven(40));
console.log(oddOrEven(2.1));

//Convert string to a number
let str1 = "123";
console.log(parseInt(str1, 10));

//Convert string to a float
let str2 = "130.7";
console.log(parseFloat(str2));

//3
let isDog = 12;
console.log(isDog % 2 == 0 ? "pat, pat" : "Finde me a dog to pat!")
