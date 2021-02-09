//Write a function that accepts several parameters and calculates the number
//of money that will have been saved as pension until a person retires.
//The function should be self invoked and should have the following parameters:
//The current age of the person // e.g. 40
//The retirement age of the person // e.g. 60
//The monthly wage the person earns // e.g. 1000
//The percentage (as integer) that the person saves each month // e.g. 10%
//If the person has already retired then the message ‘You’re already retired!’
//should be printed. If not, then the program should calculate how many years remain
//until the person retires, the monthly income and take a specific percent of this income
//every month as saved money.
//Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. How much money will she have saved until she retires?
//Output: $30000

((currentAge, retirementAge, wage, percentage) => {
  if (currentAge >= retirementAge) {
    console.log("You are already retired");
  } else {
    let yearsToSave = retirementAge - currentAge;
    console.log("Years to go", yearsToSave);
    let monthsToSave = yearsToSave * 12;
    console.log("Months to go", monthsToSave);
    let amountSavedByMonth = (wage * percentage) / 100;
    let totalSaved = amountSavedByMonth * monthsToSave;
    console.log(
      `You will go very old in ${yearsToSave}, and you will have ${totalSaved} in your bank`
    );
  }
})(40, 65, 2000, 5);

//TERNARY OPERATOR
let x = false;
//if (x) {
//  console.log('I am x')
//}
x ? console.log("I am x") : console.log("I am false.");
//truthy condition ? action  : falsy condition

//TRIM()
let str = "   hello  ";
console.log(str.trim()); // removes empty spaces

//trimEnd()
console.log(str.trimEnd()); // removes spaces at then end

//trimStart()
console.log(str.trimStart());

//startsWith()
let text = "Hey, it is me";
console.log(text.startsWith("Hey")); // true

//endsWith()
console.log(text.endsWith("me")); // true

//charAt()  or bracket notation[];
let cha = "h";
console.log(cha.charAt(0));
console.log(cha[0]);

//charCodeAt()
//will return integer between 0 - 65535 that replaces tHE UTF-16 CODE
console.log(cha.charCodeAt(0));

//
const monthCheck = (str) => {
  let months = [
    "december",
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
  ];
  let seasons = ["Winter", "Spring", "Summer", "Autumn"];
  const currentSe = (x) => {
    return seasons[months.indexOf(x)];
    
//return seasons[Math.floor(months.indexOf(monthName) / 3)];};
  let month = str
    .toLowerCase()
    .split(" ")
    .filter((word) => months.includes(word))
    .join("");
  return month == ""
    ? `We couldn’t find any month in your text, sorry try again`
    : `You have entered ${month}, which is in ${currentSe(month)}`;
};
console.log(monthCheck("I love April"));
console.log(monthCheck("We need Kartoffel"));

console.log("____________________");
