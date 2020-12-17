//Printing out a string
console.log("Hadi");
console.log("I love Berlin");
//Mathematical expressions: +, -, *, /, %
console.log(1 + 1);
console.log(1 * 4);
//Boolean expressions: comparison operators (===, !==, >=, <=, >, <)
console.log(12 == 2);
console.log(4);

// declaring variables
// let varName = varValue
// string value
var name = "Hadi";
// boolean value
let boo = 1 < 3;
console.log(boo);
// number value
let sum = 22 + 2;
console.log(sum);
console.log(name);
let bb = 44;
let add = "Berlin, 12334 💪";
console.log(add);
let x = 55;
console.log(x);
x = 3;
console.log(x);
let age;
console.log(age);
console.log(bb);
age = 31;
console.log(age, bb);
// typeof
console.log(typeof x);
console.log(typeof add);
console.log(typeof name);
console.log(typeof bb);
let y = 3.33333;
let z = 34.435;
let sumNum = y + z;
console.log(y + z);
let str1 = "Hi";
let str2 = " I am";
let strSum = str1 + str2;
console.log(str1 + str2);
console.log(typeof strSum);

let add2, age2, name2;
add2 = "something";
// Ternary operator
// ternary condition ? execute only if the condition was truthy : execute only if the condition was faulty
let person = 21;
console.log(person > 16);
person > 16 ? console.log("Go Party 😎 ") : console.log("Stay home 🤨");
let drive = 18;
drive >= 18
  ? console.log("Yeah let's drive now 💪🏻 ")
  : console.log("Nope sorry");
// comparison operators (===, !==, >=, <=, >, <)
console.log(1 == 1);
let num1 = 1;
let num2 = "1";
console.log(num1 === num2);
//
let userName = "Hadi";
console.log(typeof userName);
console.log(userName.length);
console.log(add2.length);
console.log(userName[2]);
let string = "Hi my Name is Hadi";
// "012345678"
// "h****@gmail.com"
let email = "hadi@gmail";
console.log(email[5]);
//"@had.com"
email[4] == "@"
  ? console.log("Enter a valid email add")
  : console.log("this is a nice start for an email add");


//SOLUTION

//EX. 1 - 2
let randomWord = "I am more than 6 characters long";

console.log(randomWord);
console.log(randomWord[0]);
console.log(randomWord[6]);

//EX. 3-6
let name = "Vincent";
let age = 30;
let year = 1990;
console.log(name + " is " + age + " in " + year + ".");

//EX. 7
let isMarried = true;

//EX. 9 - 11
let programmingLanguage = "JavaScript";
let isFun = true;
console.log(programmingLanguage , isFun);
console.log(programmingLanguage[0]);
console.log(programmingLanguage[4]);
console.log(programmingLanguage.length);

//Ternary 1
let isStudent = true;
isStudent == true ? console.log("Ticket costs €5,00") : console.log("icket costs €12,00");


//Ternary 2
let speedCheck = 50;
speedCheck >= 50 ? console.log("you’re going too fast!") : console.log("ou’re driving below the speed limit, Oma") 
