//1
var move = "I can walk in the park all day."
console.log(move);

//2
var greeting = "Hello World!"
var greetingUpperCase = greeting.toUpperCase;
console.log(greetingUpperCase);

//3
var race = "Earthlings";
var raceLowerCase = race.toLowerCase;
console.log(raceLowerCase);

//4
var file = "JavaScript";
var middleOf = file.substring(3, 6);
console.log(middleOf);

//5
var shoes = "nice shoes";
var police = shoes.includes('l');
console.log(police);

//6
var engineer = file[0] + file + file[0];
console.log(engineer);

//7
var builder = file.substring(7,10) + file + file.substring(7, 10);
console.log(builder);

//8
var color = "Orange";
var colorUpperCase = color.toUpperCase;
var checkPoint = color.includes('Java');
console.log(colorUpperCase , checkPoint);


// 9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 1. eg. of output JavaScript => tavaScripJ
let Js = "JavaScript"
let modJsStr = Js.substring(1) + Js[0];
console.log(modJsStr);
let firstJsChr = Js[0];
// JavaScript
let lastJsChr = Js[Js.length - 1];
let midJsStr = Js.substring(1, Js.length - 1);
let newLongJsStr = lastJsChr + midJsStr + firstJsChr;
console.log(newLongJsStr);
// 10. Create 3 different variables about yourself using strings as values e.g. let firstName = “Maria”. Print the sentence to the console using string interpolation e.g. “My name is Maria. I live in Berlin and I am a teacher”.
let myName = "Nancy";
let myAdd = "Berlin";
let myJob = "Teacher";
let aboutMeStr = `My name is ${myName}. I live in ${myAdd}, and I am a ${myJob}.`;
console.log(aboutMeStr);

//11. Declare a variable and assign the value “the quick brown fox” (all in lower case). Capitalize the first letter of that string. Print the result to the console.
let foxStr = "the quick brown fox";
let foxUpper = foxStr[0].toUpperCase() + foxStr.substring(1);
console.log(foxUpper);
